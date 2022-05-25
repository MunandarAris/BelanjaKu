// next js
import dynamic from "next/dynamic";

// moleculs
const LayoutGeneral = dynamic(() =>
  import("components/moleculs/LayoutGeneral")
);
const HeaderBannerPage = dynamic(() =>
  import("components/moleculs/HeaderBannerPage")
);
const AllProducts = dynamic(() => import("components/moleculs/AllProducts"));

// constant
import { pcProduct, peralatanRumahTangga } from "constant/fakeData";

// meta tags
import MetaTags from "constant/MetaTags";

export default function Products() {
  // fake data
  const products = [...pcProduct, ...peralatanRumahTangga, ...pcProduct];
  return (
    <>
      {/* --- meta tags --- */}
      <MetaTags title="Semua Produk Yang Ada Di BelanjaKu" />
      {/* --- end meta tags --- */}

      <LayoutGeneral>
        {/* --- header section --- */}
        <HeaderBannerPage title="Produk Kami" />
        {/* --- end header section --- */}

        {/* --- products --- */}
        <div className="py-14">
          <AllProducts data={products} />
        </div>
        {/* --- end products --- */}
      </LayoutGeneral>
    </>
  );
}
