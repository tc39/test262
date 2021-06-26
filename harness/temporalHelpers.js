// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    This defines helper objects and functions for testing Temporal.
defines: [TemporalHelpers]
features: [Symbol.species, Symbol.iterator, Temporal]
---*/

var TemporalHelpers = {
  /*
   * Check that any calendar-carrying Temporal object has its [[Calendar]]
   * internal slot read by ToTemporalCalendar, and does not fetch the calendar
   * by calling getters.
   * The custom calendar object is passed in to func() so that it can do its
   * own additional assertions involving the calendar if necessary. (Sometimes
   * there is nothing to assert as the calendar isn't stored anywhere that can
   * be asserted about.)
   */
  checkToTemporalCalendarFastPath(func) {
    class CalendarFastPathCheck extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      toString() {
        return "fast-path-check";
      }
    }
    const calendar = new CalendarFastPathCheck();

    const plainDate = new Temporal.PlainDate(2000, 5, 2, calendar);
    const plainDateTime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321, calendar);
    const plainMonthDay = new Temporal.PlainMonthDay(5, 2, calendar);
    const plainYearMonth = new Temporal.PlainYearMonth(2000, 5, calendar);
    const zonedDateTime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", calendar);

    [plainDate, plainDateTime, plainMonthDay, plainYearMonth, zonedDateTime].forEach((temporalObject) => {
      const actual = [];
      const expected = [];

      Object.defineProperty(temporalObject, "calendar", {
        get() {
          actual.push("get calendar");
          return calendar;
        },
      });

      func(temporalObject, calendar);
      assert.compareArray(actual, expected, "calendar getter not called");
    });
  },

  /*
   * specificOffsetTimeZone():
   *
   * This returns an instance of a custom time zone class, which returns a
   * specific custom value from its getOffsetNanosecondsFrom() method. This is
   * for the purpose of testing the validation of what this method returns.
   *
   * It also returns an empty array from getPossibleInstantsFor(), so as to
   * trigger calls to getOffsetNanosecondsFor() when used from the
   * BuiltinTimeZoneGetInstantFor operation.
   */
  specificOffsetTimeZone(offsetValue) {
    class SpecificOffsetTimeZone extends Temporal.TimeZone {
      constructor(offsetValue) {
        super("UTC");
        this._offsetValue = offsetValue;
      }

      getOffsetNanosecondsFor() {
        return this._offsetValue;
      }

      getPossibleInstantsFor() {
        return [];
      }
    }
    return new SpecificOffsetTimeZone(offsetValue);
  },
};
