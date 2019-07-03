/*---
esid: pending
info: |
  template string passed to tail position of optional chain
description: >
  Static Semantics: Early Errors
    OptionalChain:
      ?.TemplateLiteral
      OptionalChain TemplateLiteral
features: [optional-chaining]
negative:
  type: SyntaxError
  phase: parse
---*/

$DONOTEVALUATE();

const a = {fn() {}};

a?.fn
  `hello`;
