// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-NumberFormat-shell.js
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
const {
    Integer, Decimal, Fraction, Currency, Literal,
} = NumberFormatParts;

const testcases = [
    {
        locale: "en-CA",
        options: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
        },
        values: [
            {value: 123, string: "US$123.00",
             parts: [Currency("US$"), Integer("123"), Decimal("."), Fraction("00")]},
        ],
    },

    // And for comparison "symbol" currency-display.

    {
        locale: "en-CA",
        options: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
        },
        values: [
            {value: 123, string: "US$123.00",
             parts: [Currency("US$"), Integer("123"), Decimal("."), Fraction("00")]},
        ],
    },
];

runNumberFormattingTestcases(testcases);

