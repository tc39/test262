// Copyright (C) 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.store
description: >
  Atomics.store returns the newly stored value
info: |
  Atomics.store( typedArray, index, value )

  ...
  3. Let v be ? ToInteger(value).
  ...
  9. Perform SetValueInBuffer(buffer, indexedPosition,
                              elementType, v, true, "SeqCst").
  10. Return v.

features: [Atomics, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
var i32a = new Int32Array(buffer);
var expect = 0b00000001000000001000000010000001;

assert.sameValue(Atomics.store(i32a, 0, expect), expect);
assert.sameValue(i32a[0], expect);
