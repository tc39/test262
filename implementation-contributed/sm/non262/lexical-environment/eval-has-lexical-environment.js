// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-lexical-environment-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = "eval-has-lexical-environment.js"
//-----------------------------------------------------------------------------
var BUGNUMBER = 1193583;
var summary =
  "Eval always has a lexical environment";

/**************
 * BEGIN TEST *
 **************/

eval(`
let foo = 42;
const kay = foo;
var bar = 84;
function f() {
  return foo + kay;
}
     `);

(1, eval)(`
let foo2 = 42;
const kay2 = foo2;
`);

// Lexical declarations should not have escaped eval.
assert.sameValue(typeof foo, "undefined");
assert.sameValue(typeof kay, "undefined");
assert.sameValue(typeof foo2, "undefined");
assert.sameValue(typeof kay2, "undefined");

// Eval'd functions can close over lexical bindings.
assert.sameValue(f(), 84);

// Var can escape direct eval.
assert.sameValue(bar, 84);

print("Tests complete");
