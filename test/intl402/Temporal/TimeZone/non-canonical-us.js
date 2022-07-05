// Copyright (C) 2022 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone
description: >
  TimeZone constructor canonicalises its input.
features: [Temporal]
---*/

const testCases = {
  "US/Alaska": "America/Anchorage",
  "US/Aleutian": "America/Adak",
  "US/Arizona": "America/Phoenix",
  "US/Central": "America/Chicago",
  "US/East-Indiana": "America/Indiana/Indianapolis",
  "US/Eastern": "America/New_York",
  "US/Hawaii": "Pacific/Honolulu",
  "US/Indiana-Starke": "America/Indiana/Knox",
  "US/Michigan": "America/Detroit",
  "US/Mountain": "America/Denver",
  "US/Pacific": "America/Los_Angeles",
  "US/Samoa": "Pacific/Pago_Pago",
};

for (let [id, canonical] of Object.entries(testCases)) {
  let tz = new Temporal.TimeZone(id);

  assert.sameValue(tz.id, canonical);
}
