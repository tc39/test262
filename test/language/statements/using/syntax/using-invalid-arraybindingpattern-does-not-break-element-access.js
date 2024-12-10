// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    'using' does not break existing element access
features: [explicit-resource-management]
---*/

var using = [], x = 0;

{
  using[x] = null;
}
