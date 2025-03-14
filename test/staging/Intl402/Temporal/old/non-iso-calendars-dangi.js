// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-intl
description: Non-ISO Calendars
features: [Temporal, Array.prototype.includes]
locale:
  - en-US-u-ca-dangi
---*/

var testChineseData = new Date("2001-02-01T00:00Z").toLocaleString("en-US-u-ca-chinese", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  era: "short",
  timeZone: "UTC"
});
var hasOutdatedChineseIcuData = !testChineseData.endsWith("2001");

// verify that Intl.DateTimeFormat.formatToParts output matches snapshot data
function compareFormatToPartsSnapshot(isoString, expected) {
  const date = new Date(isoString);
  Object.entries(expected).forEach(([calendar, expectedComponents]) => {
    const formatter = new Intl.DateTimeFormat(`en-US-u-ca-${calendar}`, { timeZone: "UTC" });
    const actualComponents = formatter.formatToParts(date);
    Object.entries(expectedComponents).forEach(([expectedType, expectedValue]) => {
      const part = actualComponents.find(({type}) => type === expectedType);
      const contextMessage = `${expectedType} component of ${isoString} formatted in ${calendar}`;
      assert.notSameValue(part, undefined, contextMessage);
      assert.sameValue(part.value, `${expectedValue}`, contextMessage);
    });
  });
}

compareFormatToPartsSnapshot("2000-01-01T00:00Z", {
  dangi: {
    relatedYear: 1999,
    month: 11,
    day: 25,
  },
});

compareFormatToPartsSnapshot("0001-01-01T00:00Z", {
  dangi: {
    relatedYear: 0,
    month: 11,
    day: 21,
  },
});

