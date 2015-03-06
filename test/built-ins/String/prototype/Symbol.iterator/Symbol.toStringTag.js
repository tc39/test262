// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.5.2.1
description: >
    The initial value of the @@toStringTag property is the string value "String
    Iterator". This property has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var StringIteratorProto = Object.getPrototypeOf(''[Symbol.iterator]());

assert.sameValue(StringIteratorProto[Symbol.toStringTag], 'String Iterator');

verifyNotEnumerable(StringIteratorProto, Symbol.toStringTag);
verifyNotWritable(StringIteratorProto, Symbol.toStringTag);
verifyConfigurable(StringIteratorProto, Symbol.toStringTag);
