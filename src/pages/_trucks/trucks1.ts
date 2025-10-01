// The data below was gathered from the
// https://www.toyota.com/
// Click `Shopping` and then `Search Inventory`.
// Date captured form 09/23/25 12:30 PM on

const SR5 = { trim: "SR5" };
const exteriorColorWhite = {
  exteriorColor: "Ice Cap",
  exteriorColorShort: "white",
};
const exteriorColorSilver = {
  exteriorColor: "Celestial Silver Metallic",
  exteriorColorShort: "silver",
};
const dealerDw = { dealerName: "David Wilson", dealerShort: "dw" };
const dealerFindlay = { dealerName: "Findlay", dealerShort: "fn" };
const dealerAutoNation = { dealerName: "AutoNation", dealerShort: "an" };
const dealerCc = { dealerName: "Centennial Center", dealerShort: "cc" };
const price = (
  bsrp: number,
  srp: number,
  listPrice: number,
  downPayment: number,
  financeDiscount?: number,
) => ({
  bsrp,
  srp,
  listPrice,
  downPayment,
  financeDiscount,
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
type OptFFT = (price: number) => OptFT;

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
  name: "IP Side Accry LED Lantern",
  price: 160,
});
const mFlrLnrs: OptFT = () => ({
  name: "All Weather Floor Liners",
  price: 199,
});
const mTailGt: OptFFT =
  (price: number = 99) =>
    () => ({
      name: "Tailgate Insert",
      price,
    });
const mTubStep: OptFT = () => ({ name: "Oval Tube Step", price: 600 });
const mBedLnr: OptFT = () => ({ name: "Spray-On Bed Liner", price: 575 });
const mDorGrd: OptFT = () => ({ name: "Door Edge Guard", price: 160 });
const mFog: OptFT = () => ({ name: "Rigid Fog Lights: White", price: 680 });
const mBdgOvr: OptFT = () => ({ name: "Black Badge Overlay", price: 160 });
const mWhelLcks: OptFT = () => ({ name: "Wheel Locks", price: 105 });
const mSpareLcks: OptFT = () => ({ name: "Spare Tire Locks", price: 75 });
const mHeatSeat: OptFT = () => ({ name: "Heated Fron Seats", price: 585 });
const mEmrgncyKit: OptFT = () => ({ name: "Emergency Kit", price: 75 });
const mBedStep: OptFT = () => ({ name: "Bed Step", price: 455 });
const mSmrtUsb: OptFT = () => ({ name: "Phone Cables - Smart USB", price: 70 });
const mBedMat: OptFT = () => ({ name: "Bed Mat", price: 200 });
const mCrgoNet: OptFT = () => ({ name: "Bed Cargo Net", price: 59 });
const mBallMnt: OptFT = () => ({ name: "Bed Mat", price: 70 });
const mExhaust: OptFT = () => ({ name: "Exhaust Tip Chrome", price: 120 });
const mLift: OptFT = () => ({
  name: "TRD 2.5 Suspension Lift Kit",
  price: 3400,
});
const mExhaustBlk: OptFT = () => ({
  name: "Exhaust Tip Black Chrome",
  price: 130,
});
const mPstep: OptFT = () => ({ name: "Predator Step", price: 700 });
const mDelivery: OptFFT = (price) => () => ({
  name: "Delivery, Proc & Handling ",
  price,
});
const mMudGrd: OptFT = () => ({ name: "Mudguard", price: 160 });

const tState: OptFFT = (price: number) => () => ({ name: "State Tax", price });
const tCounty: OptFFT = (price: number) => () => ({
  name: "County Tax",
  price,
});
const tDoc: OptFT = () => ({ name: "Doc Fee", price: 499 });
const tDoc2: OptFT = () => ({ name: "Doc Fee", price: 799 });
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
/*
const dFlrLnrs: OptFT = () => ({ name: "All Weather Floor Liners", price: 0 });
const dWhelLcks: OptFT = () => ({ name: "Wheel Locks", price: 0 });
*/
const dApprProtec: OptFT = () => ({ name: "Apperance Pro 3 yrs", price: 749 });
const dDentProtec: OptFT = () => ({ name: "Dent Pro 3 yrs", price: 749 });
const dCentrCon: OptFT = () => ({ name: "Center Console Tray", price: 79 });
const dWinTint: OptFT = () => ({ name: "Ceramic Window Ting", price: 599 });
const dWhlLock: OptFT = () => ({ name: "Wheel Locks", price: 199 });
const dConPkg: OptFT = () => ({
  name: "Tyta LV Convenience Pkg",
  price: 1995,
});
const dConPkgDis: OptFT = () => ({
  name: "Convenience Pkg Discount",
  price: -1995,
});
const dFinPkg: OptFT = () => ({
  name: "Findlay Package",
  price: 1595,
});

export type TruckT = {
  vin: string;
  trim: string;
  dealerName?: string;
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
  manufacture: OptsT;
  dealer?: OptsT;
  tax?: OptsT;
};

