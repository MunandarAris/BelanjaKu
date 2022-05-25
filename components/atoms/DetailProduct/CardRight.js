export default function CardRight({ detailProduct }) {
  return (
    <>
      <div>
        <h1 className="font-bold sm:text-lg md:text-xl mb-2 text-black">
          Detail Produk
        </h1>

        <table>
          <tbody>
            {detailProduct.map((item, index) => (
              <tr key={index}>
                <td className="font-semibold pr-1 sm:pr-2 text-xs md:text-sm py-3 text-slate-600">
                  {item.name}
                </td>

                <td className="font-semibold pl-1 sm:pl-2 text-xs md:text-sm py-3 text-slate-600">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
