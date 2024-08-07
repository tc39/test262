// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
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
const currencies = Intl.supportedValuesOf("currency");

assert.sameValue(new Set(currencies).size, currencies.length, "No duplicates are present");
assert.compareArray(currencies, [...currencies].sort(), "The list is sorted");

const codeRE = /^[A-Z]{3}$/;
for (let currency of currencies) {
  assert.sameValue(codeRE.test(currency), true, `${currency} is a 3-letter ISO 4217 currency code`);
}

for (let currency of currencies) {
  let obj = new Intl.NumberFormat("en", {style: "currency", currency});
  assert.sameValue(obj.resolvedOptions().currency, currency, `${currency} is supported by NumberFormat`);
}

for (let currency of currencies) {
  let obj = new Intl.DisplayNames("en", {type: "currency", fallback: "none"});
  assert.sameValue(typeof obj.of(currency), "string", `${currency} is supported by DisplayNames`);
}

