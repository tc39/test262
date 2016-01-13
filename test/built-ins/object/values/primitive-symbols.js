// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values accepts Symbol primitives.
es7id: pending
author: Jordan Harband
features: [Symbol]
---*/

var result = Object.values(Symbol());

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 0, 'result has 0 items');
