// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.5.2.2
description: >
  `Object.prototype.getOwnPropertyDescriptor` should reflect the value and
  writability of the @@toStringTag attribute.
includes: [propertyHelper.js]
 ---*/

var MapIteratorProto = Object.getPrototypeOf(new Map()[Symbol.iterator]());

assert.sameValue('Map Iterator', MapIteratorProto[Symbol.toStringTag]);

verifyNotEnumerable(MapIteratorProto, Symbol.toStringTag);
verifyNotWritable(MapIteratorProto, Symbol.toStringTag);
verifyConfigurable(MapIteratorProto, Symbol.toStringTag);
