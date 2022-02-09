// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone
description: Some Etc/GMT{+/-}{0}N timezones are valid, but not all
features: [Temporal]
---*/

// "Etc/GMT-0" through "Etc/GMT-14" are OK

assert.sameValue(
  Temporal.TimeZone.from("Etc/GMT-0").toString(),
  "UTC", // if the offset is -0, we say "UTC" rather than "GMT"
  "Etc/GMT-0 is a valid timezone"
);

[1,2,3,4,5,6,7,8,9,10,11,12,13,14].forEach((n) => {
  let tz = "Etc/GMT-" + n;
  let instance = Temporal.TimeZone.from(tz);
  assert.sameValue(
    instance.toString(),
    tz,
    tz + " is a valid timezone"
  );
});

// "Etc/GMT-0N" is not OK (1 ≤ N ≤ 9)
[1,2,3,4,5,6,7,8,9].forEach((n) => {
  let tz = "Etc/GMT-0" + n;
  assert.throws(
    RangeError,
    () => { Temporal.TimeZone.from(tz); },
    tz + " is an invalid timezone"
  );
});

// "Etc/GMT+0N" is not OK (0 ≤ N ≤ 9)
[0,1,2,3,4,5,6,7,8,9].forEach((n) => {
  let tz = "Etc/GMT+0" + n;
  assert.throws(
    RangeError,
    () => { Temporal.TimeZone.from(tz); },
    tz + " is an invalid timezone"
    );
});

// Etc/GMT+0" through "Etc/GMT+9" are OK

// zero is handled in its own way:
assert.sameValue(
  Temporal.TimeZone.from("Etc/GMT+0").toString(),
  "UTC", // if the offset is +0, we say "UTC" rather than "GMT"
  "Etc/GMT+0 is a valid timezone"
);

[1,2,3,4,5,6,7,8,9, 10, 11, 12].forEach((n) => {
  let tz = "Etc/GMT+" + n;
  let instance = Temporal.TimeZone.from(tz);
  assert.sameValue(
    instance.toString(),
    tz,
    tz + " is a valid timezone"
  );
});
