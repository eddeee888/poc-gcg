import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = async (
  _parent,
  { id }, // Note 3: This is `string` 👍
  { data }
) => {
  return {
    __typename: "BookResult",
    result: data.books[id],
  };
};
