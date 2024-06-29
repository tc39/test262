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

var gTestfile = 'destructuring-__proto__-shorthand-assignment-before-var.js';
var BUGNUMBER = 963641;
var summary = "{ __proto__ } should work as a destructuring assignment pattern";

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

({ __proto__ } = objectWithProtoProperty(17));
assert.sameValue(__proto__, 17);

var { __proto__ } = objectWithProtoProperty(42);
assert.sameValue(__proto__, 42);

function nested()
{
  ({ __proto__ } = objectWithProtoProperty(undefined));
  assert.sameValue(__proto__, undefined);

  var { __proto__ } = objectWithProtoProperty("fnord");
  assert.sameValue(__proto__, "fnord");
}
nested();

/******************************************************************************/

print("Tests complete");
