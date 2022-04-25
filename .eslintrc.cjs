/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
// "@vue/eslint-config-prettier",
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
};
