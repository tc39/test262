// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.set
description: >
  No tearing when modifying an Int16Array.
info: |
  %TypedArray%.prototype.set ( source [ , offset ] )
  ...
  6. If source is an Object that has a [[TypedArrayName]] internal slot, then
       a. Perform ? SetTypedArrayFromTypedArray(target, targetOffset, source).
  ...


  SetTypedArrayFromTypedArray ( target, targetOffset, source )
  ...
  23. If srcType is targetType, then
    ...
  24. Else,
    a. Repeat, while targetByteIndex < limit,
      i. Let value be GetValueFromBuffer(srcBuffer, srcByteIndex, srcType, true, unordered).
      ii. Perform SetValueInBuffer(targetBuffer, targetByteIndex, targetType, value, true, unordered).
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

// Tearing was observed in implementations for |length = 1|.
const length = 1;

// Must be a different element type, because the same element case copies the
// contents bytewise.
const source = new Uint16Array(length);

testNoTear(
  Int16Array,
  length,
  ta => { ta.set(source); return ta; }
);
