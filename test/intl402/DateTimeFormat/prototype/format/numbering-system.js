// Copyright 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-formatdatetimepattern
description: |
  Checks that numberingSystem property used correctly.
info: >
  11.5.5 FormatDateTimePattern ( dateTimeFormat, format, pattern, epochNanoseconds )
    ...
    3. Perform ! CreateDataPropertyOrThrow(nfOptions, "numberingSystem", dateTimeFormat.[[NumberingSystem]]).
    ...
    8. Perform ! CreateDataPropertyOrThrow(nf2Options, "numberingSystem", dateTimeFormat.[[NumberingSystem]]).
    ...
    11. If format has a field [[fractionalSecondDigits]], then
    ...
      d. Perform ! CreateDataPropertyOrThrow(nf3Options, "numberingSystem", dateTimeFormat.[[NumberingSystem]]).

locale: [en-US]
---*/

const localesAndResults = [
  [ "en-US", "2:35:06 AM", "2:35:06.789 AM", "02:35:06 AM", "6" ],
  [ "en-US-u-nu-arab", "٢:٣٥:٠٦ AM", "٢:٣٥:٠٦٫٧٨٩ AM", "٠٢:٣٥:٠٦ AM", "٦" ],
  [ "en-US-u-nu-deva", "२:३५:०६ AM", "२:३५:०६.७८९ AM", "०२:३५:०६ AM", "६" ],
  [ "en-US-u-nu-hanidec", "二:三五:〇六 AM", "二:三五:〇六.七八九 AM", "〇二:三五:〇六 AM", "六" ],
]
const time = new Date(2024, 0, 1, 2, 35, 6, 789);

for (const [locale, expectedNoFractional, expectedFractional, expectedTwoDigit, expectedAllNumeric] of localesAndResults) {
  const formattedNoFractional = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(time);

  const formattedFractional = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      fractionalSecondDigits: 3,
    }).format(time);

  const formattedTwoDigit = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);

  const formattedAllNumeric = new Intl.DateTimeFormat(locale, {
      second: "numeric",
    }).format(time);

  assert.sameValue(formattedNoFractional, expectedNoFractional, `${locale}: display without fractionalSecondDigits`);
  assert.sameValue(formattedFractional, expectedFractional, `${locale}: display with fractionalSecondDigits`);
  assert.sameValue(formattedTwoDigit, expectedTwoDigit, `${locale}: display all time units in 2-digit`);
  assert.sameValue(formattedAllNumeric, expectedAllNumeric, `${locale}: display one numeric-styled unit`);
}

