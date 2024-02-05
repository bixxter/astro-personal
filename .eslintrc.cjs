/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["astro", "jsx-a11y"],
  extends: ["plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
