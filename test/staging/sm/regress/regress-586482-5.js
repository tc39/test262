/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function check() {
    obj2.__proto__ = null;
    return arguments.callee.caller;
}

var obj = { f: function() { check(); }};

var obj2 = { __proto__: obj };

obj2.f();

