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

var numericStyles = ['numeric', '2-digit'];

for (var style of numericStyles){
  assert.throws(RangeError, function() {
    new Intl.DurationFormat(undefined, { hours: style, minutes: "long"});
  });
  assert.throws(RangeError, function() {
    new Intl.DurationFormat(undefined, { minutes: style, milliseconds: "long"});
  });
}
