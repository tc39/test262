// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.6
description: "WeakMap#@@toStringTag value and writability"
info: >
  WeakMap.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the String value "WeakMap".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
 ---*/

var WeakMapProto = WeakMap.prototype;

assert.sameValue(
  WeakMapProto[Symbol.toStringTag],
  'WeakMap',
  'The value of WeakMap.prototype[Symbol.toStringTag] is "WeakMap"'
);

verifyNotEnumerable(WeakMapProto, Symbol.toStringTag);
verifyNotWritable(WeakMapProto, Symbol.toStringTag);
verifyConfigurable(WeakMapProto, Symbol.toStringTag);
