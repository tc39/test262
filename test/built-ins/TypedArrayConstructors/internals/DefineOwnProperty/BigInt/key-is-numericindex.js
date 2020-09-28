// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: >
  Returns true after setting a valid numeric index key
info: |
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      v. If Desc has a [[Writable]] field and if Desc.[[Writable]] is false,
        return false.
  ...
includes: [testBigIntTypedArray.js, propertyHelper.js]
features: [BigInt, Reflect, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([42n, 42n]);

  assert.sameValue(Reflect.defineProperty(sample, '0', {
    value: 8n,
    configurable: true,
    enumerable: true,
    writable: true
  }), true, 'Reflect.defineProperty("new TA([42n, 42n])", "0", {value: 8n, configurable: true, enumerable: true, writable: true}) must return true');

  assert.sameValue(sample[0], 8n, 'The value of sample[0] is 8n');
  var desc = Object.getOwnPropertyDescriptor(sample, '0');
  assert.sameValue(desc.value, 8n, 'The value of desc.value is 8n');
  assert.sameValue(desc.writable, true, 'The value of desc.writable is true');
  verifyEnumerable(sample, '0');
  verifyNotConfigurable(sample, '0');
});