var fromWithCases = {
  dangi: {
    year2000: {
      year: 1999,
      month: 11,
      day: 25
    },
    year1: {
      year: 0,
      month: 12,
      monthCode: "M11",
      day: 21
    }
  },
};
for (var [id, tests] of Object.entries(fromWithCases)) {
  var dates = {
    year2000: Temporal.PlainDate.from("2000-01-01"),
    year1: Temporal.PlainDate.from("0001-01-01")
  };
  for (var [name, date] of Object.entries(dates)) {
    var values = tests[name];
    var errorExpected = values === RangeError;
    if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
      if (errorExpected) {
        assert.throws(RangeError, () => {
          var inCal = date.withCalendar(id);
          Temporal.PlainDate.from({
            calendar: id,
            year: inCal.year,
            day: inCal.day,
            monthCode: inCal.monthCode
          });
        });
      }
      var inCal = date.withCalendar(id);
      assert.sameValue(`${ name } ${ id } day: ${ inCal.day }`, `${ name } ${ id } day: ${ values.day }`);
      if (values.eraYear === undefined && values.era !== undefined)
        values.eraYear = values.year;
      assert.sameValue(`${ name } ${ id } eraYear: ${ inCal.eraYear }`, `${ name } ${ id } eraYear: ${ values.eraYear }`);
      assert.sameValue(`${ name } ${ id } era: ${ inCal.era }`, `${ name } ${ id } era: ${ values.era }`);
      assert.sameValue(`${ name } ${ id } year: ${ inCal.year }`, `${ name } ${ id } year: ${ values.year }`);
      assert.sameValue(`${ name } ${ id } month: ${ inCal.month }`, `${ name } ${ id } month: ${ values.month }`);
      if (values.monthCode === undefined)
        values.monthCode = `M${ values.month.toString().padStart(2, "0") }`;
      assert.sameValue(`${ name } ${ id } monthCode: ${ inCal.monthCode }`, `${ name } ${ id } monthCode: ${ values.monthCode }`);
      if (values.era) {
        var dateRoundtrip1 = Temporal.PlainDate.from({
          calendar: id,
          eraYear: values.eraYear,
          era: values.era,
          day: values.day,
          monthCode: values.monthCode
        });
        assert.sameValue(dateRoundtrip1.toString(), inCal.toString());
        assert.throws(RangeError, () => Temporal.PlainDate.from({
          calendar: id,
          eraYear: values.eraYear,
          era: values.era,
          day: values.day,
          monthCode: values.monthCode,
          year: values.year + 1
        }));
      }
      var dateRoundtrip2 = Temporal.PlainDate.from({
        calendar: id,
        year: values.year,
        day: values.day,
        monthCode: values.monthCode
      });
      assert.sameValue(dateRoundtrip2.toString(), inCal.toString());
      var dateRoundtrip3 = Temporal.PlainDate.from({
        calendar: id,
        year: values.year,
        day: values.day,
        month: values.month
      });
      assert.sameValue(dateRoundtrip3.toString(), inCal.toString());
      var dateRoundtrip4 = Temporal.PlainDate.from({
        calendar: id,
        year: values.year,
        day: values.day,
        monthCode: values.monthCode
      });
      assert.sameValue(dateRoundtrip4.toString(), inCal.toString());
      assert.throws(RangeError, () => Temporal.PlainDate.from({
        calendar: id,
        day: values.day,
        month: values.month === 1 ? 2 : values.month - 1,
        monthCode: values.monthCode,
        year: values.year
      }));
    };
    if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
      var inCal = date.withCalendar(id);
      if (errorExpected) {
        assert.throws(RangeError, () => inCal.with({ day: 1 }).year);
      }
      var afterWithDay = inCal.with({ day: 1 });
      var t = "(after setting day)";
      assert.sameValue(`${ t } year: ${ afterWithDay.year }`, `${ t } year: ${ inCal.year }`);
      assert.sameValue(`${ t } month: ${ afterWithDay.month }`, `${ t } month: ${ inCal.month }`);
      assert.sameValue(`${ t } day: ${ afterWithDay.day }`, `${ t } day: 1`);
      var afterWithMonth = afterWithDay.with({ month: 1 });
      t = "(after setting month)";
      assert.sameValue(`${ t } year: ${ afterWithMonth.year }`, `${ t } year: ${ inCal.year }`);
      assert.sameValue(`${ t } month: ${ afterWithMonth.month }`, `${ t } month: 1`);
      assert.sameValue(`${ t } day: ${ afterWithMonth.day }`, `${ t } day: 1`);
      var afterWithYear = afterWithMonth.with({ year: 2220 });
      t = "(after setting year)";
      assert.sameValue(`${ t } year: ${ afterWithYear.year }`, `${ t } year: 2220`);
      assert.sameValue(`${ t } month: ${ afterWithYear.month }`, `${ t } month: 1`);
      assert.sameValue(`${ t } day: ${ afterWithYear.day }`, `${ t } day: 1`);
    };
  }
}
var addDaysWeeksCases = {
  dangi: {
    year: 2000,
    month: 10,
    day: 16,
    monthCode: "M10",
    eraYear: undefined,
    era: undefined
  },
};
const addMonthsCases = {
  dangi: { year: 2001, month: 6, day: 1, monthCode: 'M05', eraYear: undefined, era: undefined },
};
var i = 0;
const addYearsMonthsDaysCases = Object.entries(addMonthsCases).reduce((obj, entry) => {
  obj[entry[0]] = entry[1] === RangeError ? RangeError : { ...entry[1], day: 18 };
  return obj;
}, {});
var tests = {
  days: {
    duration: { days: 280 },
    results: addDaysWeeksCases,
    startDate: {
      year: 2000,
      month: 1,
      day: 1
    }
  },
  weeks: {
    duration: { weeks: 40 },
    results: addDaysWeeksCases,
    startDate: {
      year: 2000,
      month: 1,
      day: 1
    }
  },
  months: {
    duration: { months: 6 },
    results: addMonthsCases,
    startDate: {
      year: 2000,
      month: 12,
      day: 1
    }
  },
  years: {
    duration: {
      years: 3,
      months: 6,
      days: 17
    },
    results: addYearsMonthsDaysCases,
    startDate: {
      year: 1997,
      monthCode: "M12",
      day: 1
    }
  }
};
for (var id of Object.keys(addMonthsCases)) {
  for (var [unit, {duration, results, startDate}] of Object.entries(tests)) {
    var values = results[id];
    duration = Temporal.Duration.from(duration);
    if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
      if (values === RangeError) {
        assert.throws(RangeError, () => Temporal.PlainDate.from({
          ...startDate,
          calendar: id
        }));
      }
      var start = Temporal.PlainDate.from({
        ...startDate,
        calendar: id
      });
      var end = start.add(duration);
      assert.sameValue(`add ${ unit } ${ id } day: ${ end.day }`, `add ${ unit } ${ id } day: ${ values.day }`);
      assert.sameValue(`add ${ unit } ${ id } eraYear: ${ end.eraYear }`, `add ${ unit } ${ id } eraYear: ${ values.eraYear }`);
      assert.sameValue(`add ${ unit } ${ id } era: ${ end.era }`, `add ${ unit } ${ id } era: ${ values.era }`);
      assert.sameValue(`add ${ unit } ${ id } year: ${ end.year }`, `add ${ unit } ${ id } year: ${ values.year }`);
      assert.sameValue(`add ${ unit } ${ id } month: ${ end.month }`, `add ${ unit } ${ id } month: ${ values.month }`);
      assert.sameValue(`add ${ unit } ${ id } monthCode: ${ end.monthCode }`, `add ${ unit } ${ id } monthCode: ${ values.monthCode }`);
      var calculatedStart = end.subtract(duration);
      var isLunisolar = [
        "chinese",
        "dangi",
        "hebrew"
      ].includes(id);
      var expectedCalculatedStart = isLunisolar && duration.years !== 0 && !end.monthCode.endsWith("L") ? start.subtract({ months: 1 }) : start;
      assert.sameValue(`start ${ calculatedStart.toString() }`, `start ${ expectedCalculatedStart.toString() }`);
      var diff = start.until(end, { largestUnit: unit });
      assert.sameValue(`diff ${ unit } ${ id }: ${ diff }`, `diff ${ unit } ${ id }: ${ duration }`);
      if (unit === "months") {
        var startYesterday = start.subtract({ days: 1 });
        var endYesterday = startYesterday.add(duration);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } day (initial): ${ endYesterday.day }`, `add from end-of-month ${ unit } ${ id } day (initial): ${ Math.min(startYesterday.day, endYesterday.daysInMonth) }`);
        var endYesterdayNextDay = endYesterday.add({ days: 1 });
        while (endYesterdayNextDay.day !== 1) {
          endYesterdayNextDay = endYesterdayNextDay.add({ days: 1 });
        }
        assert.sameValue(`add from end-of-month ${ unit } ${ id } day: ${ endYesterdayNextDay.day }`, `add from end-of-month ${ unit } ${ id } day: ${ values.day }`);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } eraYear: ${ endYesterdayNextDay.eraYear }`, `add from end-of-month ${ unit } ${ id } eraYear: ${ values.eraYear }`);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } era: ${ endYesterdayNextDay.era }`, `add from end-of-month ${ unit } ${ id } era: ${ values.era }`);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } year: ${ endYesterdayNextDay.year }`, `add from end-of-month ${ unit } ${ id } year: ${ values.year }`);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } month: ${ endYesterdayNextDay.month }`, `add from end-of-month ${ unit } ${ id } month: ${ values.month }`);
        assert.sameValue(`add from end-of-month ${ unit } ${ id } monthCode: ${ endYesterdayNextDay.monthCode }`, `add from end-of-month ${ unit } ${ id } monthCode: ${ values.monthCode }`);
        var endReverse = endYesterdayNextDay.subtract({ days: 1 });
        var startReverse = endReverse.subtract(duration);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } day (initial): ${ startReverse.day }`, `subtract from end-of-month ${ unit } ${ id } day (initial): ${ Math.min(endReverse.day, startReverse.daysInMonth) }`);
        var startReverseNextDay = startReverse.add({ days: 1 });
        while (startReverseNextDay.day !== 1) {
          startReverseNextDay = startReverseNextDay.add({ days: 1 });
        }
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } day: ${ startReverseNextDay.day }`, `subtract from end-of-month ${ unit } ${ id } day: ${ start.day }`);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } eraYear: ${ startReverseNextDay.eraYear }`, `subtract from end-of-month ${ unit } ${ id } eraYear: ${ start.eraYear }`);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } era: ${ startReverseNextDay.era }`, `subtract from end-of-month ${ unit } ${ id } era: ${ start.era }`);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } year: ${ startReverseNextDay.year }`, `subtract from end-of-month ${ unit } ${ id } year: ${ start.year }`);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } month: ${ startReverseNextDay.month }`, `subtract from end-of-month ${ unit } ${ id } month: ${ start.month }`);
        assert.sameValue(`subtract from end-of-month ${ unit } ${ id } monthCode: ${ startReverseNextDay.monthCode }`, `subtract from end-of-month ${ unit } ${ id } monthCode: ${ start.monthCode }`);
      }
    };
  }
}
var daysInMonthCases = {
  dangi: {
    year: 2001,
    leap: "M04L",
    days: [
      30,
      30,
      30,
      29,
      29,
      30,
      29,
      29,
      30,
      29,
      30,
      29,
      30
    ]
  },
};
for (var id of Object.keys(daysInMonthCases)) {
  var {year, leap, days} = daysInMonthCases[id];
  var date = hasOutdatedChineseIcuData && (id === "chinese" || id === "dangi") ? undefined : Temporal.PlainDate.from({
    year,
    month: 1,
    day: 1,
    calendar: id
  });
  if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
    if (typeof leap === "boolean") {
      assert.sameValue(date.inLeapYear, leap);
    } else {
      assert.sameValue(date.inLeapYear, true);
      var leapMonth = date.with({ monthCode: leap });
      assert.sameValue(leapMonth.monthCode, leap);
    }
  };
  if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
    var {monthsInYear} = date;
    assert.sameValue(monthsInYear, days.length);
    for (var i = monthsInYear, leapMonthIndex = undefined, monthStart = undefined; i >= 1; i--) {
      monthStart = monthStart ? monthStart.add({ months: -1 }) : date.add({ months: monthsInYear - 1 });
      var {month, monthCode, daysInMonth} = monthStart;
      assert.sameValue(`${ id } month ${ i } (code ${ monthCode }) days: ${ daysInMonth }`, `${ id } month ${ i } (code ${ monthCode }) days: ${ days[i - 1] }`);
      if (monthCode.endsWith("L")) {
        assert.sameValue(date.with({ monthCode }).monthCode, monthCode);
        leapMonthIndex = i;
      } else {
        if (leapMonthIndex && i === leapMonthIndex - 1) {
          var inLeapMonth = monthStart.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` });
          assert.sameValue(inLeapMonth.monthCode, `${ monthCode }L`);
        } else {
          assert.throws(RangeError, () => monthStart.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }, { overflow: "reject" }));
          if ([
              "chinese",
              "dangi"
            ].includes(id)) {
            if (i === 1 || i === 12 || i === 13) {
              assert.throws(RangeError, () => monthStart.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }));
            } else {
              var fakeL = monthStart.with({
                monthCode: `M${ month.toString().padStart(2, "0") }L`,
                day: 5
              });
              assert.sameValue(`fake leap month ${ fakeL.monthCode }`, `fake leap month M${ month.toString().padStart(2, "0") }`);
              assert.sameValue(fakeL.day, fakeL.daysInMonth);
            }
          }
        }
        if (![
            "chinese",
            "dangi",
            "hebrew"
          ].includes(id)) {
          assert.throws(RangeError, () => monthStart.with({ monthCode: `M${ month.toString().padStart(2, "0") }L` }));
        }
      }
      assert.throws(RangeError, () => monthStart.with({ day: daysInMonth + 1 }, { overflow: "reject" }));
      var oneDayPastMonthEnd = monthStart.with({ day: daysInMonth + 1 });
      assert.sameValue(oneDayPastMonthEnd.day, daysInMonth);
    }
  };
}
var monthDayCases = [
  {
    calendar: "dangi",
    isoReferenceYear: 1963,
    year: 2001,
    month: 5,
    monthCode: "M04L",
    day: 15
  },
  {
    calendar: "dangi",
    isoReferenceYear: 1971,
    year: 2000,
    month: 6,
    day: 30
  },
];
var i = 0;
for (var test of monthDayCases) {
  var id = test.calendar;
  if ((id === "chinese" || id === "dangi") && hasOutdatedChineseIcuData ) {
    if (test.monthCode === undefined)
      test.monthCode = `M${ test.month.toString().padStart(2, "0") }`;
    var {calendar, monthCode, month, day, year, isoReferenceYear} = test;
    var md = Temporal.PlainMonthDay.from({
      year,
      month,
      day,
      calendar
    });
    var isoString = md.toString();
    var mdFromIso = Temporal.PlainMonthDay.from(isoString);
    assert.sameValue(mdFromIso, md);
    var isoFields = md.getISOFields();
    assert.sameValue(md.monthCode, monthCode);
    assert.sameValue(md.day, day);
    assert.sameValue(isoFields.isoYear, isoReferenceYear);
    var md2 = Temporal.PlainMonthDay.from({
      monthCode,
      day,
      calendar
    });
    var isoFields2 = md2.getISOFields();
    assert.sameValue(md2.monthCode, monthCode);
    assert.sameValue(md2.day, day);
    assert.sameValue(isoFields2.isoYear, isoReferenceYear);
    assert.sameValue(md.equals(md2), true);
    assert.throws(RangeError, () => {
      Temporal.PlainMonthDay.from({
        monthCode: "M15",
        day: 1,
        calendar
      }, { overflow: "reject" });
    });
    assert.throws(RangeError, () => {
      Temporal.PlainMonthDay.from({
        monthCode: "M15",
        day: 1,
        calendar
      });
    });
    assert.throws(RangeError, () => {
      Temporal.PlainMonthDay.from({
        year,
        month: 15,
        day: 1,
        calendar
      }, { overflow: "reject" });
    });
    var constrained = Temporal.PlainMonthDay.from({
      year,
      month: 15,
      day: 1,
      calendar
    });
    var {monthCode: monthCodeConstrained} = constrained;
    assert(monthCodeConstrained === "M12" || monthCodeConstrained === "M13");
  };
}
