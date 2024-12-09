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
var x;
try {
    eval("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assert.sameValue(x instanceof SyntaxError, true);
assert.sameValue("if" in this, false);

x = undefined;
try {
    Function("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assert.sameValue(x instanceof SyntaxError, true);

