// next js
import dynamic from "next/dynamic";

// atoms
const Navigation = dynamic(() =>
  import("components/atoms/NavigationGeneral/Navigation")
);
const Footer = dynamic(() =>
  import("components/atoms/NavigationGeneral/Footer")
);

export default function LayoutGeneral({ children }) {
  return (
    <>
      {/* --- navigation --- */}
      <Navigation />
      {/* --- end navigation --- */}

      {/* --- main content --- */}
      {children}
      {/* --- end main content --- */}

      {/* --- footer --- */}
      <Footer />
      {/* --- end footer --- */}
    </>
  );
}
