// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should exist on the Array prototype, and it should be writable
      and configurable, but not enumerable.
  includes: [propertyHelper.js]
  es6id: 23.2.3.11
 ---*/

verifyNotEnumerable(Set.prototype, Symbol.iterator);
verifyWritable(Set.prototype, Symbol.iterator);
verifyConfigurable(Set.prototype, Symbol.iterator);
