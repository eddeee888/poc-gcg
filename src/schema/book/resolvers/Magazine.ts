import type { MagazineResolvers } from "./../../types.generated";
export const Magazine: MagazineResolvers = {
  /* Implement Magazine resolver logic here */
  id: ({ id }) => id, // Note 2: This is `string | number` 👍
};
