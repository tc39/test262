/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-strict-shell.js]
flags:
  - noStrict
description: |
  JSOP_CALLEE should push undefined, not null, for this
esid: pending
---*/

// Calling a named function expression (not function statement) uses the
// JSOP_CALLEE opcode.  This opcode pushes its own |this|, distinct from the
// normal call path; verify that that |this| value is properly |undefined|.

var calleeThisFun =
  function calleeThisFun(recurring)
  {
    if (recurring)
      return this;
    return calleeThisFun(true);
  };
assert.sameValue(calleeThisFun(false), this);

var calleeThisStrictFun =
  function calleeThisStrictFun(recurring)
  {
    "use strict";
    if (recurring)
      return this;
    return calleeThisStrictFun(true);
  };
assert.sameValue(calleeThisStrictFun(false), undefined);
