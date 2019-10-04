/*---
esid: pending
features: [optional-chaining]
info: |
  Deep optional property access should always return `undefined` if the chain breaks,
  even if the breakage was caused by a `null` value.
---*/

let testValue = {
  a: {
    b: null
  }
};

assert(testValue ?.a ?.b === null, 'Chain should resolve to `null` value');
assert(testValue ?.a ?.b ?.c === undefined, 'Optional chain should return `undefined`');