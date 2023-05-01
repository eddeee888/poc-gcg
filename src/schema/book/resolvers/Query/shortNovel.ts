import type { QueryResolvers } from "./../../../types.generated";
export const shortNovel: NonNullable<QueryResolvers["shortNovel"]> = async (
  _parent,
  { inputDateTime }, // Note 6: This is `Date` because `graphql-scalars` turned it into `Date` via `parseValue` 👍
  _ctx
) => {
  /* Implement Query.shortNovel resolver logic here */
  return {
    __typename: "ShortNovel",
    id: "Test",
    summary: "",
    outputDateTime: inputDateTime,
  };
};
