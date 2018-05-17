// Copyright (C) 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.and
description: >
  Atomics.and returns the value that existed at the
  index prior to the operation.
info: |
  Atomics.and( typedArray, index, value )

  1. Return ? AtomicReadModifyWrite(typedArray, index, value, and).

  AtomicReadModifyWrite( typedArray, index, value, op )

  ...
  9. Return GetModifySetValueInBuffer(buffer, indexedPosition,
                                      elementType, v, op).


  GetModifySetValueInBuffer( arrayBuffer,
    byteIndex, type, value, op [ , isLittleEndian ] )

  ...
  16. Return RawBytesToNumber(type, rawBytesRead, isLittleEndian).

features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
var i32a = new Int32Array(buffer);
var value = 0b00000001000000001000000010000001;
var other = 0b00000001111111111000000011111111;

i32a[0] = value;

assert.sameValue(
  Atomics.and(i32a, 0, value),
  value,
  'Atomics.and(i32a, 0, value) equals the value of value (0b00000001000000001000000010000001)'
);
assert.sameValue(i32a[0], value & other, 'The value of i32a[0] is value & other');
