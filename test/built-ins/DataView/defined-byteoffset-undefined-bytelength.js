// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return new instance from defined byteoffset and undefined bytelength
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  17. Return O.
---*/

var sample;
var buffer = new ArrayBuffer(4);

sample = new DataView(buffer, 0, undefined);
assert.sameValue(sample.byteLength, 4);
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 1, undefined);
assert.sameValue(sample.byteLength, 3);
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 2, undefined);
assert.sameValue(sample.byteLength, 2);
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 3, undefined);
assert.sameValue(sample.byteLength, 1);
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

sample = new DataView(buffer, 4, undefined);
assert.sameValue(sample.byteLength, 0);
assert.sameValue(sample.buffer, buffer);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
