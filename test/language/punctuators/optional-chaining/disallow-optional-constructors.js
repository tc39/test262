/*---
esid: pending
features: [optional-chaining]
info: |
  Optionally calling a constructor is disallowed
negative:
  phase: parse
  type: SyntaxError
---*/

function A() { }

new A ?.();