import type { QueryResolvers } from "./../../../types.generated";
export const breakdown: NonNullable<QueryResolvers["breakdown"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return {
    __typename: "RealTimeFinancingBreakdown",
    financedAmount: {
      __typename: "PriceAmount",
      amount: 10000, // In this example, this is in cents
      locale: "en_AU",
      source: "test",
      includingVat: true,
    },
  };
};
