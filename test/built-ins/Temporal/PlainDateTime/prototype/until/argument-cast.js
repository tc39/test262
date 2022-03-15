// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: String argument gets cast
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);

const duration1 = datetime.until({ year: 2019, month: 10, day: 29, hour: 10 });
const duration2 = datetime.until("2019-10-29T10:46:38.271986102");

TemporalHelpers.assertDurationsEqual(
  datetime.until({ year: 2019, month: 10, day: 29, hour: 10 }),
  datetime.until("2019-10-29T10:46:38.271986102"),
  "string argument gets cast"
);
