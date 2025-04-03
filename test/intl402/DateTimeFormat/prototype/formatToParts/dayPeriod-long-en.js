// Copyright 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-createdatetimeformat
description: Checks basic handling of dayPeriod, long format.
features: [Intl.DateTimeFormat-dayPeriod]
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

const formatter = new Intl.DateTimeFormat('en', { dayPeriod: 'long' });

function assertParts(parts, message) {
  assert.sameValue(parts.length, 1, `length should be 1, ${message}`);
  assert.sameValue(parts[0].type, 'dayPeriod', `part type is dayPeriod. ${message}`);
}

const numericFormatter = new Intl.DateTimeFormat('en', {
  dayPeriod: 'long',
  hour: 'numeric'
});

function assertPartsNumeric(parts, hour, expected, message) {
  assert.sameValue(parts.length, 3, `length should be 3, ${message}`);
  assert.sameValue(parts[0].value, hour, `hour part value. ${message}`);
  assert.sameValue(parts[0].type, 'hour', `hour part type. ${message}`);
  assert.sameValue(parts[1].value, ' ', `literal part value. ${message}`);
  assert.sameValue(parts[1].type, 'literal', `literal part type. ${message}`);
  assert.sameValue(parts[2].value, expected, `expected part value. ${message}`);
  assert.sameValue(parts[2].type, 'dayPeriod', `expected part type. ${message}`);
}

var actualDayPeriods = [];
for (var h = 0; h < 24; h++) {
  var input = new Date(2017, 11, 12, h, 0, 0, 0);
  var parts = formatter.formatToParts(input);
  assertParts(parts, 'dayPeriod must appear as a single part');
  var dayPeriod = parts[0].value;

  // Ensure any dayPeriod result is in the list of expected dayPeriods.
  assert.notSameValue(
    expectedDayPeriods.indexOf(dayPeriod), -1,
    'unexpected dayPeriod result: ' + dayPeriod);

  actualDayPeriods.push(dayPeriod);

  var partsNumeric = numericFormatter.formatToParts(input);
  assertPartsNumeric(partsNumeric, String((h % 12) || 12), dayPeriod, 'numeric hour must precede dayPeriod');
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
