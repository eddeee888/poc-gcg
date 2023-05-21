import { PriceAmount } from "../types.generated";

export type PriceAmountMapper = {
  amount: number;
  locale: "en_AU" | "en_US";
  roundingStrategy?:
    | "alwaysDecimals"
    | "alwaysRound"
    | "decimalsIfNeeded"
    | "noRounding"
    | "roundToNearestTen";
  unit?: "direct" | "monthly";
};
