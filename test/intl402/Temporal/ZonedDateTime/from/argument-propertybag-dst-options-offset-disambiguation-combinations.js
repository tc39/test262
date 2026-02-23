// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: >
    Test behaviour around DST boundaries with various combinations of values for
    the options offset and disambiguation, when the argument is a property bag.
features: [Temporal]
---*/

// Non existent zoned date time - Spring DST
const DSTStart = {
  year: 2000,
  month: 4,
  day: 2,
  hour: 2,
  minute: 30,
  timeZone: "America/Vancouver"
};

// Uses disambiguation if offset option is set to "ignore".
var offset = "ignore";
var zdt = Temporal.ZonedDateTime.from(DSTStart, {
  offset,
  disambiguation: "compatible"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Offset: ignore and disambiguation: compatible");

var zdt = Temporal.ZonedDateTime.from(DSTStart, {
  offset,
  disambiguation: "earlier"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T01:30:00-08:00[America/Vancouver]",
  "Offset: ignore and disambiguation: earlier");

var zdt = Temporal.ZonedDateTime.from(DSTStart, {
  offset,
  disambiguation: "later"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Offset: ignore and disambiguation: later");

assert.throws(RangeError, () => Temporal.ZonedDateTime.from(DSTStart, {
  offset,
  disambiguation: "reject"
}), "Throws when offset: ignore and disambiguation: reject");

// Uses disambiguation if the property bag's offset is wrong and the offset
// option is set to "prefer".
const DSTStartWithWrongOffset = {
  ...DSTStart,
  offset: "-23:59"
};
var offset = "prefer";

var zdt = Temporal.ZonedDateTime.from(DSTStartWithWrongOffset, {
  offset,
  disambiguation: "compatible"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Offset is wrong, option offset: prefer, and disambiguation: compatible");

var zdt = Temporal.ZonedDateTime.from(DSTStartWithWrongOffset, {
  offset,
  disambiguation: "earlier"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T01:30:00-08:00[America/Vancouver]",
  "Offset is wrong, option offset: prefer, and disambiguation: earlier");

var zdt = Temporal.ZonedDateTime.from(DSTStartWithWrongOffset, {
  offset,
  disambiguation: "later"
});
assert.sameValue(`${ zdt }`,
  "2000-04-02T03:30:00-07:00[America/Vancouver]",
  "Option offset: prefer, and disambiguation: later");

assert.throws(RangeError, () => Temporal.ZonedDateTime.from(DSTStartWithWrongOffset, {
  offset,
  disambiguation: "reject"
}), "Throws when offset is wrong, option offset: prefer, and disambiguation: reject");
