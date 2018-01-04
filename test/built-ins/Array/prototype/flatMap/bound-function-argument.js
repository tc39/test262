// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    Behavior when array is depth more than 1
includes: [compareArray.js]
---*/

var a = [void 0,[void 0]];
var flattenMap = [].flatMap.bind(a, function() {});

assert.compareArray(a.flatMap(flattenMap), [undefined, undefined, undefined, undefined]);
