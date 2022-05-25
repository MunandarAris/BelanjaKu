// next js
import Link from "next/link";

// plugins
import { ConvertToIDR } from "constant/plugins/CovertToIDR";
import { CountDiscount } from "constant/plugins/CountDiscount";

export default function CardProduct({ data }) {
  return (
    <div className="relative">
      {/* --- image section --- */}
      <div className="h-48 sm:h-52 bg-gray rounded-tr-md rounded-tl-md">
        <img
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover rounded-tr-md rounded-tl-md"
          loading="lazy"
        />
      </div>
      {/* --- end image section --- */}

      {/* --- body section --- */}
      <div className="p-3 border border-gray rounded-br-md rounded-bl-md">
        <h6 className="text-gray text-xs font-semibold">{data.stock} Produk</h6>
        <h1 className="font-bold text-black text-base -mt-1">{data.name}</h1>

        <div className="mt-1">
          {data.isPromo ? (
            <h6 className="text-sm text-slate-500 font-semibold line-through">
              {ConvertToIDR(data.pricing)}
            </h6>
          ) : (
            ""
          )}

          <h1 className="font-bold text-xl underline underline-offset-2 text-orange">
            {ConvertToIDR(data.isPromo ? CountDiscount(data) : data.pricing)}
          </h1>
        </div>

        <Link href={`/products/detail-product-masih-statis`}>
          <button className="text-2xl bg-orange text-white px-3 rounded-md block ml-auto mt-5">
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </Link>
      </div>
      {/* --- end body section --- */}

      {/* --- promo section --- */}
      {data.isPromo ? (
        <div className="absolute bg-orange top-5 py-1 px-4">
          <h4 className="text-white font-semibold text-sm">
            Promo {data.promotion}%
          </h4>
        </div>
      ) : (
        ""
      )}

      {/* --- end promo section --- */}
    </div>
  );
}
