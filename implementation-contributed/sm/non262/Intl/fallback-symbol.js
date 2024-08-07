// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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
function IntlFallbackSymbol(constructor) {
    return Object.getOwnPropertySymbols(constructor.call(Object.create(constructor.prototype)))[0];
}

const dateTimeFormatIntlFallbackSymbol = IntlFallbackSymbol(Intl.DateTimeFormat);
const numberFormatIntlFallbackSymbol = IntlFallbackSymbol(Intl.NumberFormat);

// Intl.DateTimeFormat and Intl.NumberFormat both use the same fallback symbol.
assert.sameValue(dateTimeFormatIntlFallbackSymbol, numberFormatIntlFallbackSymbol);

const intlFallbackSymbol = dateTimeFormatIntlFallbackSymbol;

// The fallback symbol is a Symbol value.
assert.sameValue(typeof intlFallbackSymbol, "symbol");

// Test the description of the fallback symbol.
assert.sameValue(Symbol.prototype.toString.call(intlFallbackSymbol), "Symbol(IntlLegacyConstructedSymbol)");

