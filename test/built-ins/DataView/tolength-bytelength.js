// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  ToLength(byteLength) conversions
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  17. Return O.
---*/

var sample;
var buffer = new ArrayBuffer(2);

sample = new DataView(buffer, 0, true);
assert.sameValue(sample.byteLength, 1, "true");

sample = new DataView(buffer, 0, false);
assert.sameValue(sample.byteLength, 0, "false");

sample = new DataView(buffer, 0, "1");
assert.sameValue(sample.byteLength, 1, "string 1");

sample = new DataView(buffer, 0, "");
assert.sameValue(sample.byteLength, 0, "the empty string");

sample = new DataView(buffer, 0, [1]);
assert.sameValue(sample.byteLength, 1, "[1]");

sample = new DataView(buffer, 0, []);
assert.sameValue(sample.byteLength, 0, "[]");

sample = new DataView(buffer, 0, NaN);
assert.sameValue(sample.byteLength, 0, "NaN");

sample = new DataView(buffer, 0, null);
assert.sameValue(sample.byteLength, 0, "null");
