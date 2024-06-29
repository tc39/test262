// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Array-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

if (Array.prototype.values) {
    assert.sameValue(Array.prototype.values, Array.prototype[Symbol.iterator]);
    assert.sameValue(Array.prototype.values.name, "values");
    assert.sameValue(Array.prototype.values.length, 0);

    function valuesUnscopeable() {
        var values = "foo";
        with ([1, 2, 3]) {
            assert.sameValue(indexOf, Array.prototype.indexOf);
            assert.sameValue(values, "foo");
        }
    }
    valuesUnscopeable();
}

