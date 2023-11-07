// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.12_S2
description: >
    ForIn/Of: Bound names of ForDeclaration are in TDZ (for-of)
features: [explicit-resource-management]
---*/

assert.throws(ReferenceError, function() {
  let x = { [Symbol.dispose]() { } };
  for (using x of [x]) {}
});
