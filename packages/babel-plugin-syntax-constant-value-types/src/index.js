import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "syntax-constant-value-types",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("constantValueTypes");
    },
  };
});
