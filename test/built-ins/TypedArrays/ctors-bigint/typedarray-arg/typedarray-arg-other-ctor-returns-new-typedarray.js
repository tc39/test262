// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-typedarray
description: >
  Return abrupt from getting typedArray argument's buffer.constructor.@@species
info: |
  22.2.4.3 TypedArray ( typedArray )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has a [[TypedArrayName]] internal slot.
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var sample1 = new Int8Array(7);
var sample2 = new Int16Array(7);
var sample3 = new BigInt64Array(7);
var sample4 = new BigUint64Array(7);

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = TA === Int8Array ? sample2 :
               TA === BigInt64Array ? sample4 :
               TA === BigUint64Array ? sample3 : sample1;
  var typedArray = new TA(sample);

  assert.sameValue(typedArray.length, 7);
  assert.notSameValue(typedArray, sample);
  assert.sameValue(typedArray.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
});