export const trucks: TruckT[] = [
  {
    vin: "3TMLB5JN1SM156384",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerDw,
    ...price(40490, 43863, 43863, 4887, 500),
    ...strickerDate("2025-06-14"),
    manufacture: optsF(
      mFullSpare,
      mSideLed,
      mFlrLnrs,
      // @ts-ignore
      mTailGt(),
      mTubStep,
      mBedLnr,
      mDorGrd,
      mDelivery(1495),
    ),
    dealer: optsF(
      dCharg,
      dTint,
      dHoodPro,
      dDoorPro,
      // dFlrLnrs,
      // dWhelLcks,
      dConPkg,
      dConPkgDis,
    ),
    tax: optsF(
      tState(3039),
      tCounty(677),
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
    ...price(40090, 43043, 44638, 4964, 500),
    ...strickerDate("2025-07-05"),
    manufacture: optsF(
      mFullSpare,
      mFlrLnrs,
      // @ts-ignore
      mTailGt(),
      mBedLnr,
      mDelivery(1295),
    ),
    dealer: optsF(dFinPkg),
    tax: optsF(
      tState(3092),
      tCounty(688),
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
    vin: "3TMLB5JN1SM159902",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerFindlay,
    ...price(40490, 44038, 45633, 5064, 500),
    ...strickerDate("2025-06-25"),
    manufacture: optsF(
      mBedLnr,
      mMudGrd,
      mFog,
      mFullSpare,
      mBdgOvr,
      mTailGt(89),
      mWhelLcks,
      mFlrLnrs,
      mDelivery(1495),
    ),
    dealer: optsF(dFinPkg),
    tax: optsF(
      tState(3160),
      tCounty(704),
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
    vin: "3TMLB5JN8SM166796",
    ...SR5,
    ...exteriorColorWhite,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN5SM162317",
    ...SR5,
    ...exteriorColorWhite,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN1SM139701",
    ...SR5,
    ...exteriorColorWhite,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN4SM157657",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerDw,
    ...price(40490, 43544, 43544, 4855, 500),
    ...strickerDate("2025-06-18"),
    manufacture: optsF(
      mHeatSeat,
      mFullSpare,
      mBedStep,
      mFlrLnrs,
      mSpareLcks,
      mDorGrd,
      mDelivery(1495),
    ),
    dealer: optsF(dConPkg, dConPkgDis),
    tax: optsF(
      tState(3039),
      tCounty(650), // made up numbers
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
    vin: "3TMLB5JN3SM170366",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerFindlay,
    ...price(40490, 43778, 45373, 5038, 500),
    ...strickerDate("2025-07-30"),
    manufacture: optsF(
      mFullSpare,
      mFlrLnrs,
      mSmrtUsb,
      mBedMat,
      mBallMnt,
      mExhaust,
      mMudGrd,
      mPstep,
      mTailGt(89),
      mDelivery(1595),
    ),
    dealer: optsF(dFinPkg),
    tax: optsF(
      tState(3142),
      tCounty(700), // made up numbers
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
    vin: "3TMLB5JN9SM171683",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerAutoNation,
    ...price(40490, 43272, 45647, 5065, 500),
    ...strickerDate("2025-08-01"),
    manufacture: optsF(
      mFullSpare,
      mFlrLnrs,
      mSmrtUsb,
      mEmrgncyKit,
      mExhaustBlk,
      mDorGrd,
      mCrgoNet,
      mMudGrd,
      mBdgOvr,
      mTailGt(89),
      mDelivery(1595),
    ),
    dealer: optsF(dApprProtec, dDentProtec, dCentrCon, dWinTint, dWhlLock),
    tax: optsF(
      tState(3182),
      tCounty(708), // made up numbers
      tDoc2,
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
    vin: "3TMLB5JNXSM157033",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN0SM156022",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN5SM157957",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN8SM151697",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN8SM159699",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN0SM170440",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN2SM163716",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN9SM171554",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerCc,
    ...price(40490, 47364, 47364, 2000, 0),
    ...strickerDate("2025-08-01"),
    manufacture: optsF(
      mMudGrd,
      mFullSpare,
      mLift,
      mFlrLnrs,
      mBedLnr,
      mPstep,
      mBdgOvr,
      mDelivery(1595),
    ),
    tax: optsF(
      tState(3092),
      tCounty(688),
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
    vin: "3TMLB5JN7SM167602",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
  {
    vin: "3TMLB5JN9SM148100",
    ...SR5,
    ...exteriorColorSilver,
    manufacture: optsF(mFullSpare, mUpgrdCld),
  },
];

export const data = {
  trucks,
};

export const truckFilter = (trucks: TruckT[]) =>
  trucks.filter((t: TruckT) => {
    if (!t.manufacture) return true;
    const res = t.manufacture.opts.filter(
      (mo: OptT) => mo.name === mUpgrdCld().name,
    );
    return res.length === 0;
  });

export const truckSort = (trucks: TruckT[]) =>
  trucks.sort((a: TruckT, b: TruckT) => {
    if (!a.listPrice || !b.listPrice) return 1;
    const taxA = a.tax ? a.tax.total : 0;
    const dealerA = a.dealer ? a.dealer.total : 0;
    const taxB = b.tax ? b.tax.total : 0;
    const dealerB = b.dealer ? b.dealer.total : 0;
    return a.listPrice + dealerA + taxA < b.listPrice + dealerB + taxB ? -1 : 1;
  });

/* Findlay Henderson
 * 3TYKB5FN1ST43G934 trd sport for around 48K arriving October 31st.
 */
