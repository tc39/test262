// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Atomics.exchange.name is "exchange".
includes: [propertyHelper.js]
---*/

assert.sameValue(Atomics.exchange.name, "exchange");

verifyNotEnumerable(Atomics.exchange, "name");
verifyNotWritable(Atomics.exchange, "name");
verifyConfigurable(Atomics.exchange, "name");
