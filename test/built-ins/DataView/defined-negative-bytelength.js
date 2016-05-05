// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return new instance from negative lengths
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  17. Return O.
---*/

var sample;
var buffer = new ArrayBuffer(2);

sample = new DataView(buffer, 0, -1);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.byteOffset, 0, "sample.byteOffset");
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 0, -Infinity);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.byteOffset, 0, "sample.byteOffset");
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 1, -1);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.byteOffset, 1, "sample.byteOffset");
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 2, -Infinity);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.byteOffset, 2, "sample.byteOffset");
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
