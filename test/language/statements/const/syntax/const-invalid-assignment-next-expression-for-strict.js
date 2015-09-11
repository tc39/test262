// Copyright (C) 2015 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.3.7_S5.a.i
description: >
    const: invalid assignment in next expression throws TypeError in strict mode
flags: [onlyStrict]
---*/

assert.throws(TypeError, function() {
  let hasRun = false;
  for (const i = 0; i < 1; i++) {
    if (hasRun) {
      break;
    }
    hasRun = true;
  }
});
