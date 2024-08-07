// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- non262-Intl-ListFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
var g = newGlobal();

var locale = "en";
var list = ["a", "b", "c"];

var listFormat = new Intl.ListFormat(locale);
var ccwListFormat = new g.Intl.ListFormat(locale);

// Intl.ListFormat.prototype.format
{
    var fn = Intl.ListFormat.prototype.format;

    var expectedValue = fn.call(listFormat, list);
    var actualValue = fn.call(ccwListFormat, list);

    assert.sameValue(actualValue, expectedValue);
}

// Intl.ListFormat.prototype.formatToParts
{
    var fn = Intl.ListFormat.prototype.formatToParts;

    var expectedValue = fn.call(listFormat, list);
    var actualValue = fn.call(ccwListFormat, list);

    assert.deepEqual(actualValue, expectedValue);
}

// Intl.ListFormat.prototype.resolvedOptions
{
    var fn = Intl.ListFormat.prototype.resolvedOptions;

    var expectedValue = fn.call(listFormat);
    var actualValue = fn.call(ccwListFormat);

    assert.deepEqual(actualValue, expectedValue);
}

