// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.load
description: >
  Test Atomics.load on non-shared integer TypedArrays
includes: [testTypedArray.js]
features: [ArrayBuffer, Atomics, TypedArray]
---*/

var ab = new ArrayBuffer(16);

var views = intArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  var view = new TA(ab);

  assert.throws(TypeError, function() {
    Atomics.load(view, 0);
  }, 'Atomics.load(view, 0) throws TypeError');
}, views);
