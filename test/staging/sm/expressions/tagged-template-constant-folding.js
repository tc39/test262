/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Don't let constant-folding in the MemberExpression part of a tagged template cause an incorrect |this| be passed to the callee
esid: pending
---*/

var prop = "global";

var obj = { prop: "obj", f: function() { return this.prop; } };

assert.sameValue(obj.f``, "obj");
assert.sameValue((true ? obj.f : null)``, "global");
