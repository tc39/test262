// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: verify immutable property is implemented by an accessor
features: [ArrayBuffer, immutable-arraybuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, 'immutable'
).get;

assert.sameValue(typeof getter, 'function');

assert.throws(TypeError, function() {
  getter();
});
