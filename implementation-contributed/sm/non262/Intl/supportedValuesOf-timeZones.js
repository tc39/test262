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
const timeZones = Intl.supportedValuesOf("timeZone");

assert.sameValue(new Set(timeZones).size, timeZones.length, "No duplicates are present");
assert.compareArray(timeZones, [...timeZones].sort(), "The list is sorted");

// The pattern doesn't cover the complete time zone syntax, but gives a good first approximation.
const timeZoneRE = /^[a-z0-9_+-]+(\/[a-z0-9_+-]+)*$/i;
for (let timeZone of timeZones) {
  assert.sameValue(timeZoneRE.test(timeZone), true, `${timeZone} is ASCII`);
}

for (let timeZone of timeZones) {
  let obj = new Intl.DateTimeFormat("en", {timeZone});
  assert.sameValue(obj.resolvedOptions().timeZone, timeZone, `${timeZone} is supported by DateTimeFormat`);
}

