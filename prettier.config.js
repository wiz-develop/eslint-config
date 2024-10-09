/** @type {import("prettier").Config} */
export default {
  // printWidth: 80,
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  singleQuote: true, // Change from default (false) because it's easier to type and read than double-quote.
  // quoteProps: 'as-needed',
  // jsxSingleQuote: false,
  // trailingComma: 'all',
  // bracketSpacing: true,
  // bracketSameLine: false,
  // arrowParens: 'always',
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // parser: undefined,
  // filePath: undefined,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: 'preserve',
  // htmlWhitespaceSensitivity: 'css',
  // vueIndentScriptAndStyle: false,
  // endOfLine: 'lf',
  // embeddedLanguageFormatting: 'auto',
  // singleAttributePerLine: false,

  plugins: ['prettier-plugin-organize-imports'],
};
