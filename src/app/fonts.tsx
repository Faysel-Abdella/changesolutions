import { Manrope } from "next/font/google";
import { Baskervville } from "next/font/google";

import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: "600",
});

export const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
export const clashBold = localFont({
  src: "./fonts/ClashGrotesk-Bold.woff2",
});

export const clashSemibold = localFont({
  src: "./fonts/ClashGrotesk-Semibold.woff2",
});

export const clashMedium = localFont({
  src: "./fonts/ClashGrotesk-Medium.woff2",
});

export const gilroyExtraBold = localFont({
  src: "./fonts/Gilroy-Extrabold.woff2",
});

export const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.woff2",
});
export const gilroySemiBold = localFont({
  src: "./fonts/Gilroy-Semibold.woff2",
});
export const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.woff2",
});
export const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.woff2",
});
export const gilroyThin = localFont({
  src: "./fonts/Gilroy-Thin.woff2",
});

export const gilroyRegularItalic = localFont({
  src: "./fonts/Gilroy-RegularItalic.woff2",
});
