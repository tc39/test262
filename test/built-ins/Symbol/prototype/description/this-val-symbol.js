// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Test that calling the getter on a Symbol or a Symbol wrapper object works.
info: |
    1. Let s be the this value.
    2. Let sym be ? thisSymbolValue(s).
    3. Return sym.[[Description]].
features: [Symbol.prototype.description]
---*/

const getter = Object.getOwnPropertyDescriptor(
  Symbol.prototype, 'description'
).get;

const symbol = Symbol('test');
assert.sameValue(getter.call(symbol), 'test');
assert.sameValue(getter.call(Object(symbol)), 'test');

const empty = Symbol();
assert.sameValue(getter.call(empty), undefined);
assert.sameValue(getter.call(Object(empty)), undefined);

const undef = Symbol(undefined);
assert.sameValue(getter.call(undef), undefined);
assert.sameValue(getter.call(Object(undef)), undefined);

const emptyStr = Symbol('');
assert.sameValue(getter.call(emptyStr), '');
assert.sameValue(getter.call(Object(emptyStr)), '');
