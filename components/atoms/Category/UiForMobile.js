export default function UiForMobile({
  categories,
  handleShowHideOtherCategory,
}) {
  return (
    <>
      {categories.slice(0, 3).map((item, index) => (
        <div
          className="block sm:hidden text-center my-4 group cursor-pointer"
          key={index}
        >
          <div className="w-24 h-24 p-2 rounded border border-gray m-auto group-hover:scale-110 transition duration-75">
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

      <div className="w-24 h-24 m-auto" onClick={handleShowHideOtherCategory}>
        <h1 className="text-6xl text-center text-gray block m-auto">
          <i className="bx bxs-category"></i>
        </h1>

        <h1 className="text-sm font-semibold text-slate-600 text-center">
          Lainnya
        </h1>
      </div>
    </>
  );
}
