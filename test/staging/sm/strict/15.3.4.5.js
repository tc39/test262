/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262-strict-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function strict() { 'use strict'; return this; }
function lenient() { return this; }
var obj = {};

assert.sameValue(strict.bind(true)(), true);
assert.sameValue(strict.bind(42)(), 42);
assert.sameValue(strict.bind("")(), "");
assert.sameValue(strict.bind(null)(), null);
assert.sameValue(strict.bind(undefined)(), undefined);
assert.sameValue(strict.bind(obj)(), obj);

assert.sameValue(lenient.bind(true)() instanceof Boolean, true);
assert.sameValue(lenient.bind(42)() instanceof Number, true);
assert.sameValue(lenient.bind("")() instanceof String, true);
assert.sameValue(lenient.bind(null)(), this);
assert.sameValue(lenient.bind(undefined)(), this);
assert.sameValue(lenient.bind(obj)(), obj);

