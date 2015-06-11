// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.5
description: "WeakSet#@@toStringTag value and writability"
info: >
  23.4.3.5 WeakSet.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the string value
  "WeakSet".

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
includes: [propertyHelper.js]
 ---*/

var WeakSetProto = WeakSet.prototype;

assert.sameValue(
  WeakSetProto[Symbol.toStringTag],
  'WeakSet',
  'The value of WeakSet.prototype[Symbol.toStringTag] is "WeakSet"'
);

verifyNotEnumerable(WeakSetProto, Symbol.toStringTag);
verifyNotWritable(WeakSetProto, Symbol.toStringTag);
verifyConfigurable(WeakSetProto, Symbol.toStringTag);
