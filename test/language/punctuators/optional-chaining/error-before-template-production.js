/*---
esid: pending
info: |
  Prevent automatic semicolon insertion rules from creating ambiguous behavior
  before a template string. The purpose is to maintain consistency with similar
  code without optional chaining operator:

     a.b
     `c`
description: Optional chain before template string is a syntax error.
features: [optional-chaining]
negative:
  phase: parse
  type: SyntaxError
---*/

let result = a ?.b
  `c`;
