/*---
esid: pending
features: [optional-chaining]
info: |
  It is a SyntaxError to attempt to optionally access properties on keywords.
negative:
  phase: parse
  type: SyntaxError
---*/

let a = import ?.property;
