// Copyright (C) 2022 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone
description: >
  TimeZone constructor canonicalises its input.
features: [Temporal]
---*/

const testCases = {
  "Europe/Bratislava": "Europe/Prague",
  "Europe/Busingen": "Europe/Zurich",
  "Europe/Mariehamn": "Europe/Helsinki",
  "Europe/Nicosia": "Asia/Nicosia",
  "Europe/Podgorica": "Europe/Belgrade",
  "Europe/San_Marino": "Europe/Rome",
  "Europe/Vatican": "Europe/Rome",
};

for (let [id, canonical] of Object.entries(testCases)) {
  let tz = new Temporal.TimeZone(id);

  assert.sameValue(tz.id, canonical);
}
