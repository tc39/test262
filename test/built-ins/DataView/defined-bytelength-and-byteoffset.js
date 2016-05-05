// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return new instance from defined length and offset
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  17. Return O.
---*/

var sample;
var buffer = new ArrayBuffer(3);

sample = new DataView(buffer, 1, 2);
assert.sameValue(sample.byteLength, 2, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 1, 0);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 0, 3);
assert.sameValue(sample.byteLength, 3, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 3, 0);
assert.sameValue(sample.byteLength, 0, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 0, 1);
assert.sameValue(sample.byteLength, 1, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 0, 2);
assert.sameValue(sample.byteLength, 2, "sample.byteLength");
assert.sameValue(sample.buffer, buffer, "sample.buffer");
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
