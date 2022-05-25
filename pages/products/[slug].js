// next js
import dynamic from "next/dynamic";

// moleculs
const LayoutGeneral = dynamic(() =>
  import("components/moleculs/LayoutGeneral")
);

// atoms
const CardLeft = dynamic(() =>
  import("components/atoms/DetailProduct/CardLeft")
);
const CardRight = dynamic(() =>
  import("components/atoms/DetailProduct/CardRight")
);

// meta tags
import MetaTags from "constant/MetaTags";

// constant
import { pcProduct } from "constant/fakeData";
const detailProduct = [
  { name: "Ukuran Layar Monitor", value: "1920 x 1080" },
  {
    name: "Merek Monitor",
    value:
      "Samsung M8 UHD Monitor with Smart TV Experience and Iconic Slim Design with Webcam",
  },
  { name: "CPU", value: "Intel I7 Gen 11 16gb/8gb" },
  { name: "Keyboard", value: "Sades Thyrsus" },
  { name: "Kursi Gaming", value: "BraZen Shadow" },
  { name: "Mouse", value: "Rexus Daxa Air Pro Wireles" },
];

// plugins
import { ConvertToIDR } from "constant/plugins/CovertToIDR";
import { CountDiscount } from "constant/plugins/CountDiscount";

export default function DetailProduct() {
  return (
    <>
      {/* --- meta tags --- */}
      <MetaTags title="Detail Produk" />
      {/* --- end meta tags --- */}

      <LayoutGeneral>
        {/* --- detail product --- */}
        <div className="max-w-6xl m-auto py-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-24 items-stretch justify-center">
            {/* --- card left --- */}
            <CardLeft
              data={pcProduct[0]}
              ConvertToIDR={ConvertToIDR}
              CountDiscount={CountDiscount}
            />
            {/* --- end card left --- */}

            {/* --- card right --- */}
            <CardRight detailProduct={detailProduct} />
            {/* --- end card right --- */}
          </div>
        </div>
        {/* --- end detail product --- */}
      </LayoutGeneral>
    </>
  );
}
