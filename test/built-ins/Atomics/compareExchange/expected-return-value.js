// Copyright (C) 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.compareExchange
description: >
  Atomics.compareExchange returns the value that existed at the
  index prior to the operation.
info: |
  Atomics.compareExchange( typedArray, index, expectedValue, replacementValue )

  ...
  12. Let compareExchange denote a semantic function of two List of
      byte values arguments that returns the second argument if the
      first argument is element-wise equal to expectedBytes.
  13. Return GetModifySetValueInBuffer(buffer, indexedPosition,
      elementType, replacement, compareExchange).


  GetModifySetValueInBuffer( arrayBuffer,
    byteIndex, type, value, op [ , isLittleEndian ] )

  ...
  16. Return RawBytesToNumber(type, rawBytesRead, isLittleEndian).

features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
var i32a = new Int32Array(buffer);
var update = 0b00000001000000001000000010000001;

i32a[0] = update;

assert.sameValue(
  Atomics.compareExchange(i32a, 0, update, 0),
  update,
  'Atomics.compareExchange(i32a, 0, update, 0) equals the value of update (0b00000001000000001000000010000001)'
);
assert.sameValue(i32a[0], 0, 'The value of i32a[0] is 0');
