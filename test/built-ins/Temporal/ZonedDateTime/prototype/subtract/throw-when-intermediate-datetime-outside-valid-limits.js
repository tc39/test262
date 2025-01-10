// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: >
  Throws RangeError when intermediate date-time is outside valid limits.
info: |
  Temporal.ZonedDateTime.prototype.subtract ( temporalDurationLike [ , options ] )

  ...
  3. Return ? AddDurationToZonedDateTime(subtract, zonedDateTime, temporalDurationLike, options).

  AddDurationToZonedDateTime ( operation, zonedDateTime, temporalDurationLike, options )

  ...
  8. Let epochNanoseconds be ? AddZonedDateTime(zonedDateTime.[[EpochNanoseconds]], timeZone, calendar, internalDuration, overflow).
  ...

  AddZonedDateTime ( epochNanoseconds, timeZone, calendar, duration, overflow )

  ...
  4. Let intermediateDateTime be CombineISODateAndTimeRecord(addedDate, isoDateTime.[[Time]]).
  5. If ISODateTimeWithinLimits(intermediateDateTime) is false, throw a RangeError exception.
  ...
features: [Temporal]
---*/

var nsMaxInstant = 864n * 10n**19n;
var nsMinInstant = -nsMaxInstant;

var epochNs = nsMinInstant;
var zdt = new Temporal.ZonedDateTime(epochNs, "UTC");

assert.throws(RangeError, () => zdt.subtract({days: 1}));
