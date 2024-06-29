// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- detachArrayBuffer.js
- non262-extensions-shell.js
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

var gTestfile = "DataView-construct-arguments-detaching.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 991981;
var summary =
  "new DataView(...) shouldn't misbehave horribly if index-argument " +
  "conversion detaches the ArrayBuffer to be viewed";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function testByteOffset()
{
  var ab = new ArrayBuffer(0x1000);

  var start =
    {
      valueOf: function()
      {
        $DETACHBUFFER(ab);
        gc();
        return 0x800;
      }
    };

  var ok = false;
  try
  {
    new DataView(ab, start);
  }
  catch (e)
  {
    ok = true;
  }
  assert.sameValue(ok, true, "byteOffset weirdness should have thrown");
  assert.sameValue(ab.byteLength, 0, "detaching should work for byteOffset weirdness");
}
testByteOffset();

function testByteLength()
{
  var ab = new ArrayBuffer(0x1000);

  var len =
    {
      valueOf: function()
      {
        $DETACHBUFFER(ab);
        gc();
        return 0x800;
      }
    };

  var ok = false;
  try
  {
    new DataView(ab, 0x800, len);
  }
  catch (e)
  {
    ok = true;
  }
  assert.sameValue(ok, true, "byteLength weirdness should have thrown");
  assert.sameValue(ab.byteLength, 0, "detaching should work for byteLength weirdness");
}
testByteLength();

/******************************************************************************/

print("Tests complete");
