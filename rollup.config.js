import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: {
      file: "docs/extract.js",
      format: "es"
    },
    plugins: [
      postcss({
        modules: true,
        extract: true
      })
    ]
  },
  {
    input: "./src/index.js",
    output: {
      file: "docs/inline.js",
      format: "es"
    },
    plugins: [
      postcss({
        modules: true,
        inline: true
      })
    ]
  }
];
