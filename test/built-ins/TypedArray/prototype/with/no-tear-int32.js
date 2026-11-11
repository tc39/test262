// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.with
description: >
  No tearing when creating an Int32Array.
info: |
  %TypedArray%.prototype.with ( index, value )
  ...
  12. Repeat, while k < len,
    ...
    c. Else, let fromValue be ! Get(O, Pk).
    ...


  TypedArrayGetElement ( O, index )
  ...
  6. Return GetValueFromBuffer(O.[[ViewedArrayBuffer]], byteIndexInBuffer,
     elementType, true, unordered).


  GetValueFromBuffer ( arrayBuffer, byteIndex, type, isTypedArray, order [ , isLittleEndian ] )
  ...
  5. If IsSharedArrayBuffer(arrayBuffer) is true, then
    ...
    b. Let rawValue be GetRawBytesFromSharedBlock(block, byteIndex, type,
       isTypedArray, order).
  ...


  GetRawBytesFromSharedBlock ( block, byteIndex, type, isTypedArray, order )
  ...
  4. If isTypedArray is true and IsNoTearConfiguration(type, order) is true,
     let noTear be true; otherwise let noTear be false.
  ...
  7. Let readEvent be ReadSharedMemory { [[Order]]: order, [[NoTear]]: noTear,
     [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize }.
  ...


  IsNoTearConfiguration ( type, order )
  1. If IsUnclampedIntegerElementType(type) is true, return true.
  ...


  Valid Executions

  A candidate execution execution is a valid execution (or simply an execution)
  if all of the following are true.
  ...
  - execution has tear free reads.
  ...

includes: [atomicsHelper.js, tearing.js]
features: [TypedArray, Atomics, SharedArrayBuffer]
---*/

// Tearing was observed in implementations for |length = 3|.
const length = 3;

testNoTear(
  Int32Array,
  length,
  ta => ta.with(0, 0),
);
