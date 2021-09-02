// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-shadowrealm.prototype.evaluate
description: >
  ShadowRealm.prototype.evaluate returns symbol values
features: [ShadowRealm]
---*/

assert.sameValue(
  typeof ShadowRealm.prototype.evaluate,
  'function',
  'This test must fail if ShadowRealm.prototype.evaluate is not a function'
);

const r = new ShadowRealm();
const s = r.evaluate('Symbol()');

assert.sameValue(typeof s, 'symbol');
assert.sameValue(s.constructor, Symbol, 'primitive does not expose other ShadowRealm constructor');
assert.sameValue(Object.getPrototypeOf(s), Symbol.prototype);
assert.sameValue(r.evaluate('Symbol.for("x")'), Symbol.for('x'));
assert.sameValue(Symbol.prototype.toString.call(s), 'Symbol()');
