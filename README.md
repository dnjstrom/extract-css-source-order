# Extract css source order

Illustrates a source ordering issue in rollup-plugin-postcss where inlined and extracted css have different source order. Possibly resulting from styles being extracted in a breadth-first ordering rather than a depth-first order.

## Examples

- [Inlined css with correct order](https://dnjstrom.github.io/extract-css-source-order/inline)
- [Extracted css with incorrect order](https://dnjstrom.github.io/extract-css-source-order/extract)
