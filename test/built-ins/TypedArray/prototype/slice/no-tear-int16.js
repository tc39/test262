// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.slice
description: >
  No tearing when slicing an Int16Array.
info: |
  %TypedArray%.prototype.slice ( start, end )
  ...
  14. If countBytes > 0, then
    ...
    g. If srcType is targetType, then
      ...
    h. Else,
      ...
      iii. Repeat, while k < endIndex,
        ...
        2. Let kValue be ! Get(O, Pk).
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

// Tearing was observed in implementations for |length = 1|.
const length = 1;

testNoTear(
  Int16Array,
  length,
  ta => ta.slice(0),
  ta => {
    // `slice` performs bytewise copying when the target TypedArray has the same
    // type, therefore modify the `constructor` to ensure the target TypedArray
    // has a different type.
    ta.constructor = Uint16Array;
  },
);
