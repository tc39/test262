// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.sort
description: >
  No tearing when sorting an Int16Array.
info: |
  %TypedArray%.prototype.sort ( comparator )
  ...
  7. Let sortedList be ? SortIndexedProperties(obj, len, SortCompare, read-through-holes).
  ...
  9. Repeat, while j < len,
    a. Perform ! Set(obj, ! ToString(𝔽(j)), sortedList[j], true).
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


  TypedArraySetElement ( O, index, value )
  ...
  3. If IsValidIntegerIndex(O, index) is true, then
    ...
    e. Perform SetValueInBuffer(O.[[ViewedArrayBuffer]], byteIndexInBuffer,
       elementType, numValue, true, unordered).
  ...


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


  SetValueInBuffer ( arrayBuffer, byteIndex, type, value, isTypedArray, order [ , isLittleEndian ] )
  ...
  8. If IsSharedArrayBuffer(arrayBuffer) is true, then
    ...
    c. If isTypedArray is true and IsNoTearConfiguration(type, order) is true,
       let noTear be true; otherwise let noTear be false.
    d. Append WriteSharedMemory { [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block,
       [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize, [[Payload]]: rawBytes }
       to eventsRecord.[[EventList]].
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
  Int16Array,
  length,
  ta => ta.sort(),
);
