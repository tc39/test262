// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: system
description: >
  System is configurable, writable, and not enumerable.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(this, 'System');
verifyWritable(this, 'System');
verifyConfigurable(this, 'System');
