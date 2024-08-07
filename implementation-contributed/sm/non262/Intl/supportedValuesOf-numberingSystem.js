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
const numSystems = Intl.supportedValuesOf("numberingSystem");

assert.sameValue(new Set(numSystems).size, numSystems.length, "No duplicates are present");
assert.compareArray(numSystems, [...numSystems].sort(), "The list is sorted");

const typeRE = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/;
for (let numberingSystem of numSystems) {
  assert.sameValue(typeRE.test(numberingSystem), true, `${numberingSystem} matches the 'type' production`);
}

for (let numberingSystem of numSystems) {
  assert.sameValue(new Intl.Locale("und", {numberingSystem}).numberingSystem, numberingSystem,
           `${numberingSystem} is canonicalised`);
}

for (let numberingSystem of numSystems) {
  let obj = new Intl.DateTimeFormat("en", {numberingSystem});
  assert.sameValue(obj.resolvedOptions().numberingSystem, numberingSystem,
           `${numberingSystem} is supported by DateTimeFormat`);
}

for (let numberingSystem of numSystems) {
  let obj = new Intl.NumberFormat("en", {numberingSystem});
  assert.sameValue(obj.resolvedOptions().numberingSystem, numberingSystem,
           `${numberingSystem} is supported by NumberFormat`);
}

for (let numberingSystem of numSystems) {
  let obj = new Intl.RelativeTimeFormat("en", {numberingSystem});
  assert.sameValue(obj.resolvedOptions().numberingSystem, numberingSystem,
           `${numberingSystem} is supported by RelativeTimeFormat`);
}

