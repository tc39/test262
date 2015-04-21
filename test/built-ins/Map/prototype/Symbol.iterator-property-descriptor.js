// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should exist on the Map prototype, and it should be writable
      and configurable, but not enumerable.
  includes: [propertyHelper.js]
  es6id: 23.1.3.12
 ---*/

verifyNotEnumerable(Map.prototype, Symbol.iterator);
verifyWritable(Map.prototype, Symbol.iterator);
verifyConfigurable(Map.prototype, Symbol.iterator);
