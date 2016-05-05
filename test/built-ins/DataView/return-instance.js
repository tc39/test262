// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Returns new instance
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  12. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DataViewPrototype%",
  « [[DataView]], [[ViewedArrayBuffer]], [[ByteLength]], [[ByteOffset]] »).
  ...
  17. Return O.
---*/

var ab, sample;

ab = new ArrayBuffer(1);
sample = new DataView(ab, 0);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
assert.sameValue(sample.byteLength, 1);
assert.sameValue(sample.buffer, ab);

ab = new ArrayBuffer(1);
sample = new DataView(ab, 1);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
assert.sameValue(sample.byteLength, 0);
assert.sameValue(sample.buffer, ab);
