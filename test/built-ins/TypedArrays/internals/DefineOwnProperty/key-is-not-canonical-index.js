// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: |
  Sets an ordinary property value if numeric key is not a CanonicalNumericIndex
info: >
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
    ...
  4. Return OrdinaryDefineOwnProperty(O, P, Desc).
  ...
includes: [testTypedArray.js, propertyHelper.js]
features: [Reflect]
---*/

var keys = [
  "1.0",
  "+1",
  "1000000000000000000000",
  "0.0000001"
];

var dataDesc = {
  value: 42,
  writable: true,
  configurable: true
};

var fnset = function() {};
var fnget = function() {};

var acDesc = {
  get: fnget,
  set: fnset,
  enumerable: true,
  configurable: false
};

testWithTypedArrayConstructors(function(TA) {
  keys.forEach(function(key) {
    var sample = new TA();

    assert.sameValue(
      Reflect.defineProperty(sample, key, dataDesc),
      true,
      "return true after defining data property [" + key + "]"
    );

    assert.sameValue(sample[key], 42, "value is set to [" + key + "]");
    verifyWritable(sample, key);
    verifyConfigurable(sample, key);
    verifyNotEnumerable(sample, key);

    assert.sameValue(
      Reflect.defineProperty(sample, key, acDesc),
      true,
      "return true after defining accessors property [" + key + "]"
    );

    var desc = Object.getOwnPropertyDescriptor(sample, key);
    assert.sameValue(desc.get, fnget, "accessor's get [" + key + "]");
    assert.sameValue(desc.set, fnset, "accessor's set [" + key + "]");
    verifyEnumerable(sample, key);
    verifyNotConfigurable(sample, key);

    assert.sameValue(
      sample[0], undefined,
      "no value is set for a numeric index [0]"
    );

    assert.sameValue(sample.length, 0, "length is still 0");
  });
});
