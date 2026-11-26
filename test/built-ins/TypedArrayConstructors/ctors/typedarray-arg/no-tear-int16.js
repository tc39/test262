// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typedarray
description: >
  No tearing when creating an Int16Array.
info: |
  TypedArray ( ...args )
  ...
  6. Else,
    a. Let firstArgument be args[0].
    b. If firstArgument is an Object, then
      ...
      ii. If firstArgument has a [[TypedArrayName]] internal slot, then
        1. Perform ? InitializeTypedArrayFromTypedArray(O, firstArgument).
      ...


  InitializeTypedArrayFromTypedArray ( O, srcArray )
    ...
    11. If elementType is srcType, then
      ...
    12. Else,
      ...
      f. Repeat, while count > 0,
        i. Let value be GetValueFromBuffer(srcData, srcByteIndex, srcType, true, unordered).
        ii. Perform SetValueInBuffer(data, targetByteIndex, elementType, value, true, unordered).
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

testNoTear(
  Int16Array,
  length,

  // Must be a different element type, because the same element case copies the
  // contents bytewise.
  ta => new Uint16Array(ta),
);
