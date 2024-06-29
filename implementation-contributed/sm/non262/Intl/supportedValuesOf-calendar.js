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
const calendars = Intl.supportedValuesOf("calendar");

assert.sameValue(new Set(calendars).size, calendars.length, "No duplicates are present");
assert.compareArray(calendars, [...calendars].sort(), "The list is sorted");

const typeRE = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/;
for (let calendar of calendars) {
  assert.sameValue(typeRE.test(calendar), true, `${calendar} matches the 'type' production`);
}

for (let calendar of calendars) {
  assert.sameValue(new Intl.Locale("und", {calendar}).calendar, calendar, `${calendar} is canonicalised`);
}

for (let calendar of calendars) {
  let obj = new Intl.DateTimeFormat("en", {calendar});
  assert.sameValue(obj.resolvedOptions().calendar, calendar, `${calendar} is supported by DateTimeFormat`);
}

assert.sameValue(calendars.includes("gregory"), true, `Includes the Gregorian calendar`);

