export default function HeaderBannerPage({ title }) {
  return (
    <>
      <div className="bg-orange select-none relative h-32 sm:h-40 md:h-32 flex overflow-hidden items-center justify-center">
        <h1 className="font-bold text-xl sm:text-3xl text-white z-40">
          {title}
        </h1>

        {/* --- wave element --- */}
        <img
          src="/wave-one.svg"
          className="absolute w-auto h-auto z-20 bottom-0 sm:-bottom-10 md:-bottom-20"
          loading="lazy"
        />
        {/* --- end wave element --- */}
      </div>
    </>
  );
}
