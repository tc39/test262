// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Array-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/if (typeof Intl === "object") {
    const localeSep = [,,].toLocaleString();

    // Missing arguments are passed as |undefined|.
    const objNoArgs = {
        toLocaleString() {
            assert.sameValue(arguments.length, 2);
            assert.sameValue(arguments[0], undefined);
            assert.sameValue(arguments[1], undefined);
            return "pass";
        }
    };
    // - Single element case.
    assert.sameValue([objNoArgs].toLocaleString(), "pass");
    // - More than one element.
    assert.sameValue([objNoArgs, objNoArgs].toLocaleString(), "pass" + localeSep + "pass");

    // Ensure "locales" and "options" arguments are passed to the array elements.
    const locales = {}, options = {};
    const objWithArgs = {
        toLocaleString() {
            assert.sameValue(arguments.length, 2);
            assert.sameValue(arguments[0], locales);
            assert.sameValue(arguments[1], options);
            return "pass";
        }
    };
    // - Single element case.
    assert.sameValue([objWithArgs].toLocaleString(locales, options), "pass");
    // - More than one element.
    assert.sameValue([objWithArgs, objWithArgs].toLocaleString(locales, options), "pass" + localeSep + "pass");
}

