// next js
import dynamic from "next/dynamic";

// atoms
const ProductSection = dynamic(() => import("components/atoms/ProductSection"));

export default function AllProducts({ data }) {
  return (
    <>
      {/* --- product section --- */}
      <div className="grid max-w-6xl px-5 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10">
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
