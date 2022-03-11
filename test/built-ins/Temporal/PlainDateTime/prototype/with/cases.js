// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: A variety of "normal" (non-throwing, non-boundary case, non-null, etc.) arguments
esid: sec-temporal.plaindatetime.prototype.with
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);

assert.sameValue(
  `${datetime.with({ year: 2019 })}`,
  "2019-11-18T15:23:30.123456789",
  "with year works"
);

assert.sameValue(
  `${datetime.with({ month: 5 })}`,
  "1976-05-18T15:23:30.123456789",
  "with month works"
);

assert.sameValue(
  `${datetime.with({ monthCode: "M05" })}`,
  "1976-05-18T15:23:30.123456789",
  "with month code works"
);

assert.sameValue(
  `${datetime.with({ day: 5 })}`,
  "1976-11-05T15:23:30.123456789",
  "with day works"
);

assert.sameValue(
  `${datetime.with({ hour: 5 })}`,
  "1976-11-18T05:23:30.123456789",
  "with hour works"
);

assert.sameValue(
  `${datetime.with({ minute: 5 })}`,
  "1976-11-18T15:05:30.123456789",
  "with minute works"
);

assert.sameValue(
  `${datetime.with({ second: 5 })}`,
  "1976-11-18T15:23:05.123456789",
  "with second works"
);

assert.sameValue(
  `${datetime.with({ millisecond: 5 })}`,
  "1976-11-18T15:23:30.005456789",
  "with millisecond works"
);

assert.sameValue(
  `${datetime.with({ microsecond: 5 })}`,
  "1976-11-18T15:23:30.123005789",
  "with microsecond works"
);

assert.sameValue(
  `${datetime.with({ nanosecond: 5 })}`,
  "1976-11-18T15:23:30.123456005",
  "with nanosecond works"
);

assert.sameValue(
  `${datetime.with({ month: 5, second: 15 })}`,
  "1976-05-18T15:23:15.123456789",
  "with month and second works"
);
