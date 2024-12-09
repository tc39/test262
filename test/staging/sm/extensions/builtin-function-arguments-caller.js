/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-extensions-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'builtin-function-arguments-caller.js';
var BUGNUMBER = 929642;
var summary =
  "Built-in functions defined in ECMAScript pick up arguments/caller " +
  "properties from Function.prototype";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function expectNoProperty(obj, prop)
{
  var desc = Object.getOwnPropertyDescriptor(obj, prop);
  assert.sameValue(desc, undefined,
           "should be no '" + prop + "' property on " + obj);
}

// Test a builtin that's native.
expectNoProperty(Object, "arguments");
expectNoProperty(Object, "caller");

// Also test a builtin that's self-hosted.
expectNoProperty(Array.prototype.indexOf, "arguments");
expectNoProperty(Array.prototype.indexOf, "caller");

// Test the Function construct for good measure, because it's so intricately
// invovled in bootstrapping.
expectNoProperty(Function, "arguments");
expectNoProperty(Function, "caller");

var argsDesc = Object.getOwnPropertyDescriptor(Function.prototype, "arguments");
var callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");

var argsGet = argsDesc.get, argsSet = argsDesc.set;

expectNoProperty(argsGet, "arguments");
expectNoProperty(argsGet, "caller");
expectNoProperty(argsSet, "arguments");
expectNoProperty(argsSet, "caller");

var callerGet = callerDesc.get, callerSet = callerDesc.set;

expectNoProperty(callerGet, "arguments");
expectNoProperty(callerGet, "caller");
expectNoProperty(callerSet, "arguments");
expectNoProperty(callerSet, "caller");

/******************************************************************************/

print("Tests complete");
