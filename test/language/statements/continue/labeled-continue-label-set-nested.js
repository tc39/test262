// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-loopcontinues
description: >
  `continue` from an inner loop with either label of the label set of an outer
  iteration statement continues the outer statement
info: |
  LoopContinues ( completion, labelSet )

  1. If completion is a normal completion, return true.
  2. If completion is not a continue completion, return false.
  3. If completion.[[Target]] is empty, return true.
  4. If labelSet contains completion.[[Target]], return true.
  5. Return false.
---*/

var count = 0, i;
a: b: for (i = 0; i < 3; i++) {
  c: for (;;) {
    count++;
    if (i == 0) continue a;
    if (i == 1) continue b;
    break a;
  }
}
assert.sameValue(count, 3, "count");
assert.sameValue(i, 2, "i");

count = 0;
a: b: for (i = 0; i < 3; i++) {
  c: d: for (var j = 0; j < 3; j++) {
    count++;
    if (j == 1) continue a;
    continue c;
  }
}
assert.sameValue(count, 6, "continue to the first label of each of two nested label sets");
