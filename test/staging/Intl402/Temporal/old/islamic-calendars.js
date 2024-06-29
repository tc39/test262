// Copyright (C) 2023 Justin Grant. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-intl
description: Islamic calendars (note there are 6 variants)
features: [Temporal]
---*/

// Test data obtained from ICU

const tests = [
  {
    calendar: "islamic",
    choices: [
      // Approximations of the observational Islamic calendar as computed by ICU4C.
      {
        inLeapYear: false,
        daysInYear: 354,
        daysInMonth12: 29,
        isoYear: 2023,
        isoMonth: 7,
        isoDay: 18
      },

      // Approximations of the observational Islamic calendar as computed by ICU4X.
      {
        inLeapYear: true,
        daysInYear: 355,
        daysInMonth12: 30,
        isoYear: 2023,
        isoMonth: 7,
        isoDay: 19
      }
    ],
  },
  {
    calendar: "islamic-umalqura",
    inLeapYear: false,
    daysInYear: 354,
    daysInMonth12: 30,
    isoYear: 2023,
    isoMonth: 7,
    isoDay: 19
  },
  {
    calendar: "islamic-civil",
    inLeapYear: true,
    daysInYear: 355,
    daysInMonth12: 30,
    isoYear: 2023,
    isoMonth: 7,
    isoDay: 19
  },
  {
    calendar: "islamicc", // deprecated version of islamic-civil
    inLeapYear: true,
    daysInYear: 355,
    daysInMonth12: 30,
    isoYear: 2023,
    isoMonth: 7,
    isoDay: 19
  },
  {
    calendar: "islamic-rgsa",
    choices: [
      // Approximations of the observational Islamic calendar as computed by ICU4C.
      {
        inLeapYear: false,
        daysInYear: 354,
        daysInMonth12: 29,
        isoYear: 2023,
        isoMonth: 7,
        isoDay: 18
      },

      // Approximations of the observational Islamic calendar as computed by ICU4X.
      {
        inLeapYear: true,
        daysInYear: 355,
        daysInMonth12: 30,
        isoYear: 2023,
        isoMonth: 7,
        isoDay: 19
      }
    ],
  },
  {
    calendar: "islamic-tbla",
    inLeapYear: true,
    daysInYear: 355,
    daysInMonth12: 30,
    isoYear: 2023,
    isoMonth: 7,
    isoDay: 18
  }
];

for (const test of tests) {
  const { calendar, choices = [test] } = test;
  const year = 1445;
  const date = Temporal.PlainDate.from({ year, month: 1, day: 1, calendar });
  const isoFields = date.getISOFields();
  if (calendar !== "islamicc") {
    assert.sameValue(date.calendarId, calendar);
  } else {
    // TODO: Steps to canonicalize the calendar identifier are still missing.
    // https://github.com/tc39/ecma402/issues/828
  }
  assert.sameValue(date.year, year);
  assert.sameValue(date.month, 1);
  assert.sameValue(date.monthCode, "M01");
  assert.sameValue(date.day, 1);

  // Match the possible choice by comparing the ISO month and day values.
  const choice = choices.find(({ isoMonth, isoDay }) => {
    return isoFields.isoMonth === isoMonth && isoFields.isoDay === isoDay;
  });
  assert(choice !== undefined, `No applicable choice found for calendar: ${calendar}`);

  const { inLeapYear, daysInYear, daysInMonth12, isoYear, isoMonth, isoDay } = choice;

  assert.sameValue(date.inLeapYear, inLeapYear);
  assert.sameValue(date.daysInYear, daysInYear);
  assert.sameValue(date.monthsInYear, 12);
  assert.sameValue(date.dayOfYear, 1);
  const startOfNextYear = date.with({ year: year + 1 });
  const lastDayOfThisYear = startOfNextYear.subtract({ days: 1 });
  assert.sameValue(lastDayOfThisYear.dayOfYear, daysInYear);
  const dateMonth12 = date.with({ month: 12 });
  assert.sameValue(dateMonth12.daysInMonth, daysInMonth12);
  assert.sameValue(isoYear, isoFields.isoYear);
  assert.sameValue(isoMonth, isoFields.isoMonth);
  assert.sameValue(isoDay, isoFields.isoDay);
}
