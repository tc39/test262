// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
  Test the first argument(target) of Object.Assign(target,...sources),
  being an Array.
---*/

var target = [7,5,3]
var result = Object.assign(target, [1, 2, 4]);

assert.sameValue(result[0], 1, "The value should be {0: 1}.");
assert.sameValue(result[1], 2, "The value should be {1: 2}.");
assert.sameValue(result[2], 4, "The value should be {2: 4}.");
