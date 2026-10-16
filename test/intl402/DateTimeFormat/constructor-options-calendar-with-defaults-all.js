// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.datetimeformat
description: Day, month, and year are honored when all three are specified
info: |
  11.1.1 Intl.DateTimeFormat ( [ locales [ , options ] ] )
  [...]
  2. Let dateTimeFormat be ? CreateDateTimeFormat(newTarget, locales, options, any, date).
  [...]

  11.1.2 CreateDateTimeFormat ( newTarget, locales, options, required, defaults )
  [...]
  31. Else,
      [...]
      e. For each property name propertyKey of propertyKeys, do
         i. Let value be formatOptions.[[<propertyKey>]].
         ii. If value is not undefined, set needDefaults to false.
      f. If needDefaults is true, then
         i. Let numericProperties be a new empty List.
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
  const options = new Intl.DateTimeFormat('en', {
    calendar, day: 'numeric', month: 'numeric', year: 'numeric'
  }).resolvedOptions();

  assert(
    ['2-digit', 'numeric'].indexOf(options.day) > -1,
    calendar + ': day (got "' + options.day + '")'
  );
  assert(
    ['2-digit', 'numeric', 'narrow', 'short', 'long'].indexOf(options.month) > -1,
    calendar + ': month (got "' + options.month + '")'
  );
  assert(
    ['2-digit', 'numeric'].indexOf(options.year) > -1,
    calendar + ': year (got "' + options.year + '")'
  );
}
