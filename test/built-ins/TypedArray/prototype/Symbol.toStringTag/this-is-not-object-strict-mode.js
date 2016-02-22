// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: Return undefined when `this` is null or undefined
info: >
  22.2.3.32 get %TypedArray%.prototype [ @@toStringTag ]

  1. Let O be the this value.
  2. If Type(O) is not Object, return undefined.
  ...
includes: [testTypedArray.js]
flags: [onlyStrict]
features: [Symbol.toStringTag]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
).get;

assert.sameValue(getter.call(null), undefined);
assert.sameValue(getter.call(undefined), undefined);

