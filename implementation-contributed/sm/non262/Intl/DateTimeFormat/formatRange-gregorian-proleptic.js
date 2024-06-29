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
// Ensure formatRange() uses a proleptic Gregorian calendar.
// ICU bug: https://unicode-org.atlassian.net/browse/ICU-20705

let dtf = new Intl.DateTimeFormat("en", {timeZone: "UTC"});

// The Gregorian calendar was first introduced in 15 October 1582.
const firstGregorian = new Date("1582-10-15");
assert.sameValue(dtf.formatRange(firstGregorian, firstGregorian), dtf.format(firstGregorian));

// To deal with the ten days' difference between the Julian and the Gregorian calendar, some days
// were skipped, so that 4 October 1582 was followed by 15 October 1582.
const lastJulian = new Date("1582-10-04");
assert.sameValue(dtf.formatRange(lastJulian, lastJulian), dtf.format(lastJulian));

function rangePart(source, parts) {
  return parts.filter(x => x.source === source).map(x => x.value).join("");
}

// Test with non-empty range.
assert.sameValue(rangePart("startRange", dtf.formatRangeToParts(lastJulian, firstGregorian)),
         dtf.format(lastJulian));
assert.sameValue(rangePart("endRange", dtf.formatRangeToParts(lastJulian, firstGregorian)),
         dtf.format(firstGregorian));

