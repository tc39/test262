// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
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
var otherGlobal = newGlobal();

var dateTimeFormat = new Intl.DateTimeFormat();
var ccwDateTimeFormat = new otherGlobal.Intl.DateTimeFormat();

// Test Intl.DateTimeFormat.prototype.format with a CCW object.
var Intl_DateTimeFormat_format_get = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype, "format").get;

assert.sameValue(Intl_DateTimeFormat_format_get.call(ccwDateTimeFormat)(0),
         Intl_DateTimeFormat_format_get.call(dateTimeFormat)(0));

// Test Intl.DateTimeFormat.prototype.formatToParts with a CCW object.
var Intl_DateTimeFormat_formatToParts = Intl.DateTimeFormat.prototype.formatToParts;

assert.sameValue(deepEqual(Intl_DateTimeFormat_formatToParts.call(ccwDateTimeFormat, 0),
                   Intl_DateTimeFormat_formatToParts.call(dateTimeFormat, 0)),
         true);

// Test Intl.DateTimeFormat.prototype.resolvedOptions with a CCW object.
var Intl_DateTimeFormat_resolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;

assert.sameValue(deepEqual(Intl_DateTimeFormat_resolvedOptions.call(ccwDateTimeFormat),
                   Intl_DateTimeFormat_resolvedOptions.call(dateTimeFormat)),
         true);

// Special case for Intl.DateTimeFormat: The Intl fallback symbol.

function fallbackSymbol(global) {
    var DTF = global.Intl.DateTimeFormat;
    return Object.getOwnPropertySymbols(DTF.call(Object.create(DTF.prototype)))[0];
}

const intlFallbackSymbol = fallbackSymbol(this);
const otherIntlFallbackSymbol = fallbackSymbol(otherGlobal);
assert.sameValue(intlFallbackSymbol === otherIntlFallbackSymbol, false);

// Test when the fallback symbol points to a CCW DateTimeFormat object.
var objWithFallbackCCWDateTimeFormat = {
    __proto__: Intl.DateTimeFormat.prototype,
    [intlFallbackSymbol]: ccwDateTimeFormat,
};

assert.sameValue(Intl_DateTimeFormat_format_get.call(objWithFallbackCCWDateTimeFormat)(0),
         Intl_DateTimeFormat_format_get.call(dateTimeFormat)(0));

assert.sameValue(deepEqual(Intl_DateTimeFormat_resolvedOptions.call(objWithFallbackCCWDateTimeFormat),
                   Intl_DateTimeFormat_resolvedOptions.call(dateTimeFormat)),
         true);

// Ensure the fallback symbol(s) are not accessed for CCW DateTimeFormat objects.
var ccwDateTimeFormatWithPoisonedFallback = new otherGlobal.Intl.DateTimeFormat();
Object.setPrototypeOf(ccwDateTimeFormatWithPoisonedFallback, Intl.DateTimeFormat.prototype);
Object.defineProperty(ccwDateTimeFormatWithPoisonedFallback, intlFallbackSymbol, {
    get() { throw new Error(); }
});
Object.defineProperty(ccwDateTimeFormatWithPoisonedFallback, otherIntlFallbackSymbol, {
    get() { throw new Error(); }
});

assert.sameValue(Intl_DateTimeFormat_format_get.call(ccwDateTimeFormatWithPoisonedFallback)(0),
         Intl_DateTimeFormat_format_get.call(dateTimeFormat)(0));

assert.sameValue(deepEqual(Intl_DateTimeFormat_resolvedOptions.call(ccwDateTimeFormatWithPoisonedFallback),
                   Intl_DateTimeFormat_resolvedOptions.call(dateTimeFormat)),
         true);

