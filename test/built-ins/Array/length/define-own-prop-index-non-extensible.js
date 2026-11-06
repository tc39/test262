// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array-exotic-objects-defineownproperty-p-desc
description: >
  Defining an array index at or past "length" on a non-extensible array fails
  and does not change "length"
info: |
  [[DefineOwnProperty]] ( propertyKey, propertyDesc )

  [...]
  2. If propertyKey is an array index, then
     [...]
     h. If index ≥ length and lengthDesc.[[Writable]] is false, return false.
     i. Let succeeded be ! OrdinaryDefineOwnProperty(array, propertyKey, propertyDesc).
     j. If succeeded is false, return false.
     k. If index ≥ length, then
        i. Set lengthDesc.[[Value]] to index + 1𝔽.
        [...]

  ValidateAndApplyPropertyDescriptor ( O, P, extensible, Desc, current )

  [...]
  2. If current is undefined, then
     a. If extensible is false, return false.
features: [Reflect]
---*/

function makeArrays() {
  return [
    ["empty", []],
    ["dense", [1, 2]],
    ["holey", [1, , 3]],
    ["new Array(2)", new Array(2)],
    ["accessor element", Object.defineProperty([1, 2], "0", { get: function() { return 1; } })]
  ];
}

var descriptors = [
  ["data", { value: 0 }],
  ["accessor", { get: function() { return 0; } }],
  ["generic", {}]
];

function check(defineFn, name) {
  makeArrays().forEach(function(entry) {
    var length = entry[1].length;
    [length, length + 4, 4294967294].forEach(function(index) {
      descriptors.forEach(function(d) {
        var array = makeArrays().filter(function(e) { return e[0] === entry[0]; })[0][1];
        Object.preventExtensions(array);
        var label = name + ", " + entry[0] + " array, index " + index + ", " + d[0] + " descriptor";

        defineFn(array, index, d[1], label);

        assert.sameValue(array.length, length, label + ": length");
        assert.sameValue(Object.prototype.hasOwnProperty.call(array, index), false, label + ": no element");
      });
    });
  });
}

check(function(array, index, desc, label) {
  assert.sameValue(Reflect.defineProperty(array, index, desc), false, label + ": return value");
}, "Reflect.defineProperty");

check(function(array, index, desc, label) {
  assert.throws(TypeError, function() {
    Object.defineProperty(array, index, desc);
  }, label);
}, "Object.defineProperty");
