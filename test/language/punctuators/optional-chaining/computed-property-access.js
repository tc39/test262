/*---
esid: pending
features: [optional-chaining]
info: |
  Access computed properties using optional chaining.
---*/
let x = 'my-key';
let keyAbsent = undefined;
let keyPresent = { 'my-key': 5 };
assert(keyAbsent ?.[x] === undefined, 'Expected to get undefined value');
assert(keyPresent ?.[x] === 5, 'Expected to obtain property value');
