// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Array.prototype.shift on a dense array with holes should update for-in enumeration properties.
esid: pending
---*/

var x = ["a", , "b", , "c", "d" , "e", "f", "g"];
for (var p in x) {
  assert.sameValue(p in x, true);
  x.shift();
}

