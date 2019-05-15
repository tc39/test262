// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-reflect.set
description: >
  The operation should respect the prototype lookups. It should not set any value
  using an empty TypedArray as the parent of the object in the LHS expression.
info: |
  Reflect.set ( target, propertyKey, V [ , receiver ] )

  1. If Type(target) is not Object, throw a TypeError exception.
  2. Let key be ? ToPropertyKey(propertyKey).
  3. If receiver is not present, then
    a. Set receiver to target.
  4. Return ? target.[[Set]](key, V, receiver).

  ...

  [[Set]] ( P, V, Receiver )

  1. Return ? OrdinarySet(O, P, V, Receiver).

  ...

  OrdinarySet ( O, P, V, Receiver )

  ...
  2. Let ownDesc be ? O.[[GetOwnProperty]](P).
  3. Return OrdinarySetWithOwnDescriptor(O, P, V, Receiver, ownDesc).

  ...

  [[GetOwnProperty]] ( P )

  1. Return ! OrdinaryGetOwnProperty(O, P).

  ...

  OrdinaryGetOwnProperty ( O, P )

  ...
  2. If O does not have an own property with key P, return undefined.

  ...

  OrdinarySetWithOwnDescriptor ( O, P, V, Receiver, ownDesc )

  ...
  2. If ownDesc is undefined, then
    a. Let parent be ? O.[[GetPrototypeOf]]().
    b. If parent is not null, then
      i. Return ? parent.[[Set]](P, V, Receiver).

  ...

  9.4.5.5 [[Set]] ( P, V, Receiver ) (Integer-indexed exotic objects)

  ...
  2. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      i. Return ? IntegerIndexedElementSet(O, numericIndex, V).

  ...

  IntegerIndexedElementSet ( O, index, value )

  ...
  5. If IsInteger(index) is false, return false.
  6. If index = -0, return false.
  7. Let length be O.[[ArrayLength]].
  8. If index < 0 or index ≥ length, return false.
features: [TypedArray, Int8Array]
---*/

Object.setPrototypeOf(Array.prototype, new Int8Array(0));

var a = [];

var result = Reflect.set(a, 0, 4);

assert.sameValue(result, false, 'captures the result from IntegerIndexedElementSet');
assert.sameValue(a.length, 0, 'the array is unmodified');
assert.sameValue(a[0], undefined);
