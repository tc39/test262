// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.12
description: >
  `Object.prototype.getOwnPropertyDescriptor` should reflect the value and
  writability of the @@toStringTag attribute.
includes: [propertyHelper.js]
features:
  - Symbol.toStringTag
  - Symbol.iterator
 ---*/

var SetIteratorProto = Object.getPrototypeOf(new Set()[Symbol.iterator]());

assert.sameValue(
  'Set Iterator',
  SetIteratorProto[Symbol.toStringTag],
  '`Set Iterator` is `SetIteratorProto[Symbol.toStringTag]`'
);

verifyNotEnumerable(SetIteratorProto, Symbol.toStringTag);
verifyNotWritable(SetIteratorProto, Symbol.toStringTag);
verifyConfigurable(SetIteratorProto, Symbol.toStringTag);
