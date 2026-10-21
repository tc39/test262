// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.datetimeformat
description: No defaults are set for day, month, and year when only year is specified
info: |
  11.1.1 Intl.DateTimeFormat ( [ locales [ , options ] ] )
  [...]
  2. Let dateTimeFormat be ? CreateDateTimeFormat(newTarget, locales, options, any, date).
  [...]

  11.1.2 CreateDateTimeFormat ( newTarget, locales, options, required, defaults )
  [...]
  31. Else,
      a. Let needDefaults be true.
      [...]
      e. For each property name propertyKey of propertyKeys, do
         i. Let value be formatOptions.[[<propertyKey>]].
         ii. If value is not undefined, set needDefaults to false.
      f. If needDefaults is true, then
         i. Let numericProperties be a new empty List.
         ii. If defaults is either date or all, set numericProperties to the
             list-concatenation of numericProperties and « "year", "month",
             "day" ».
         [...]
         iv. For each property name propertyKey of numericProperties, do
             1. Set formatOptions.[[<propertyKey>]] to "numeric".
      g. Let formats be resolvedLocaleData.[[formats]].[[<resolvedCalendar>]].
      h. If formatMatcher is "basic", let bestFormat be
         BasicFormatMatcher(formatOptions, formats); else let bestFormat be
         BestFitFormatMatcher(formatOptions, formats).
   [...]
includes: [testIntl.js]
locale: [en]
---*/

for (const calendar of allCalendars()) {
  const options = new Intl.DateTimeFormat('en', { calendar, year: 'numeric' }).resolvedOptions();

  assert.sameValue('day' in options, false, calendar + ': day');
  assert.sameValue('month' in options, false, calendar + ': month');
  assert(
    ['2-digit', 'numeric'].indexOf(options.year) > -1,
    calendar + ': year (got "' + options.year + '")'
  );
}
