// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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

var gTestfile = 'destructuring-__proto__-target--assignment.js';
var BUGNUMBER = 963641;
var summary =
  "{ __proto__: target } should work as a destructuring assignment pattern";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function objectWithProtoProperty(v)
{
  var obj = {};
  return Object.defineProperty(obj, "__proto__",
                               {
                                 enumerable: true,
                                 configurable: true,
                                 writable: true,
                                 value: v
                               });
}

var { __proto__: target } = objectWithProtoProperty(null);
assert.sameValue(target, null);

({ __proto__: target } = objectWithProtoProperty("aacchhorrt"));
assert.sameValue(target, "aacchhorrt");

function nested()
{
  var { __proto__: target } = objectWithProtoProperty(3.141592654);
  assert.sameValue(target, 3.141592654);

  ({ __proto__: target } = objectWithProtoProperty(-0));
  assert.sameValue(target, -0);
}
nested();

/******************************************************************************/

print("Tests complete");
