/*---
esid: pending
info: |
  ternary operation with decimal does not evaluate as optional chain 
description: >
  11.7 Punctuators
    OptionalChainingPunctuator::
      ?.[lookahead ∉ DecimalDigit]
features: [optional-chaining]
---*/

const value = true ?.30 : false
assert.sameValue(.30, value)
