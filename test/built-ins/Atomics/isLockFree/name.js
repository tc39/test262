// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Atomics.isLockFree.name is "isLockFree".
includes: [propertyHelper.js]
---*/

assert.sameValue(Atomics.isLockFree.name, "isLockFree");

verifyNotEnumerable(Atomics.isLockFree, "name");
verifyNotWritable(Atomics.isLockFree, "name");
verifyConfigurable(Atomics.isLockFree, "name");
