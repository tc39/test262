// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function TestGC2(m) {
  var head = new Object;
  for (key = head, i = 0; i < 99999; i++, key = m.get(key)) {
    m.set(key, new Object);
  }
  gc();
  for (key = head; key != undefined; key = m.get(key)) {}
}
TestGC2(new WeakMap);

assert.sameValue(true, true, "deep weakmaps");
