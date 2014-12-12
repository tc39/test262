// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should be writable, non-enumerable, and configurable
author: Domenic Denicola
includes: [dataPropertyAttributesAreCorrect.js]
---*/

var propertyDescriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'includes');

assert.sameValue(propertyDescriptor.writable, true, 'Expected Array.prototype.includes to be writable');
assert.sameValue(propertyDescriptor.enumerable, false, 'Expected Array.prototype.includes to be non-enumerable');
assert.sameValue(propertyDescriptor.configurable, true, 'Expected Array.prototype.includes to be configurable');

if (!dataPropertyAttributesAreCorrect(Array.prototype, 'includes', Array.prototype.includes, true, false, true)) {
    $ERROR('Expected Array.prototype.includes to be writable, non-enumerable, and configurable (based on behavior)');
}
