// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array-exotic-objects-defineownproperty-p-desc
description: >
  Assigning an array index at or past "length" on a non-extensible array fails
  and does not change "length"
info: |
  OrdinarySetWithOwnDescriptor ( obj, propertyKey, value, receiver, ownDesc )

  [...]
  2. If IsDataDescriptor(ownDesc) is true, then
     [...]
     c. Let existingDesc be ? receiver.[[GetOwnProperty]](propertyKey).
     d. If existingDesc is undefined, then
        i. Assert: receiver does not currently have a property propertyKey.
        ii. Return ? CreateDataProperty(receiver, propertyKey, value).

  [[DefineOwnProperty]] ( propertyKey, propertyDesc )

  [...]
  2. If propertyKey is an array index, then
     [...]
     i. Let succeeded be ! OrdinaryDefineOwnProperty(array, propertyKey, propertyDesc).
     j. If succeeded is false, return false.
     [...]
features: [Reflect]
---*/

function makeArrays() {
  return [
    ["empty", []],
    ["dense", [1, 2]],
    ["holey", [1, , 3]],
    ["new Array(2)", new Array(2)]
  ];
}

makeArrays().forEach(function(entry, k) {
  var length = entry[1].length;
  [length, length + 4, 4294967294].forEach(function(index) {
    var label = entry[0] + " array, index " + index;
    var array;

    array = Object.preventExtensions(makeArrays()[k][1]);
    assert.sameValue(Reflect.set(array, index, 0), false, label + ": Reflect.set return value");
    assert.sameValue(array.length, length, label + ": length after Reflect.set");
    assert.sameValue(Object.prototype.hasOwnProperty.call(array, index), false, label + ": no element after Reflect.set");

    array = Object.preventExtensions(makeArrays()[k][1]);
    assert.throws(TypeError, function() {
      "use strict";
      array[index] = 0;
    }, label + ": strict assignment");
    assert.sameValue(array.length, length, label + ": length after strict assignment");
    assert.sameValue(Object.prototype.hasOwnProperty.call(array, index), false, label + ": no element after strict assignment");
  });

  var pushed = Object.preventExtensions(makeArrays()[k][1]);
  assert.throws(TypeError, function() {
    pushed.push(0);
  }, entry[0] + " array: push");
  assert.sameValue(pushed.length, length, entry[0] + " array: length after push");
});
