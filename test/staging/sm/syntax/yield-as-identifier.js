/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
//-----------------------------------------------------------------------------
var BUGNUMBER = 1288459;
var summary = "|yield| is sometimes a valid identifier";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var g = $262.createRealm().global;

function t(code)
{
  var strictSemi = " 'use strict'; " + code;
  var strictASI = " 'use strict' \n " + code;

  g.Function(code);

  assert.throws(g.SyntaxError, () => g.Function(strictSemi));
  assert.throws(g.SyntaxError, () => g.Function(strictASI));
}

t("var yield = 3;");
t("let yield = 3;");
t("const yield = 3;");
t("for (var yield = 3; ; ) break;");
t("for (let yield = 3; ; ) break;");
t("for (const yield = 3; ; ) break;");

/******************************************************************************/

print("Tests complete");
