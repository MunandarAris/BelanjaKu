// plugins
import ReactLoading from "react-loading";

export default function LoadingPages() {
  return (
    <div className="fixed z-[9999] w-full h-full flex items-center justify-center bg-black opacity-75">
      {/* --- loading on tablet up --- */}
      <ReactLoading
        type="spokes"
        color="white"
        height={"5%"}
        width={"5%"}
        className="hidden sm:block"
      />
      {/* --- end loading on tablet up --- */}

      {/* --- loading for mobile --- */}
      <ReactLoading
        type="spokes"
        color="white"
        height={"10%"}
        width={"10%"}
        className="block sm:hidden"
      />
      {/* --- end loading for mobile --- */}
    </div>
  );
}
