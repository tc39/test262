// Copyright 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializedatetimeformat
description: Checks basic handling of dayPeriod, short format.
features: [Intl.DateTimeFormat-dayPeriod]
locale: [en]
---*/

// Each expected dayPeriod value must be a) contiguous, and
// b) represented in sequence.
var expectedDayPeriods = [
  'in the morning',
  'noon',
  'in the afternoon',
  'in the evening',
  'at night'
];

const formatter = new Intl.DateTimeFormat('en', {
  dayPeriod: 'short'
});
const numericFormatter = new Intl.DateTimeFormat('en', {
  dayPeriod: 'short',
  hour: 'numeric'
});

var actualDayPeriods = [];
for (var h = 0; h < 24; h++) {
  var input = new Date(2017, 11, 12, h, 0, 0, 0);
  var dayPeriod = formatter.format(input);

  // Ensure any dayPeriod result is in the list of expected dayPeriods.
  assert.notSameValue(
    expectedDayPeriods.indexOf(dayPeriod), -1,
    'unexpected dayPeriod result: ' + dayPeriod);

  actualDayPeriods.push(dayPeriod);

  assert.sameValue(
    numericFormatter.format(input),
    // Hour "00" is represented as "12".
    ((h % 12) || 12) + ' ' + dayPeriod,
    'numeric hour must precede dayPeriod');
}

assert.sameValue(actualDayPeriods.length, 24);

// Ensure all expected dayPeriods have occurred.
for (var index = 0; index < expectedDayPeriods.length; index++) {
  assert.notSameValue(actualDayPeriods.indexOf(expectedDayPeriods[index]), -1,
    'missed dayPeriod result: ' + expectedDayPeriods[index]);
}

// Ensure all transitions are valid.
for (var h = 1; h < 24; h++) {
  if (actualDayPeriods[h] !== actualDayPeriods[h - 1]) {
    var currentIndex = expectedDayPeriods.indexOf(actualDayPeriods[h]);
    var previousIndex = expectedDayPeriods.indexOf(actualDayPeriods[h - 1]);

    // The previous-index plus one matches the current index, possibly by
    // wrapping around.
    assert.sameValue(
      currentIndex,
      (previousIndex + 1) % expectedDayPeriods.length
    );
  }
}
