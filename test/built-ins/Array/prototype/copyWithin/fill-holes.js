// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Loop from each property, even empty holes.
includes: [compareArray.js]
---*/

assert(
  compareArray(
    [0, 1, , , 1].copyWithin(0, 1, 4),
    [1, , , , 1]
  )
);
