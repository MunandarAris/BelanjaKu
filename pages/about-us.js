// next js
import dynamic from "next/dynamic";

// moleculs
const NavigationLayout = dynamic(() =>
  import("components/moleculs/LayoutGeneral")
);
const ComingSoon = dynamic(() => import("components/moleculs/ComingSoon"));
const HeaderBannerPage = dynamic(() =>
  import("components/moleculs/HeaderBannerPage")
);

// meta tags
import MetaTags from "constant/MetaTags";

export default function AboutUs() {
  return (
    <>
      {/* --- meta tags --- */}
      <MetaTags title="Tentang BelanjaKu" />
      {/* --- end meta tags --- */}

      <NavigationLayout>
        {/* --- header section --- */}
        <HeaderBannerPage title="Tentang Perusahaan" />
        {/* --- end header section --- */}

        {/* --- main section --- */}
        <div className="py-10 bg-gray">
          <ComingSoon />
        </div>
        {/* --- end main section --- */}
      </NavigationLayout>
    </>
  );
}
