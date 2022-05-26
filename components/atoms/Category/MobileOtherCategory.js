export default function MobileOtherCategory({
  categories,
  handleShowHideOtherCategory,
  showOtherCategory,
}) {
  return (
    <div
      className={`${
        showOtherCategory ? "block" : "hidden"
      } sm:hidden h-4/6 rounded-tr-xl rounded-tl-xl fixed w-full bg-gray bottom-0 z-30 animate-otherCategoryMobileShow`}
    >
      {/* --- element hidden --- */}
      <div
        className="m-auto h-6 justify-center flex items-center w-9 bg-slate-50 rounded-md text-center fixed right-0 left-0 my-2"
        onClick={handleShowHideOtherCategory}
      >
        <h1 className="block text-gray pb-0 text-3xl pt-1">
          <i className="bx bx-chevron-down"></i>
        </h1>
      </div>
      {/* --- end element hidden --- */}

      <div className="my-5 pb-5 overflow-x-scroll h-full">
        {/* --- categories --- */}
        <div className="grid grid-cols-2 justify-items-center">
          {categories.map((item, index) => (
            <div className=" text-center my-4" key={index}>
              <div className="w-24 h-24 m-auto">
                <div className="w-full h-full bg-gray">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              <h3 className="text-sm font-semibold text-slate-600 mt-2">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
        {/* --- end categories --- */}
      </div>
    </div>
  );
}
