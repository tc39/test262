// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'stringify-toJSON-arguments.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 584909;
var summary = "Arguments when an object's toJSON method is called";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj =
  {
    p: {
         toJSON: function(key)
         {
           assert.sameValue(arguments.length, 1);
           assert.sameValue(key, "p");
           return 17;
         }
       }
  };

assert.sameValue(JSON.stringify(obj), '{"p":17}');

/******************************************************************************/

print("Tests complete");
