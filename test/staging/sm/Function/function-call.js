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
//-----------------------------------------------------------------------------
var BUGNUMBER = 575535;
var summary = 'Function.prototype.call';
print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function expectTypeError(fun, msg)
{
  try
  {
    fun();
    assert.sameValue(true, false, "should have thrown a TypeError");
  }
  catch (e)
  {
    assert.sameValue(e instanceof TypeError, true, msg + "; instead threw " + e);
  }
}

function fun() { }

var global = this;

assert.sameValue(Function.prototype.call.length, 1);


/* Step 1. */
var nonfuns = [null, 1, -1, 2.5, "[[Call]]", undefined, true, false, {}];
for (var i = 0, sz = nonfuns.length; i < sz; i++)
{
  var f = function()
  {
    Function.prototype.call.apply(nonfuns[i]);
  };
  var msg =
    "expected TypeError calling Function.prototype.call with uncallable this";
  expectTypeError(f, msg);
}


/* Steps 2-4. */
function none()
{
  assert.sameValue(this, global, "bad this");
  assert.sameValue(arguments.length, 0, "wrong arguments");
}

none.call();
none.call(undefined);
none.call(null);

var seenThis;
function strictNone()
{
  "use strict";
  assert.sameValue(this, seenThis, "bad this");
  assert.sameValue(arguments.length, 0, "wrong arguments");
}

seenThis = undefined;
strictNone.call();
strictNone.call(undefined);

seenThis = null;
strictNone.call(null);

seenThis = 17;
strictNone.call(17);

var seenThisBox, args;
function some()
{
  assert.sameValue(this instanceof seenThisBox, true,
           "this not instanceof " + seenThisBox);
  assert.sameValue(this.valueOf(), seenThis,
           "wrong this valueOf()");
  assert.sameValue(arguments.length, args.length, "wrong arguments count");
  for (var i = 0; i < args.length; i++)
    assert.sameValue(arguments[i], args[i], "wrong argument " + i);
}

seenThis = false;
seenThisBox = Boolean;
args = [8, 6, 7, NaN, undefined, 0.3];
some.call(false, 8, 6, 7, NaN, undefined, 0.3);

var obj = {};

seenThis = "foo";
seenThisBox = String;
args = [obj];
some.call("foo", obj);

seenThis = obj;
seenThisBox = Object;
some.call(obj, obj);

function strictSome()
{
  "use strict";
  assert.sameValue(this, seenThis, "wrong this");
  assert.sameValue(arguments.length, args.length, "wrong arguments count");
  for (var i = 0; i < args.length; i++)
    assert.sameValue(arguments[i], args[i], "wrong argument " + i);
}

seenThis = NaN;
args = [8, 6, 7, NaN, undefined, 0.3];
strictSome.call(NaN, 8, 6, 7, NaN, undefined, 0.3);

seenThis = "foo";
args = [obj];
strictSome.call("foo", obj);

seenThis = obj;
strictSome.call(obj, obj);


/******************************************************************************/

print("All tests passed!");
