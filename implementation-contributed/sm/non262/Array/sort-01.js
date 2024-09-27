// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Array-shell.js
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

//-----------------------------------------------------------------------------
var BUGNUMBER = 604971;
var summary = 'array.sort compare-function gets incorrect this';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

[1, 2, 3].sort(function() { "use strict"; assert.sameValue(this, undefined); });

/******************************************************************************/

print("All tests passed!");
