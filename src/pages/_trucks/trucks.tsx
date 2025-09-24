import { truckFilter } from "./trucks1.ts";

const Trucks = ({ data }: { data: any }) => {
  const trucks = truckFilter(data.trucks);
  return (
    <div className="mt-6 flex flex-col items-center">
      <h2>
        Truck Options On {data.date} at {data.time}
      </h2>
      <table className="table-auto ml-2 mt-5">
        {trucks.map((truck: any, idx: number) => {
          return (
            <tr
              key={idx}
              className="odd:bg-slate-100 even:bg-slate-200 border-y border-gray-300"
            >
              <td className="px-2 py-2 text-xs">{idx}</td>
              <td className="px-2 py-2 text-xs">
                <a href={`/windowStickers/${truck.vin}.pdf`}>{truck.vin}</a>
              </td>
              <td className="px-2 py-2 text-xs">{truck.stickerDate}</td>
              <td className="px-2 py-2 text-xs">{truck.dealerShort}</td>
              <td className="px-2 py-2 text-sm">
                {truck.listPrice + truck.downPayment}
              </td>
              <td className="px-2 py-2 text-xs">{truck.exteriorColorShort}</td>
              <td className="px-2 py-2 flex gap-3 text-xs">
                {truck.options.manufacture.map(
                  ({ name }: { name: any }, key: any) => (
                    <span
                      key={key}
                      className="bg-slate-50 px-2 py-1 rounded-lg"
                    >
                      {name}
                    </span>
                  ),
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Trucks;
