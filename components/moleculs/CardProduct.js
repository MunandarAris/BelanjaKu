// next js
import dynamic from "next/dynamic";

// atoms
const ProductSection = dynamic(() => import("components/atoms/ProductSection"));

export default function CardProduct({ data, category }) {
  return (
    <>
      {/* --- header section --- */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-bold text-md sm:text-2xl text-black">{category}</h1>

        <a
          href="#"
          className="text-blue underline text-xs sm:text-sm underline-offset-2 font-semibold"
        >
          lihat lainnya
        </a>
      </div>
      {/* --- end header section --- */}

      {/* --- product section --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 mt-5 sm:mt-8">
        {data.map((item, index) => (
          <div key={index}>
            <ProductSection data={item} />
          </div>
        ))}
      </div>
      {/* --- end product section --- */}
    </>
  );
}
