export default function CardLeft({ data, ConvertToIDR, CountDiscount }) {
  return (
    <>
      <div>
        <h1 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">
          {data.name}
        </h1>

        <div className="w-full h-50 sm:h-70 md:h-80 rounded mt-5 bg-gray">
          <img
            src={data.image}
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
        </div>

        <h6 className="text-gray font-semibold text-xs sm:text-sm my-1">
          {data.stock} Produk
        </h6>

        <div className="flex gap-0 sm:gap-2 items-start justify-start sm:items-center flex-col-reverse sm:flex-row">
          <h1 className="font-bold text-base sm:text-lg md:text-xl">
            {ConvertToIDR(data.isPromo ? CountDiscount(data) : data.pricing)}
          </h1>

          {data.isPromo ? (
            <h1 className="text-slate-500 font-semibold text-xs sm:text-sm line-through">
              {ConvertToIDR(data.pricing)}
            </h1>
          ) : (
            ""
          )}
        </div>

        <button className="border-none bg-orange text-white font-semibold text-xs sm:text-sm py-2 px-5 sm:px-7 rounded-md block ml-auto mt-2 sm:mt-5">
          Beli
        </button>
      </div>
    </>
  );
}
