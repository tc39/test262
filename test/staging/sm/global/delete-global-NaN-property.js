/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - onlyStrict
description: |
  |delete window.NaN| should throw a TypeError
esid: pending
---*/
"use strict"

var g = this, v = false;
try
{
  delete this.NaN;
  throw new Error("no exception thrown");
}
catch (e)
{
  assert.sameValue(e instanceof TypeError, true,
           "Expected a TypeError, got: " + e);
}
