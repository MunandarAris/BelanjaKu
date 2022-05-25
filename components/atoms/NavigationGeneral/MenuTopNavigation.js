// next js
import Link from "next/link";

export default function MenuTopNavigation({
  showMobileMenu,
  handleShowHideMobileMenu,
  menuLinks,
  sosialMedia,
}) {
  return (
    <>
      <div className="bg-blue px-2 py-1 md:py-0">
        <div className="max-w-6xl m-auto flex items-center">
          {/* --- mobile menu --- */}
          <div className="block md:hidden mr-auto">
            {/* --- button menu --- */}
            {showMobileMenu ? (
              <h1
                className="text-white text-3xl animate-rotateRight origin-center"
                onClick={handleShowHideMobileMenu}
              >
                <i className="bx bx-x"></i>
              </h1>
            ) : (
              <h1
                className="text-white text-3xl animate-rotateLeft origin-center"
                onClick={handleShowHideMobileMenu}
              >
                <i className="bx bx-menu"></i>
              </h1>
            )}
            {/* --- end button menu --- */}
          </div>
          {/* --- end mobile menu --- */}

          {/* --- menu links */}
          <div className="md:flex xl:gap-5 hidden gap-0 mr-auto">
            {menuLinks.map((item, index) => (
              <Link key={index} href={item.path}>
                <a className="text-white text-sm font-semibold select-none lg:p-5 p-4 transition hover:bg-orange">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          {/* --- end menu links --- */}

          {/* ---- icons sosmed --- */}
          <div className="flex items-start gap-3 pr-0 md:pr-5">
            {sosialMedia.map((item, index) => (
              <a
                href={item.path}
                key={index}
                className="text-white text-xl hover:text-orange transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
          {/* --- end icons sosmed --- */}
        </div>
      </div>
    </>
  );
}
