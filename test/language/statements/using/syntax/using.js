// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    module and block scope using
flags: [module]
features: [explicit-resource-management]
---*/

using z = null;

// Block local
{
  using z = undefined;
}

assert.sameValue(z, null);

if (true) {
  const obj = { [Symbol.dispose]() { } };
  using z = obj;
  assert.sameValue(z, obj);
}
