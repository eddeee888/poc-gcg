import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/schema": defineConfig({
      typesPluginsConfig: {
        contextType: "../index#ResolverContext",
        scalars: {
          ID: {
            input: "string",
            output: "string | number",
          },
          DateTime: {
            input: "Date",
            output: "Date | string | number",
          },
        },
      },
    }),
  },
};
export default config;
