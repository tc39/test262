// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-declarative-environment-records-setmutablebinding-n-v-s
description: >
    await using: invalid assignment in next expression. Since an `await using` declaration introduces an immutable
    binding, any attempt to change it results in a ReferenceError.
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  await assert.throwsAsync(ReferenceError, async function() {
    for (await using i = 0; i < 1; i++) {}
  });
});
