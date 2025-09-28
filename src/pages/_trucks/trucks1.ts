const SR5 = { trim: "SR5" };
const exteriorColorWhite = {
  exteriorColor: "Ice Cap",
  exteriorColorShort: "white",
};
const exteriorColorSilver = {
  exteriorColor: "Celestial Silver Metallic",
  exteriorColorShort: "silver",
};
const dealerDw = { dealer: "David Wilson", dealerShort: "dw" };
const dealerFindlay = { dealer: "Findlay", dealerShort: "fn" };
const dealerAutoNation = { dealer: "AutoNation", dealerShort: "an" };
const dealerCc = { dealer: "Centennial Center", dealerShort: "cc" };
const price = (
  bsrp: any,
  srp: any,
  listPrice: any,
  downPayment: any,
  taxFees: any,
) => ({
  bsrp,
  srp,
  listPrice,
  downPayment,
  taxFees,
});
const strickerDate = (date: any) => ({ stickerDate: date });

const optsF = (...opts: any[]) =>
  opts.reduce(
    (acc, optF) => {
      const opt = optF();
      return {
        total: acc.total + opt.price,
        opts: [...acc.opts, opt],
      };
    },
    { opts: [], total: 0 },
  );

const mFullSpare = () => ({ name: "Full-Size Spare Tire", price: 85 });
const mUpgrdCld = () => ({
  name: "SR5 Upgrade + Cold Weather Package",
  price: 0,
});
const mSideLed = () => ({
  name: "IP Side Accessory - LED Lantern",
  price: 160,
});
const mFlrLnrs = () => ({ name: "All Weather Floor Liners", price: 199 });
const mTailGt = () => ({ name: "Tailgate Insert", price: 99 });
const mTubStep = () => ({ name: "Oval Tube Step", price: 600 });
const mBedLnr = () => ({ name: "Spray-On Bed Liner", price: 575 });
const mDorGrd = () => ({ name: "Door Edge Guard", price: 160 });
const mDelivery = () => ({ name: "Delivery, Proc & Handling ", price: 1495 });

const tState = () => ({ name: "State Tax", price: 3039 });
const tCounty = () => ({ name: "County Tax", price: 677 });
const tDoc = () => ({ name: "Doc Fee", price: 499 });
const tTitle = () => ({ name: "Title Fee", price: 20 });
const tTitleProc = () => ({ name: "Title Processing Fee", price: 8 });
const tReg = () => ({ name: "Registration Fee", price: 38 });
const tVinIns = () => ({ name: "Vin Inspection Fee", price: 1 });
const tPlate = () => ({ name: "Plate Cost Recovery Fee", price: 8 });
const tPrison = () => ({ name: "Prison Industry Fee", price: 1 });
const tPermit = () => ({ name: "Drive Away Permit", price: 8 });
const tTire = () => ({ name: "Tire Fee", price: 5 });

export const trucks = [
  {
    vin: "3TMLB5JN1SM156384",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerDw,
    ...price(40490, 43863, 43863, 4887, 4303),
    ...strickerDate("2025-06-14"),
    options: {
      manufacture: optsF(
        mFullSpare,
        mSideLed,
        mFlrLnrs,
        mTailGt,
        mTubStep,
        mBedLnr,
        mDorGrd,
        mDelivery,
      ),
      tax: optsF(
        tState,
        tCounty,
        tDoc,
        tTitle,
        tTitleProc,
        tReg,
        tVinIns,
        tPlate,
        tPrison,
        tPermit,
        tTire,
      ),
    },
  },
  {
    vin: "3TMLB5JN9SM163910",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerFindlay,
    ...price(40090, 43043, 44638, 4964, 4368),
    ...strickerDate("2025-07-05"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    ...exteriorColorWhite,
    vin: "3TMLB5JN1SM159902",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerFindlay,
    ...price(40490, 44038, 45633, 5064),
    ...strickerDate("2025-06-25"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN8SM166796",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN5SM162317",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN1SM139701",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN4SM157657",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerDw,
    ...price(40490, 43544, 43544, 4855),
    ...strickerDate("2025-06-18"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN3SM170366",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerFindlay,
    ...price(40490, 43778, 45373, 5038),
    ...strickerDate("2025-07-18"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN9SM171683",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerAutoNation,
    ...price(40490, 43272, 45647, 5065),
    ...strickerDate("2025-08-01"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JNXSM157033",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN0SM156022",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN5SM157957",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN8SM151697",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN8SM159699",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN0SM170440",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN2SM163716",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN9SM171554",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerCc,
    ...price(40490, 47364, 47364, 2000),
    ...strickerDate("2025-08-01"),
    options: {
      manufacture: optsF(mFullSpare),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN7SM167602",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
  {
    vin: "3TMLB5JN9SM148100",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: optsF(mFullSpare, mUpgrdCld),
      tax: optsF(tState),
    },
  },
];

export const data = {
  date: "09/23/25",
  time: "12:30 PM",
  trucks,
};

export const truckFilter = (trucks: any) =>
  trucks.filter((t: any) => {
    console.log(t);
    const res = t.options.manufacture.opts.filter(
      (mo: any) => mo.name === mUpgrdCld.name,
    );
    return res.length === 0;
  });

/* Findlay Henderson
 * 3TYKB5FN1ST43G934 trd sport for around 48K arriving October 31st.
 */
