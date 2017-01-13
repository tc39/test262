// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Throws a TypeError if length is a Symbol
info: >
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  14. Else,
    a. Let newLength be ? ToLength(length).
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

for ( let Buffer of [ArrayBuffer, SharedArrayBuffer] ) {

var buffer = new Buffer(8);
var length = Symbol("1");

testWithTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    new TA(buffer, 0, length);
  });
});

}
