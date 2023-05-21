import type { PriceAmountResolvers } from "./../../types.generated";
export const PriceAmount: PriceAmountResolvers = {
  amount: ({ amount }) => {
    return amount;
  },
  amountDisplayed: () => {
    return true;
  },
  currency: ({ locale }) => {
    return locale === "en_US" ? "USD" : "AUD";
  },
  display: ({ amount, locale }) => {
    // assuming this is used to show amount on the UI
    if (locale === "en_US") {
      return `USD $${amount / 100}`;
    } else if (locale === "en_AU") {
      return `AUD $${amount / 100}`;
    }
    return null;
  },
  selector: () => {
    return null;
  },
  taxAmount: ({ amount }) => {
    return amount / 10;
  },
};
