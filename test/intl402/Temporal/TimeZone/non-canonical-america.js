// Copyright (C) 2022 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone
description: >
  TimeZone constructor canonicalises its input.
features: [Temporal]
---*/

const testCases = {
  "America/Atka": "America/Adak",
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Catamarca": "America/Argentina/Catamarca",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Fort_Wayne": "America/Indiana/Indianapolis",
  "America/Godthab": "America/Nuuk",
  "America/Indianapolis": "America/Indiana/Indianapolis",
  "America/Jujuy": "America/Argentina/Jujuy",
  "America/Knox_IN": "America/Indiana/Knox",
  "America/Kralendijk": "America/Curacao",
  "America/Louisville": "America/Kentucky/Louisville",
  "America/Lower_Princes": "America/Curacao",
  "America/Marigot": "America/Port_of_Spain",
  "America/Mendoza": "America/Argentina/Mendoza",
  "America/Porto_Acre": "America/Rio_Branco",
  "America/Santa_Isabel": "America/Tijuana",
  "America/Shiprock": "America/Denver",
  "America/St_Barthelemy": "America/Port_of_Spain",
  "America/Virgin": "America/St_Thomas",
};

for (let [id, canonical] of Object.entries(testCases)) {
  let tz = new Temporal.TimeZone(id);

  assert.sameValue(tz.id, canonical);
}
