// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupByToMap
description: Array.prototype.groupByToMap normalize 0 for Map key
info: |
  22.1.3.15 Array.prototype.groupByToMap ( callbackfn [ , thisArg ] )

  ...

  6.d. If key is -0𝔽, set key to +0𝔽.

  ...
---*/


const arr = [-0, +0];

const map = arr.groupByToMap(i=>i);


assert.sameValue(map.size, 1);
assert.sameValue(map.has(0), true);
assert.sameValue(map.get(0).length, 2);
