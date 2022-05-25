import { useState, useEffect } from "react";

// next js
import dynamic from "next/dynamic";

// atoms
const MenutTopNavigation = dynamic(() =>
  import("components/atoms/NavigationGeneral/MenuTopNavigation")
);
const MenutSecondNavigation = dynamic(() =>
  import("components/atoms/NavigationGeneral/MenuSecondNavigation")
);
const MenuSearchSectionNavigation = dynamic(() =>
  import("components/atoms/NavigationGeneral/MenuSearchSectionNavigation")
);
const DrawerMenu = dynamic(() =>
  import("components/atoms/NavigationGeneral/DrawerMenu")
);

// costant
const menuLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tentang Perusahaan",
    path: "/about-us",
  },
  {
    name: "Semua Produk",
    path: "/products",
  },
];

const sosialMedia = [
  { icon: <i className="bx bxl-youtube"></i>, path: "#" },
  { icon: <i className="bx bxl-facebook"></i>, path: "#" },
  { icon: <i className="bx bxl-instagram-alt"></i>, path: "#" },
];

export default function Navigation() {
  // initial state
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [fixedNavigation, setFixedNavigation] = useState(false);

  // === handle show hide mobile menu ===
  const handleShowHideMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  // === handle show hide mobile menu ===

  // === scroll trigger ===
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setFixedNavigation(true);
      } else {
        setFixedNavigation(false);
      }
    });
  }, []);
  // === end scroll trigger ===

  return (
    <>
      {/* --- menu one --- */}
      <MenutTopNavigation
        showMobileMenu={showMobileMenu}
        handleShowHideMobileMenu={handleShowHideMobileMenu}
        menuLinks={menuLinks}
        sosialMedia={sosialMedia}
      />
      {/* --- end menu one --- */}

      <div className="w-full">
        {/* --- menu two --- */}
        <MenutSecondNavigation />
        {/* --- en menu two --- */}

        {/* --- search section --- */}
        <MenuSearchSectionNavigation />
        {/* --- end search section --- */}
      </div>

      {/* --- drawer menu --- */}
      <DrawerMenu
        showMobileMenu={showMobileMenu}
        menuLinks={menuLinks}
        handleShowHideMobileMenu={handleShowHideMobileMenu}
      />
      {/* --- end drawer menu --- */}

      {/* --- menu if scroll pages --- */}
      <div
        className={`${
          fixedNavigation
            ? "fixed w-full top-0 z-40 animate-navigationShowing"
            : "hidden"
        }`}
      >
        <MenutTopNavigation
          showMobileMenu={showMobileMenu}
          handleShowHideMobileMenu={handleShowHideMobileMenu}
          menuLinks={menuLinks}
          sosialMedia={sosialMedia}
        />

        <MenutSecondNavigation />
      </div>
      {/* --- end menu if scroll pages --- */}
    </>
  );
}
