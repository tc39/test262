// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: >
  Uint8Array.fromBase64Into is not a constructor function.
includes: [isConstructor.js]
features: [uint8array-base64, Reflect.construct]
---*/

assert(!isConstructor(Uint8Array.fromBase64Into), "Uint8Array.fromBase64Into is not a constructor");

assert.throws(TypeError, function() {
  var target = new Uint8Array(10);
  new Uint8Array.fromBase64Into('', target);
});
