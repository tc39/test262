// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Atomics.sub.name is "sub".
includes: [propertyHelper.js]
---*/

assert.sameValue(Atomics.sub.name, "sub");

verifyNotEnumerable(Atomics.sub, "name");
verifyNotWritable(Atomics.sub, "name");
verifyConfigurable(Atomics.sub, "name");
