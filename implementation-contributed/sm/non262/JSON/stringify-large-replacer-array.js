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

var gTestfile = 'stringify-large-replacer-array.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 816033;
var summary = "JSON.stringify with a large replacer array";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var replacer = [];
for (var i = 0; i < 4096; i++)
  replacer.push(i);

assert.sameValue(JSON.stringify({ "foopy": "FAIL", "4093": 17 }, replacer), '{"4093":17}');

/******************************************************************************/

print("Tests complete");
