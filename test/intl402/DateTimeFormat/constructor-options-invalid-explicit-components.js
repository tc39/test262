// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-createdatetimeformat
description: >
  Verifies that constructor throws when dateStyle is combined with explicit format components.
info: |
    InitializeDateTimeFormat ( dateTimeFormat, locales, options )
    ...
    39. Let dateStyle be ? GetOption(options, "dateStyle", string, « "full", "long", "medium", "short" », undefined).
    40. Set dateTimeFormat.[[DateStyle]] to dateStyle.
    41. Let timeStyle be ? GetOption(options, "timeStyle", string, « "full", "long", "medium", "short" », undefined).
    42. Set dateTimeFormat.[[TimeStyle]] to timeStyle.
    43. If dateStyle is not undefined or timeStyle is not undefined, then

        a. If hasExplicitFormatComponents is true, then
            i. Throw a TypeError exception.
        b. If required is date and timeStyle is not undefined, then
            i. Throw a TypeError exception.
        c. If required is time and dateStyle is not undefined, then
            i. Throw a TypeError exception.
        d. Let styles be dataLocaleData.[[styles]].[[<resolvedCalendar>]].
        e. Let bestFormat be DateTimeStyleFormat(dateStyle, timeStyle, styles).
---*/

function optionsThrow(options, testName){
  assert.throws(TypeError, function() {
    new Intl.DateTimeFormat(undefined, options);
  }, testName + ":");
}

optionsThrow({dateStyle: "full", era: "long"}, "dateStyle-era");
optionsThrow({dateStyle: "full", year: "numeric"}, "dateStyle-year");
optionsThrow({dateStyle: "full", month: "numeric"}, "dateStyle-month");
optionsThrow({dateStyle: "full", day: "numeric"}, "dateStyle-day");
optionsThrow({dateStyle: "full", dayPeriod: "long"}, "dateStyle-dayPeriod");
optionsThrow({dateStyle: "full", hour: "numeric"}, "dateStyle-hour");
optionsThrow({dateStyle: "full", minute: "numeric"}, "dateStyle-minute");
optionsThrow({dateStyle: "full", second: "numeric"}, "dateStyle-second");
optionsThrow({dateStyle: "full", fractionalSecondDigits: 1}, "dateStyle-fractionalSecondDigits");
optionsThrow({dateStyle: "full", timeZoneName: "short"}, "dateStyle-timeZoneName");


optionsThrow({timeStyle: "full", era: "long"}, "timeStyle-era");
optionsThrow({timeStyle: "full", year: "numeric"}, "timeStyle-year");
optionsThrow({timeStyle: "full", month: "numeric"}, "timeStyle-month");
optionsThrow({timeStyle: "full", day: "numeric"}, "timeStyle-day");
optionsThrow({timeStyle: "full", dayPeriod: "long"}, "timeStyle-dayPeriod");
optionsThrow({timeStyle: "full", hour: "numeric"}, "timeStyle-hour");
optionsThrow({timeStyle: "full", minute: "numeric"}, "timeStyle-minute");
optionsThrow({timeStyle: "full", second: "numeric"}, "timeStyle-second");
optionsThrow({timeStyle: "full", fractionalSecondDigits: 1}, "timeStyle-fractionalSecondDigits");
optionsThrow({timeStyle: "full", timeZoneName: "short"}, "timeStyle-timeZoneName");
