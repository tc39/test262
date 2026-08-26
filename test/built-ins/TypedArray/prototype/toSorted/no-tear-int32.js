// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.tosorted
description: >
  No tearing when sorting an Int32Array.
info: |
  %TypedArray%.prototype.toSorted ( comparator )
  ...
  8. Let sortedList be ? SortIndexedProperties(O, len, SortCompare, read-through-holes).
  ...


  SortIndexedProperties ( obj, len, SortCompare, holes )
  ...
  3. Repeat, while k < len,
    ...
    d. If kRead is true, then
      i. Let kValue be ? Get(obj, Pk).
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
  Int32Array,
  length,
  ta => ta.toSorted(),
);
