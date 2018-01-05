// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    arrays with empty object elements
---*/

var a = {}, b = {};

assert.compareArrays([a].flatten(), [a]);
assert.compareArrays([a, [b]].flatten(), [a, b]);
assert.compareArrays([[a], b].flatten(), [a, b]);
assert.compareArrays([[a], [b]].flatten(), [a, b]);
