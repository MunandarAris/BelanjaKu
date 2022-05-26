// next js
import dynamic from "next/dynamic";

// moleculs
const LayoutGeneral = dynamic(() =>
  import("components/moleculs/LayoutGeneral")
);
const Sliders = dynamic(() => import("components/moleculs/Slider"));
const CardProduct = dynamic(() => import("components/moleculs/CardProduct"));
const Services = dynamic(() => import("components/moleculs/Services"));
const Category = dynamic(() => import("components/moleculs/Category"));

// meta tags
import MetaTags from "constant/MetaTags";

// constant
import {
  dataSlider,
  pcProduct,
  services,
  peralatanRumahTangga,
  categories,
} from "constant/fakeData";

export default function HomePage() {
  return (
    <>
      {/* --- meta tags --- */}
      <MetaTags title="Temukan Produk Terbaikmu Di Sini" />
      {/* --- end meta tags --- */}

      <LayoutGeneral>
        <main>
          {/* --- sliders --- */}
          <Sliders sliders={dataSlider} />
          {/* --- end sliders --- */}

          {/* --- category --- */}
          <Category categories={categories} />
          {/* --- end category --- */}

          <section className="max-w-6xl mt-5 m-auto p-5">
            {/* --- pc category --- */}
            <CardProduct data={pcProduct} category="Peralatan Komputer" />
            {/* --- end pc category --- */}

            {/* --- peralatan rumah tangga --- */}
            <div className="mt-20">
              <CardProduct
                data={peralatanRumahTangga}
                category="Peralatan Dapur"
              />
            </div>
            {/* --- end peralatan rumah tangga --- */}

            {/* --- services ---- */}
            <Services services={services} />
            {/* --- end services ---- */}
          </section>
        </main>
      </LayoutGeneral>
    </>
  );
}
