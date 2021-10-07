// Copyright (C) 2021 Chengzhong Wu. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-shadowrealm.prototype.evaluate
description: >
  ShadowRealm.prototype.evaluate throws a TypeError from ShadowRealm's creation realm.
features: [ShadowRealm, cross-realm, Reflect]
---*/

assert.sameValue(
  typeof ShadowRealm.prototype.evaluate,
  'function',
  'This test must fail if ShadowRealm.prototype.evaluate is not a function'
);

var other = $262.createRealm().global;
var OtherTypeError = other.eval('TypeError');
var OtherShadowRealm = other.eval('ShadowRealm');

var realm = Reflect.construct(OtherShadowRealm, []);
assert.throws(OtherTypeError, () => realm.evaluate('globalThis'), 'throws a TypeError if return value can not be wrapped');
assert.throws(OtherTypeError, () => realm.evaluate(1), 'throws a TypeError if sourceText is not a string');

const bogus = {};
assert.throws(OtherTypeError, function() {
  realm.evaluate.call(bogus, '');
}, 'throws a TypeError if this is not a ShadowRealm object');
