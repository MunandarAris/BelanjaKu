import { useState } from "react";

// next js
import dynamic from "next/dynamic";

// atoms
const UiForTabletUp = dynamic(() =>
  import("components/atoms/Category/UiForTabletUp")
);
const UiForMobile = dynamic(() =>
  import("components/atoms/Category/UiForMobile")
);
const MobileOtherCategory = dynamic(() =>
  import("components/atoms/Category/MobileOtherCategory")
);

export default function Category({ categories }) {
  // initial state
  const [showOtherCategory, setShowOtherCategory] = useState(false);

  // === handle show hide other category ===
  const handleShowHideOtherCategory = () => {
    setShowOtherCategory(!showOtherCategory);
  };
  // === handle show hide other category ===

  return (
    <>
      {/* --- main content --- */}
      <div className="max-w-6xl m-auto px-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center">
          {/* --- tablet up --- */}
          <UiForTabletUp categories={categories} />
          {/* end --- tablet up --- */}

          {/* --- mobile only --- */}
          <UiForMobile
            categories={categories}
            handleShowHideOtherCategory={handleShowHideOtherCategory}
          />
          {/* --- end mobile only --- */}
        </div>
      </div>
      {/* --- end main content --- */}

      {/* --- other coategory mobile screen --- */}
      <MobileOtherCategory
        categories={categories}
        handleShowHideOtherCategory={handleShowHideOtherCategory}
        showOtherCategory={showOtherCategory}
      />
      {/* --- end other coategory mobile screen --- */}
    </>
  );
}
