// next js
import Link from "next/link";

export default function DrawerMenu({
  showMobileMenu,
  menuLinks,
  handleShowHideMobileMenu,
}) {
  return (
    <>
      <div
        className={`fixed md:hidden animate-drawerMenuShowwing shadow-2xl z-50 top-0 flex-col items-center justify-start h-screen bg-blue ${
          showMobileMenu
            ? "right-0 opacity-100 flex w-8/12 sm:w-6/12"
            : "-right-96 hidden opacity-0 w-0"
        }`}
      >
        {menuLinks.map((item, index) => (
          <Link href={item.path} key={index}>
            <a
              onClick={handleShowHideMobileMenu}
              className="text-white text-xs font-semibold my-5"
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
