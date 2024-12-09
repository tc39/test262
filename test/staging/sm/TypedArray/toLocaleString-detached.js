// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-TypedArray-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
if (typeof $262.detachArrayBuffer === "function") {
    const originalNumberToLocaleString = Number.prototype.toLocaleString;

    // Throws if array buffer is detached.
    for (let constructor of typedArrayConstructors) {
        let typedArray = new constructor(42);
        $262.detachArrayBuffer(typedArray.buffer);
        assertThrowsInstanceOf(() => typedArray.toLocaleString(), TypeError);
    }

    // Doesn't throw a TypeError if detached in Number.prototype.toLocaleString.
    for (let constructor of typedArrayConstructors) {
        Number.prototype.toLocaleString = function() {
            "use strict";
            if (!detached) {
                $262.detachArrayBuffer(typedArray.buffer);
                detached = true;
            }
            return this;
        };

        // No error for single element arrays.
        let detached = false;
        let typedArray = new constructor(1);
        assert.sameValue(typedArray.toLocaleString(), "0");
        assert.sameValue(detached, true);

        // And no error if more than one element is present.
        detached = false;
        typedArray = new constructor(2);
        assert.sameValue(typedArray.toLocaleString(), "0,");
        assert.sameValue(detached, true);
    }
    Number.prototype.toLocaleString = originalNumberToLocaleString;
}

