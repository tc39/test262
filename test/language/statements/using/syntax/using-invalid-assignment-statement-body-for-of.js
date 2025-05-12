// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    using: invalid assignment in Statement body
features: [explicit-resource-management]
---*/

assert.throws(TypeError, function() {
  for (using x of [1, 2, 3]) { x++ }
});
