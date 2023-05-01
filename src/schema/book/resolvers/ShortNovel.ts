import type { ShortNovelResolvers } from "./../../types.generated";
export const ShortNovel: ShortNovelResolvers = {
  outputDateTime: ({ outputDateTime }) => {
    // Note 5: this is `string | number | Date` 👍
    return outputDateTime || null;
  },
};
