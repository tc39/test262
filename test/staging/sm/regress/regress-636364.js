/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var gnew = $262.createRealm().global;

gnew.eval("function f() { return this; }");
f = gnew.f;
assert.sameValue(f(), gnew);

gnew.eval("function g() { 'use strict'; return this; }");
g = gnew.g;
assert.sameValue(g(), undefined);

