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
  bsrp: number,
  srp: number,
  listPrice: number,
  downPayment: number,
  taxFees?: number,
  rebate?: number,
) => ({
  bsrp,
  srp,
  listPrice,
  downPayment,
  taxFees,
  rebate,
});
const strickerDate = (sdate: string) => ({ stickerDate: sdate });

type OptT = {
  name: string;
  price: number;
};

type OptsT = {
  opts: OptT[];
  total: number;
};

type OptFT = () => OptT;

const optsF = (...opts: OptFT[]): OptsT =>
  opts.reduce<OptsT>(
    (acc, optF) => {
      const opt = optF();
      return {
        total: acc.total + opt.price,
        opts: [...acc.opts, opt],
      };
    },
    { opts: [], total: 0 },
  );

const mFullSpare: OptFT = () => ({ name: "Full-Size Spare Tire", price: 85 });
const mUpgrdCld: OptFT = () => ({
  name: "SR5 Upgrade + Cold Weather Package",
  price: 0,
});
const mSideLed: OptFT = () => ({
  name: "IP Side Accessory - LED Lantern",
  price: 160,
});
const mFlrLnrs: OptFT = () => ({
  name: "All Weather Floor Liners",
  price: 199,
});
const mTailGt: OptFT = () => ({ name: "Tailgate Insert", price: 99 });
const mTubStep: OptFT = () => ({ name: "Oval Tube Step", price: 600 });
const mBedLnr: OptFT = () => ({ name: "Spray-On Bed Liner", price: 575 });
const mDorGrd: OptFT = () => ({ name: "Door Edge Guard", price: 160 });
const mDelivery: OptFT = () => ({
  name: "Delivery, Proc & Handling ",
  price: 1495,
});

const tState: OptFT = () => ({ name: "State Tax", price: 3039 });
const tCounty: OptFT = () => ({ name: "County Tax", price: 677 });
const tDoc: OptFT = () => ({ name: "Doc Fee", price: 499 });
const tTitle: OptFT = () => ({ name: "Title Fee", price: 20 });
const tTitleProc: OptFT = () => ({ name: "Title Processing Fee", price: 8 });
const tReg: OptFT = () => ({ name: "Registration Fee", price: 38 });
const tVinIns: OptFT = () => ({ name: "Vin Inspection Fee", price: 1 });
const tPlate: OptFT = () => ({ name: "Plate Cost Recovery Fee", price: 8 });
const tPrison: OptFT = () => ({ name: "Prison Industry Fee", price: 1 });
const tPermit: OptFT = () => ({ name: "Drive Away Permit", price: 8 });
const tTire: OptFT = () => ({ name: "Tire Fee", price: 5 });

const dCharg: OptFT = () => ({ name: "Charging Cable Kit", price: 0 });
const dTint: OptFT = () => ({
  name: "XPEL Solar Plate Premium Tint",
  price: 0,
});
const dHoodPro: OptFT = () => ({
  name: "XPEL Paint Protection Partial Hood & Fender Fronts",
  price: 0,
});
const dDoorPro: OptFT = () => ({
  name: "XPEL Paint Protection Door",
  price: 0,
});
const dFlrLnrs: OptFT = () => ({ name: "All Weather Floor Liners", price: 0 });
const dWhelLcks: OptFT = () => ({ name: "Wheel Locks", price: 0 });
const dConPkg: OptFT = () => ({
  name: "Toyota of LV Convenience Pkg",
  price: 1995,
});
const dConPkgDis: OptFT = () => ({
  name: "Convenience Pkg Discount",
  price: -1995,
});

export type TruckT = {
  vin: string;
  trim: string;
  dealer?: string;
  dealerShort?: string;
  exteriorColor: string;
  exteriorColorShort: string;
  bsrp?: number;
  srp?: number;
  listPrice?: number;
  downPayment?: number;
  cashRebate?: number;
  taxFees?: number;
  stickerDate?: string;
  options: {
    manufacture: OptsT;
    dealer?: OptsT;
  };
  tax?: OptsT;
};

export const trucks: TruckT[] = [
  {
    vin: "3TMLB5JN1SM156384",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerDw,
    ...price(40490, 43863, 43863, 4887, 4303, 500),
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
      dealer: optsF(
        dCharg,
        dTint,
        dHoodPro,
        dDoorPro,
        dFlrLnrs,
        dWhelLcks,
        dConPkg,
        dConPkgDis,
      ),
    },
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

export const truckFilter = (trucks: TruckT[]) =>
  trucks.filter((t: TruckT) => {
    const res = t.options.manufacture.opts.filter(
      (mo: OptT) => mo.name === mUpgrdCld().name,
    );
    return res.length === 0;
  });

/* Findlay Henderson
 * 3TYKB5FN1ST43G934 trd sport for around 48K arriving October 31st.
 */
