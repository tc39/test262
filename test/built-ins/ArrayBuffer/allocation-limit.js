// Copyright (C) 2023 André Bargull, Deniz Eren Evrendilek. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arraybuffer-length
description: >
  Throws a RangeError if requested Data Block is too large.
info: |
  ArrayBuffer( length )
    ...
    3. Return AllocateArrayBuffer(NewTarget, byteLength).

  AllocateArrayBuffer ( constructor, byteLength )
    ...
    2. Let block be ? CreateByteDataBlock(byteLength).
    ...

  CreateByteDataBlock( size )
    1. If size > 2**53 - 1, throw a RangeError exception.
    2. Let db be a new Data Block value consisting of size bytes. If it is
       impossible to create such a Data Block, throw a RangeError exception.
    ...
---*/

assert.throws(RangeError, function() {
  // Allocating almost 8 PiB should fail with a RangeError.
  // Math.pow(2, 53) = 9007199254740992
  new ArrayBuffer(9007199254740992);
}, "`length` parameter is Math.pow(2, 53)");

assert.throws(RangeError, function() {
  // Allocating over 8 PiB should fail with a RangeError.
  // Math.pow(2, 53) = 9007199254740992
  new ArrayBuffer(9007199254740992 + 2);
}, "`length` parameter is Math.pow(2, 53) + 2");
