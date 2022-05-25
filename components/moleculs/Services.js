export default function Services({ services }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 sm:mt-20">
        {services.map((item, index) => (
          <div key={index} className="my-4 sm:mt-0">
            <h1 className="text-4xl text-blue">{item.icon}</h1>
            <h3 className="font-bold text-xl mt-1 text-black">{item.name}</h3>
            <p className="text-sm font-semibold mt-2 text-slate-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
