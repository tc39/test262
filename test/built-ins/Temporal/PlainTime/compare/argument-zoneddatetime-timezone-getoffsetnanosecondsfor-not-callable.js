// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.compare
description: TypeError thrown if timeZone.getOffsetNanosecondsFor is not callable
features: [BigInt, Symbol, Temporal, arrow-function]
---*/

[undefined, null, true, Math.PI, 'string', Symbol('sym'), 42n, {}].forEach((notCallable) => {
  const timeZone = new Temporal.TimeZone("UTC");
  const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, timeZone);
  const time = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
  timeZone.getOffsetNanosecondsFor = notCallable;
  assert.throws(
    TypeError,
    () => Temporal.PlainTime.compare(datetime, time),
    `Uncallable ${typeof notCallable} getOffsetNanosecondsFor should throw TypeError`
  );
  assert.throws(
    TypeError,
    () => Temporal.PlainTime.compare(time, datetime),
    `Uncallable ${typeof notCallable} getOffsetNanosecondsFor should throw TypeError`
  );
});
