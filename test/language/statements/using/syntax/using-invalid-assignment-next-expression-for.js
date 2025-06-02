// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-declarative-environment-records-setmutablebinding-n-v-s
description: >
    using: invalid assignment in next expression.  Since a `using` declaration introduces an immutable
    binding, any attempt to change it results in a ReferenceError.
features: [explicit-resource-management]
---*/

assert.throws(ReferenceError, function() {
  for (using i = 0; i < 1; i++) {}
});
