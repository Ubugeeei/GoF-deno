import type { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
  scripts: {
    hello: {
      cmd: "deno run hello_deno.ts",
      "allow": ["run"]
    },
  },
};

export default config;