// constant
import { socialMedia, payment } from "constant/fakeData";

// next js
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-blue select-none">
      <div className="max-w-6xl m-auto px-3 py-10 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-10 lg:gap-20 items-stretch">
        {/* --- logo section --- */}
        <div>
          <div className="flex cursor-pointer gap-2">
            <h1 className="text-4xl sm:text-5xl text-white">
              <i className="bx bx-store-alt"></i>
            </h1>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                BelanjaKu
              </h1>
              <p className="text-xs sm:text-sm text-gray w-full -mt-1">
                Belanja lebih mudah dan praktis
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-200 font-semibold mt-5">
            Sebuah toko online yang menyediakan berbagai kebutuhan sehari - hari
            seperti pakaian, pakain pria, pakaian wanita, peralatan masak,
            elektronik dan masih banyak lagi
          </p>
        </div>
        {/* --- end logo section --- */}

        {/* --- payment --- */}
        <div>
          <h1 className="font-bold text-white text-xl sm:text-2xl">
            Pembayaran
          </h1>

          <div className="flex flex-wrap gap-3  mt-5">
            {payment.map((item, index) => (
              <div className="w-12 h-12 bg-white p-1 rounded" key={index}>
                <img
                  src={`/payment/` + item}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* --- end payment --- */}

        {/* --- sosial media --- */}
        <div>
          <h1 className="font-bold text-white text-xl sm:text-2xl">
            Ikuti Kami
          </h1>

          <div className="flex items-center gap-3 mt-5">
            {socialMedia.map((item, index) => (
              <Link href={item.path} key={index}>
                <h6 className="text-white bg-orange rounded py-1 px-3 cursor-pointer">
                  {item.icons}
                </h6>
              </Link>
            ))}
          </div>
        </div>
        {/* --- end sosial media --- */}
      </div>

      <hr className="border-[0.2px] border-slate-400" />

      <h1 className="text-white font-bold text-sm py-3 select-none text-center">
        &copy; BelanjaKu 2022
      </h1>
    </div>
  );
}
