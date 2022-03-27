import type { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    hello: {
      cmd: "deno run hello_deno.ts",
      "allow": ["run"]
    },
    "constructor:constructor_function": {
      cmd: "deno run src/constructor_pattern/constructor_function/example.js",
    },
    "constructor:prototype_constructor": {
      cmd: "deno run src/constructor_pattern/prototype_constructor/example.js",
    },
    "prototype": {
      cmd: "deno run src/prototype_pattern/example.ts",
    },
    "abstract_factory": {
      cmd: "deno run src/abstract_factory_pattern/example.ts",
    },
    "builder": {
      cmd: "deno run src/builder_pattern/example.ts",
    }
  },
};

export default config;