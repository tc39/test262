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
var value = 0b00000001000000001000000010000001;

i32a[0] = value;

assert.sameValue(Atomics.compareExchange(i32a, 0, value, 0), value);
assert.sameValue(i32a[0], 0);
