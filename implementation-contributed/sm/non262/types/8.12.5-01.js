// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-types-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jason Orendorff
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 523846;
var summary =
  "Assignments to a property that has a getter but not a setter should not " +
  "throw a TypeError per ES5 (at least not until strict mode is supported)";
var actual = "Early failure";
var expect = "No errors";


printBugNumber(BUGNUMBER);
printStatus(summary);

var o = { get p() { return "a"; } };

function test1()
{
  o.p = "b";
  assert.sameValue(o.p, "a");
}

function test2()
{
  function T() {}
  T.prototype = o;
  y = new T();
  y.p = "b";
  assert.sameValue(y.p, "a");
}

function strictTest1()
{
  "use strict";

  o.p = "b"; // strict-mode violation here
  assert.sameValue(o.p, "a");
}

function strictTest2()
{
  "use strict";

  function T() {}
  T.prototype = o;
  y = new T;
  y.p = "b";  // strict-mode violation here
  assert.sameValue(y.p, "a");
}

var errors = [];
try
{
  try
  {
    test1();
  }
  catch (e)
  {
    errors.push(e);
  }

  try
  {
    test2();
  }
  catch (e)
  {
    errors.push(e);
  }

  try
  {
    strictTest1();
    errors.push("strictTest1 didn't fail");
  }
  catch (e)
  {
    if (!(e instanceof TypeError))
      errors.push("strictTest1 didn't fail with a TypeError: " + e);
  }

  try
  {
    strictTest2();
    errors.push("strictTest2 didn't fail");
  }
  catch (e)
  {
    if (!(e instanceof TypeError))
      errors.push("strictTest2 didn't fail with a TypeError: " + e);
  }
}
catch (e)
{
  errors.push("Unexpected error: " + e);
}
finally
{
  actual = errors.length > 0 ? errors.join(", ") : "No errors";
}

assert.sameValue(expect, actual, summary);
