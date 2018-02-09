// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typedarray-typedarray
description: >
  Passing a SharedArrayBuffer-backed TypedArray to a TypedArray constructor
  produces an ArrayBuffer-backed TypedArray.
features: [SharedArrayBuffer, TypedArray]
---*/

var sab = new SharedArrayBuffer(4);
var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

int_views.forEach(function(View1) {
  var ta1 = new View1(sab);
  int_views.forEach(function(View2) {
    var ta2 = new View2(ta1);
    assert.sameValue(
      ta2.buffer.constructor,
      ArrayBuffer,
      "TypedArray of SharedArrayBuffer-backed TypedArray is ArrayBuffer-backed"
    );
  });
});
