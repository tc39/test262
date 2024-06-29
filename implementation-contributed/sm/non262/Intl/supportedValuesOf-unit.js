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
const units = Intl.supportedValuesOf("unit");

assert.sameValue(new Set(units).size, units.length, "No duplicates are present");
assert.compareArray(units, [...units].sort(), "The list is sorted");

const unitRE = /^[a-z]+(-[a-z]+)*$/;
for (let unit of units) {
  assert.sameValue(unitRE.test(unit), true, `${unit} is ASCII lower-case, separated by hyphens`);
  assert.sameValue(unit.includes("-per-"), false, `${unit} is a simple unit identifier`);
}

for (let unit of units) {
  let obj = new Intl.NumberFormat("en", {style: "unit", unit});
  assert.sameValue(obj.resolvedOptions().unit, unit, `${unit} is supported by NumberFormat`);
}

