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
const fullSpare = () => ({ name: "Full-Size Spare Tire" });
const upgradeCold = () => ({ name: "SR5 Upgrade + Cold Weather Package" });
const price = (srp: any, listPrice: any, downPayment: any) => ({
  srp,
  listPrice,
  downPayment,
});
const strickerDate = (date: any) => ({ stickerDate: date });
export const trucks = [
  {
    vin: "3TMLB5JN1SM156384",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerDw,
    ...price(43863, 43863, 4887),
    ...strickerDate("2025-06-14"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JN9SM163910",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerFindlay,
    ...price(44638, 43043, 4964),
    ...strickerDate("2025-07-05"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    ...exteriorColorWhite,
    vin: "3TMLB5JN1SM159902",
    ...SR5,
    ...exteriorColorWhite,
    ...dealerFindlay,
    ...price(44038, 45633, 5064),
    ...strickerDate("2025-06-25"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JN8SM166796",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN5SM162317",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN1SM139701",
    ...SR5,
    ...exteriorColorWhite,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN4SM157657",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerDw,
    ...price(43544, 43544, 4855),
    ...strickerDate("2025-06-18"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JN3SM170366",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerFindlay,
    ...price(43778, 45373, 5038),
    ...strickerDate("2025-07-18"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JN9SM171683",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerAutoNation,
    ...price(43272, 45647, 5065),
    ...strickerDate("2025-08-01"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JNXSM157033",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN0SM156022",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN5SM157957",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN8SM151697",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN8SM159699",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN0SM170440",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN2SM163716",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN9SM171554",
    ...SR5,
    ...exteriorColorSilver,
    ...dealerCc,
    ...price(47364, 47364, 2000),
    ...strickerDate("2025-08-01"),
    options: {
      manufacture: [fullSpare()],
    },
  },
  {
    vin: "3TMLB5JN7SM167602",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
  {
    vin: "3TMLB5JN9SM148100",
    ...SR5,
    ...exteriorColorSilver,
    options: {
      manufacture: [fullSpare(), upgradeCold()],
    },
  },
];

export const data = {
  date: "09/23/25",
  time: "12:30 PM",
  trucks,
};

export const truckFilter = (trucks: any) =>
  trucks.filter(
    (t: any) =>
      t.options.manufacture.filter((mo: any) => mo.name === upgradeCold().name)
        .length === 0,
  );

export const skipCold = (options: any) => skipOption(upgradeCold, options);
export const skipOption = (option: any, options: any) => {
  return options.filter((o: any) => o.name === option);
};
