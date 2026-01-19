// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: PlainDateTime can be formatted with a formatter created with the timeZoneName option.
locale: [en-US]
features: [Temporal]
---*/

const locale = "en-US";
const timeZoneNameStyles = [
  "long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"
];
const pdt1 = new Temporal.PlainDateTime(2026, 1, 5, 11, 22);
const pdt2 = new Temporal.PlainDateTime(2026, 1, 5, 11, 23);

for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, { timeZoneName: timeZoneNameStyle });
  assert.sameValue(typeof dtf.formatRange(pdt1, pdt2), "string",
    `can format a PlainDateTime with timeZoneName = ${timeZoneNameStyle}`);
}
