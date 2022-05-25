// next js
import Link from "next/link";

export default function MenuSecondNavigation() {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-6xl m-auto w-full flex items-center select-none px-2 py-3 md:py-4 justify-between">
        {/* --- logo website --- */}
        <Link href="/">
          <div className="flex items-center justify-center cursor-pointer gap-2">
            <h1 className="text-4xl sm:text-5xl text-blue">
              <i className="bx bx-store-alt"></i>
            </h1>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue">
                BelanjaKu
              </h1>
              <p className="text-xs sm:text-sm text-gray w-full -mt-1">
                Belanja lebih mudah dan praktis
              </p>
            </div>
          </div>
        </Link>
        {/* --- end logo website --- */}

        {/* --- menu right --- */}
        <div className="flex items-center justify-between gap-9">
          {/* --- contact us --- */}
          <div className="hidden items-center justify-center gap-2 md:flex">
            <h1 className="text-2xl text-orange">
              <i className="bx bxs-phone"></i>
            </h1>

            <div>
              <p className="text-xs text-gray">
                Buka senin - sabtu dari 08.00 - 17.00
              </p>
              <h1 className="text-black font-bold">0821 - 2334 - 122</h1>
            </div>
          </div>
          {/* --- end contact use --- */}

          {/* --- login and register --- */}
          <div className="flex items-center gap-4">
            <Link href="/register">
              <button className="text-xs sm:text-sm rounded hidden sm:flex items-center border-2 text-orange font-bold py-2 px-4">
                <span>Daftar</span>
              </button>
            </Link>

            <Link href="/login">
              <button className="text-xs sm:text-sm bg-orange gap-1 rounded flex items-center text-white font-bold p-2">
                <span>Masuk</span> <i className="bx bxs-log-in"></i>
              </button>
            </Link>
          </div>
          {/* --- end login and register --- */}
        </div>
        {/* --- end menu right --- */}
      </div>
    </div>
  );
}
