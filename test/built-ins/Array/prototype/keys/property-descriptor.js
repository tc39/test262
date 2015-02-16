// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should exist on the Array prototype, and it should be writable
      and configurable, but not enumerable.
  includes: [propertyHelper.js]
  es6id: 22.1.3.13
 ---*/

verifyNotEnumerable(Array.prototype, 'keys');
verifyWritable(Array.prototype, 'keys');
verifyConfigurable(Array.prototype, 'keys');
