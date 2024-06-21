/*---
esid: sec-Intl.DurationFormat.prototype.format
description: |
  nfOptions.roundingMode for seconds / microseconds / nanoseconds should be "trunc"
info: |
  1.1.14 PartitionDurationFormatPattern
    (...)
    4. While numericUnitFound is false, repeat for each row in Table 2 in table order, except the header row:
      e. If style is "numeric" or "2-digit", then
        i. Append FormatNumericUnits(durationFormat, duration, unit, signDisplayed) to result.
        (...)
      f.Else,
        (...)
        ii. If unit is "seconds", "milliseconds", or "microseconds", then
          (...)
          f. Perform ! CreateDataPropertyOrThrow(nfOpts, "roundingMode", "trunc").

    1.1.12 FormatNumericUnits
      (...)
      18. If secondsFormatted is true, then
        a. Append FormatNumericSeconds(durationFormat, secondsValue, minutesFormatted, signDisplayed) to numericPartsList.
        (...)

    1.1.11 FormatNumericSeconds
      (...)
      15. Perform ! CreateDataPropertyOrThrow(nfOpts, "roundingMode", "trunc").
      (...)
locale: [en]
includes: [testIntl.js]
features: [Intl.DurationFormat]
---*/

const durations = [
  // 1
  {
    fractionalDigits: 0,
    duration: {
      seconds: 1,
      milliseconds: 500,
    },
  },
  // 0.001
  {
    fractionalDigits: 3,
    duration: {
      milliseconds: 1,
      microseconds: 500,
    }
  },
  // 0.000001
  {
    fractionalDigits: 6,
    duration: {
      microseconds: 1,
      nanoseconds: 500
    }
  }
];

for (const { fractionalDigits, duration } of durations) {
  const df = new Intl.DurationFormat("en", { seconds: "numeric", fractionalDigits });
  const expected = formatDurationFormatPattern(df, duration);
  assert.sameValue(df.format(duration), expected);
}
