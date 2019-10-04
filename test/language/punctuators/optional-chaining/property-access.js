/*---
esid: pending
features: [optional-chaining]
info: |
  Optional-chaining for property keys.
description: Typical property access
---*/
let nullValue = null;
let undefinedValue = undefined;
let keyPresent = { key: 5 };

assert(nullValue ?.key === undefined, 'Expected to get undefined value');
assert(undefinedValue ?.key === undefined, 'Expected to get undefined value');
assert(keyPresent ?.key === 5, 'Expected to obtain property value');
