// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    using bound functions
includes: [compareArray.js]
---*/

var a = [1,[1]];
var flattenIt = [].flatten.bind(a);

assert(compareArray(flattenIt(), [1, 1]), 'bound functions');
