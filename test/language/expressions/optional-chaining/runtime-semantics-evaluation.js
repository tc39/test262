/*---
esid: pending
info: |
  accessing optional value on undefined or null returns undefined.
description: >
  If baseValue is undefined or null, then
    Return undefined.
features: [optional-chaining]
---*/

const nul = null;
const undf = undefined;
assert.sameValue(undefined, nul?.a);
assert.sameValue(undefined, undf?.b);
