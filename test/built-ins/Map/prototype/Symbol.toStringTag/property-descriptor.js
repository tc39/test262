// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.13
description: >
  Map.prototype[ @@toStringTag ] value and descriptor.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
 ---*/

var MapProto = Object.getPrototypeOf(new Map());

assert.sameValue(
  MapProto[Symbol.toStringTag],
  'Map',
  'The value of MapProto[Symbol.toStringTag] is Map'
);

verifyNotEnumerable(MapProto, Symbol.toStringTag);
verifyNotWritable(MapProto, Symbol.toStringTag);
verifyConfigurable(MapProto, Symbol.toStringTag);
