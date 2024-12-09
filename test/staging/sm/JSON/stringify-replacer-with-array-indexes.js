/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-JSON-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'stringify-replacer-with-array-indexes.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 584909;
var summary =
  "Call the replacer function for array elements with stringified indexes";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var arr = [0, 1, 2, 3, 4];

var seenTopmost = false;
var index = 0;
function replacer()
{
  assert.sameValue(arguments.length, 2);

  var key = arguments[0], value = arguments[1];

  // Topmost array: ignore replacer call.
  if (key === "")
  {
    assert.sameValue(seenTopmost, false);
    seenTopmost = true;
    return value;
  }

  assert.sameValue(seenTopmost, true);

  assert.sameValue(typeof key, "string");
  assert.sameValue(key === index, false);
  assert.sameValue(key === index + "", true);

  assert.sameValue(value, index);

  index++;

  assert.sameValue(this, arr);

  return value;
}

assert.sameValue(JSON.stringify(arr, replacer), '[0,1,2,3,4]');

/******************************************************************************/

print("Tests complete");
