export default function MenuSearchSectionNavigation() {
  return (
    <>
      <div className="bg-blue px-2 py-1 md:py-0">
        <div className="max-w-6xl m-auto flex items-center px-3 py-2 sm:py-4">
          <div className="bg-white h-11 w-full flex items-center rounded-md sm:rounded-xl">
            {/* --- section desc --- */}
            <div className="bg-orange hidden w-3/12 rounded-tl-md rounded-bl-md sm:rounded-tl-xl sm:rounded-bl-xl sm:flex items-center gap-2 h-full px-5">
              <h1 className="text-2xl text-white">
                <i className="bx bx-grid-alt"></i>
              </h1>

              <h1 className="text-white font-semibold text-sm">
                Temukan Produk
              </h1>
            </div>
            {/* --- end section desc --- */}

            {/* --- input field section --- */}
            <div className=" w-9/12 sm:w-7/12 md:w-8/12">
              <input
                placeholder="cari produk disini..."
                className="text-black text-sm px-3 font-semibold outline-none h-auto w-full"
              />
            </div>
            {/* --- end input field section */}

            {/* --- button search --- */}
            <button className="flex items-center rounded-tr-md sm:rounded-tr-xl rounded-br-md sm:rounded-br-xl text-xs sm:text-sm font-semibold text-white h-full justify-center gap-1 w-3/12 sm:w-2/12 md:1/12 bg-orange">
              <i className="bx bx-search text-sm sm:text-xl"></i>
              <span>Cari</span>
            </button>
            {/* --- end button search --- */}
          </div>
        </div>
      </div>
    </>
  );
}
