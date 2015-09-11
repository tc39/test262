// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.10_S1.a.i
description: >
    const: invalid assignment in Statement body silently fails in non-strict mode
flags: [noStrict]
---*/

for (const x in [1, 2, 3]) {
  let savedValue = x;
  x++;
  assert.sameValue(x, savedValue);
}
