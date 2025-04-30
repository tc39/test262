// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  String.prototype.normalize - passing wrong parameter
esid: pending
---*/

function test() {
  assert.throws(RangeError, () => "abc".normalize("NFE"),
                         "String.prototype.normalize should raise RangeError on invalid form");

  assert.sameValue("".normalize(), "");
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}
