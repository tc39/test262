// Copyright (C) 2022 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone
description: >
  TimeZone constructor canonicalises its input.
features: [Temporal]
---*/

const testCases = {
  "Mexico/BajaNorte": "America/Tijuana",
  "Mexico/BajaSur": "America/Mazatlan",
  "Mexico/General": "America/Mexico_City",
};

for (let [id, canonical] of Object.entries(testCases)) {
  let tz = new Temporal.TimeZone(id);

  assert.sameValue(tz.id, canonical);
}
