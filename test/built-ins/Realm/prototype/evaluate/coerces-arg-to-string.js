// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.evaluate
description: >
  Realm.prototype.evaluate coerces the argument to a string.
includes: [isConstructor.js]
features: [callable-boundary-realms]
---*/

assert.sameValue(
  typeof Realm.prototype.evaluate,
  'function',
  'This test must fail if Realm.prototype.evaluate is not a function'
);

const r = new Realm();

assert.sameValue(r.evaluate(['1+1']), 2);
assert.sameValue(r.evaluate({ [Symbol.toPrimitive]() { return '1+1'; }}), 2);
assert.sameValue(r.evaluate(1), 1);
assert.sameValue(r.evaluate(null), null);
assert.sameValue(r.evaluate(undefined), undefined);
assert.sameValue(r.evaluate(true), true);
assert.sameValue(r.evaluate(false), false);