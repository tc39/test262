// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should be writable, non-enumerable, and configurable
author: Domenic Denicola
includes: [dataPropertyAttributesAreCorrect.js]
---*/

var typedArrayProto = Object.getPrototypeOf(Uint8Array.prototype);
var propertyDescriptor = Object.getOwnPropertyDescriptor(typedArrayProto, 'includes');

assert.sameValue(propertyDescriptor.writable, true, 'Expected %TypedArray%.prototype.includes to be writable');
assert.sameValue(propertyDescriptor.enumerable, false, 'Expected %TypedArray%.prototype.includes to be non-enumerable');
assert.sameValue(propertyDescriptor.configurable, true, 'Expected %TypedArray%.prototype.includes to be configurable');

if (!dataPropertyAttributesAreCorrect(typedArrayProto, 'includes', Uint8Array.prototype.includes, true, false, true)) {
    $ERROR('Expected %TypedArray%.prototype.includes to be writable, non-enumerable, and configurable (based on ' +
        'behavior)');
}
