import { declare } from "@babel/helper-plugin-utils";
import syntaxConstantValueTypes from "@babel/plugin-syntax-constant-value-types";

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "proposal-constant-value-types",
    inherits: syntaxConstantValueTypes,
  };
});
