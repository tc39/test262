// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: Checks handling of a null options argument to the DurationFormat constructor.
info: |
  1.2.1 Intl.DurationFormat ( [ locales [ , options ] ] )
    (...)
    17. For each row of Table 3, except the header row, in table order, do
      a. Let styleSlot be the Style Slot value of the current row.
      b. Let displaySlot be the Display Slot value of the current row.
      c. Let unit be the Unit value.
      d. Let valueList be the Values value.
      e. Let digitalBase be the Digital Default value.
      f. Let unitOptions be ? GetDurationUnitOptions(unit, options, style, valueList, digitalBase, prevStyle).
      
  GetDurationUnitOptions ( unit, options, baseStyle, stylesList, digitalBase, prevStyle )
    (...)
    6. If prevStyle is "numeric" or "2-digit", then
      a. If style is not "numeric" or "2-digit", then
          i. Throw a RangeError exception.
features: [Intl.DurationFormat]
---*/

/*

var durationUnits = ['minutes', 'seconds', 'milliseconds', 'microseconds'];
var duration = { hours: 1, minutes: 2, seconds: 3, milliseconds: 456, microseconds: 789, nanoseconds: 101};

for (var durationUnit of durationUnits){
  assert.throws(RangeError, function() {
    new Intl.DurationFormat(undefined, {style: "digital", [durationUnit]: "long"}.format(duration));
  });
}

*/

let timeUnits = ['minutes', 'seconds', 'milliseconds', 'microseconds'];

for (var timeUnit of timeUnits){
  assert.throws(RangeError, function() {
    new Intl.DurationFormat(undefined, {hours: "numeric", [timeUnit]: "long"}).format({hours: 1, minutes: 2, seconds: 3, milliseconds: 4, microseconds: 5, nanoseconds: 6});
  });
}
