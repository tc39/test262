// Copyright (C) 2023 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: >
  Fractional days parts correctly handled when weeksInDays has a flipped sign.
info: |
  RoundDuration ( ... )

  RoundDuration is called with months=1, weeks=1, days=4, and hours=12.

  Step 4.c:
    Let fractionalDays be days + nanoseconds / nsPerDay.

    With days=4 and hours=12, this computes fractionalDays=4.5

  Step 8.e:
    Let yearsMonthsLater be ? CalendarDateAdd(calendar, plainRelativeTo, yearsMonths, undefined, dateAdd).

    The calendar's `dateAdd` method is overridden to change the duration from
    "P1M" to "P6D".

  Step 8.g:
    Let yearsMonthsWeeksLater be ? CalendarDateAdd(calendar, plainRelativeTo, yearsMonthsWeeks, undefined, dateAdd).

    The calendar's `dateAdd` method is overridden to change the duration from
    "P1M1W" to "P0D".

  Step 8.h:
    Let weeksInDays be DaysUntil(yearsMonthsLater, yearsMonthsWeeksLater).

    This computes weeksInDays=-6 with the modified durations from steps 8.e, 8.g.

  Step 8.j:
    Set fractionalDays to fractionalDays + weeksInDays.

    With fractionalDays=4.5 and weeksInDays=-6, this sets fractionalDays to -1.5.

  Step 8.k:
    If fractionalDays < 0, let sign be -1; else, let sign be 1.

    fractionalDays is -1.5, so `sign` is set to -1.

  Step 8.m:
    Let moveResult be ? MoveRelativeDate(calendar, plainRelativeTo, oneMonth, dateAdd).

    The calendar's `dateAdd` method is overridden to change the duration from
    "-P1M" to "-P1D".

  Step 8.o:
    Let oneMonthDays be moveResult.[[Days]].

    This computes oneMonthDays=-1 with the modified duration from step 8.m.

  Step 8.p:
    Repeat, while abs(fractionalDays) ≥ abs(oneMonthDays),

    With fractionalDays=-1.5 and oneMonthDays=-1, abs(-1.5) ≥ abs(-1) is true,
    so the loop is entered.

  Step 8.p.i:
    Set months to months + sign.

    With months=1 and sign=-1, this sets months=0.

  Step 8.p.ii:
    Set fractionalDays to fractionalDays - oneMonthDays.

    With fractionalDays=-1.5 and oneMonthDays=-1, this sets fractionalDays=-0.5.

  Step 8.p.iii:
    Set moveResult to ? MoveRelativeDate(calendar, plainRelativeTo, oneMonth, dateAdd).

    The calendar's `dateAdd` method is overridden to change the duration from
    "-P1M" to "-P1D".

  Step 8.p.iv:
    Set oneMonthDays to moveResult.[[Days]].

    This computes oneMonthDays=-1 with the modified duration from step 8.p.iii.

  Step 8.p:
    Repeat, while abs(fractionalDays) ≥ abs(oneMonthDays),

    With fractionalDays=-0.5 and oneMonthDays=-1, abs(-0.5) ≥ abs(-1) is false,
    so the loop is not entered again.

  Step 8.q:
    Let fractionalMonths be months + fractionalDays / abs(oneMonthDays).

    With months=0, fractionalDays=-0.5, and oneMonthDays=1, this computes
    fractionalMonths=-0.5.

  Step 8.r:
    Set months to RoundNumberToIncrement(fractionalMonths, increment, roundingMode).

    With fractionalMonths=-0.5, increment=1, and roundingMode="floor", this
    computes months=floor(-0.5)=-1.

includes: [temporalHelpers.js]
features: [Temporal]
---*/

let duration = Temporal.Duration.from({
  months: 1,
  weeks: 1,
  days: 4,
  hours: 12,
});

let expectedCalls = [
  // RoundDuration
  // 8.b Let yearsMonths be ! CreateTemporalDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0).
  // 8.e Let yearsMonthsLater be ? CalendarDateAdd(calendar, plainRelativeTo, yearsMonths, undefined, dateAdd).
  {
    expected: {months: 1},
    override: {days: 6},
  },

  // RoundDuration
  // 8.f Let yearsMonthsWeeks be ! CreateTemporalDuration(years, months, weeks, 0, 0, 0, 0, 0, 0, 0).
  // 8.g Let yearsMonthsWeeksLater be ? CalendarDateAdd(calendar, plainRelativeTo, yearsMonthsWeeks, undefined, dateAdd).
  {
    expected: {months: 1, weeks: 1},
    override: {days: 0},
  },

  // RoundDuration
  // 8.l Let oneMonth be ! CreateTemporalDuration(0, sign, 0, 0, 0, 0, 0, 0, 0, 0).
  // 8.m Let moveResult be ? MoveRelativeDate(calendar, plainRelativeTo, oneMonth, dateAdd).
  {
    expected: {months: -1},
    override: {days: -1},
  },

  // RoundDuration
  // 8.p.iii Set moveResult to ? MoveRelativeDate(calendar, plainRelativeTo, oneMonth, dateAdd).
  {
    expected: {months: -1},
    override: {days: -1},
  },

  // BalanceDateDurationRelative
  // 8 Let oneMonth be ! CreateTemporalDuration(0, sign, 0, 0, 0, 0, 0, 0, 0, 0).
  // 12.c Let moveResult be ? MoveRelativeDate(calendar, plainRelativeTo, oneMonth, dateAdd).
  {
    expected: {months: -1},
    override: {months: -1},
  },
];

let calendar = new class extends Temporal.Calendar {
  dateAdd(date, duration, options) {
    assert(expectedCalls.length > 0, "too many dateAdd calls");

    let {expected, override} = expectedCalls.shift();
    TemporalHelpers.assertDurationsEqual(duration, Temporal.Duration.from(expected));

    return super.dateAdd(date, override, options);
  }
}("iso8601");

let relativeTo = new Temporal.PlainDate(2020, 1, 1, calendar);

let result = duration.round({
  smallestUnit: "months",
  roundingMode: "floor",
  roundingIncrement: 1,
  relativeTo,
});

assert.sameValue(expectedCalls.length, 0, "All expected dateAdd calls happened");

let expected = Temporal.Duration.from({
  months: -1,
});

TemporalHelpers.assertDurationsEqual(result, expected, "Rounded duration is -P1M");
