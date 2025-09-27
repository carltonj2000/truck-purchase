import { truckFilter } from "./trucks1.ts";

const Trucks = ({ data }: { data: any }) => {
  const trucks = truckFilter(data.trucks);
  return (
    <div className="mt-6 flex flex-col items-center">
      <h2>
        Truck Options On {data.date} at {data.time}
      </h2>
      <table className="table-auto ml-2 mt-5">
        <thead className="text-sm">
          <tr className="py-2 bg-slate-300">
            <th className="py-2">VIN, Sticker, Dlr</th>
            <th className="py-2">Price</th>
            <th className="py-2">Mfg Options</th>
            <th className="py-2">Dlr Options</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck: any, idx: number) => {
            return (
              <tr
                key={idx}
                className="odd:bg-slate-100 even:bg-slate-200 border-y border-gray-300"
              >
                <td className="px-2 py-2 text-xs align-top">
                  <div className="flex flex-col items-end">
                    <a href={`/windowStickers/${truck.vin}.pdf`}>
                      <div>{truck.vin}</div>
                    </a>
                    <div>{truck.stickerDate}</div>
                    <div>{truck.exteriorColorShort}</div>
                    <div>{truck.dealerShort}</div>
                  </div>
                </td>
                <td className="px-2 py-2 text-sm font-mono w-[120px]">
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs text-slate-400">bsrp</span>
                    <span>{truck.bsrp}</span>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs text-slate-400">srp</span>
                    <span>{truck.srp}</span>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs text-slate-400">list</span>
                    <span>{truck.listPrice}</span>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs text-slate-400">down</span>
                    <span>{truck.downPayment}</span>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs text-slate-700">Total</span>
                    <span>{truck.listPrice + truck.downPayment}</span>
                  </div>
                </td>
                <td className="px-2 py-2 text-xs">
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
                <td className="px-2 py-2 text-xs">
                  {!truck.options.dealer ? (
                    <span>None</span>
                  ) : (
                    truck.options.dealer.map(
                      ({ name }: { name: any }, key: any) => (
                        <span
                          key={key}
                          className="bg-slate-50 px-2 py-1 rounded-lg"
                        >
                          {name}
                        </span>
                      ),
                    )
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Trucks;
