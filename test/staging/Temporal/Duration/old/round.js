// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-duration-objects
description: Temporal.Duration.prototype.round() works as expected
features: [Temporal]
---*/

var d = new Temporal.Duration(5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
var d2 = new Temporal.Duration(0, 0, 0, 5, 5, 5, 5, 5, 5, 5);

// rounds to an increment of hours
assert.sameValue(`${ d.round({
  smallestUnit: "hours",
  roundingIncrement: 3,
  relativeTo
}) }`, "P5Y6M10DT6H");

// rounds to an increment of minutes
assert.sameValue(`${ d.round({
  smallestUnit: "minutes",
  roundingIncrement: 30,
  relativeTo
}) }`, "P5Y6M10DT5H");

// rounds to an increment of seconds
assert.sameValue(`${ d.round({
  smallestUnit: "seconds",
  roundingIncrement: 15,
  relativeTo
}) }`, "P5Y6M10DT5H5M");

// rounds to an increment of milliseconds
assert.sameValue(`${ d.round({
  smallestUnit: "milliseconds",
  roundingIncrement: 10,
  relativeTo
}) }`, "P5Y6M10DT5H5M5.01S");

// rounds to an increment of microseconds
assert.sameValue(`${ d.round({
  smallestUnit: "microseconds",
  roundingIncrement: 10,
  relativeTo
}) }`, "P5Y6M10DT5H5M5.00501S");

// rounds to an increment of nanoseconds
assert.sameValue(`${ d.round({
  smallestUnit: "nanoseconds",
  roundingIncrement: 10,
  relativeTo
}) }`, "P5Y6M10DT5H5M5.00500501S");

// valid hour increments divide into 24
[
  1,
  2,
  3,
  4,
  6,
  8,
  12
].forEach(roundingIncrement => {
  var options = {
    smallestUnit: "hours",
    roundingIncrement,
    relativeTo
  };
  assert(d.round(options) instanceof Temporal.Duration);
});
[
  "minutes",
  "seconds"
].forEach(smallestUnit => {
  // valid minutes/seconds increments divide into 60
    [
      1,
      2,
      3,
      4,
      5,
      6,
      10,
      12,
      15,
      20,
      30
    ].forEach(roundingIncrement => {
      var roundTo = {
        smallestUnit,
        roundingIncrement,
        relativeTo
      };
      assert(d.round(roundTo) instanceof Temporal.Duration);
    });
  });
[
  "milliseconds",
  "microseconds",
  "nanoseconds"
].forEach(smallestUnit => {
  // valid milliseconds/microseconds/nanoseconds increments divide into 1000
    [
      1,
      2,
      4,
      5,
      8,
      10,
      20,
      25,
      40,
      50,
      100,
      125,
      200,
      250,
      500
    ].forEach(roundingIncrement => {
      var roundTo = {
        smallestUnit,
        roundingIncrement,
        relativeTo
      };
      assert(d.round(roundTo) instanceof Temporal.Duration);
    });
  });

// throws on increments that do not divide evenly into the next highest
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "hours",
  roundingIncrement: 11
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "minutes",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "seconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "milliseconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "microseconds",
  roundingIncrement: 29
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "nanoseconds",
  roundingIncrement: 29
}));

// throws on increments that are equal to the next highest
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "hours",
  roundingIncrement: 24
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "minutes",
  roundingIncrement: 60
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "seconds",
  roundingIncrement: 60
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "milliseconds",
  roundingIncrement: 1000
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "microseconds",
  roundingIncrement: 1000
}));
assert.throws(RangeError, () => d.round({
  relativeTo,
  smallestUnit: "nanoseconds",
  roundingIncrement: 1000
}));

// accepts singular units
assert.sameValue(`${ d.round({
  largestUnit: "year",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "years",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "year",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "years",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "month",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "months",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "month",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "months",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "day",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "days",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "day",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "days",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "hour",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "hours",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "hour",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "hours",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "minute",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "minutes",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "minute",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "minutes",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "second",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "seconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "second",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "seconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "millisecond",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "milliseconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "millisecond",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "milliseconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "microsecond",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "microseconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "microsecond",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "microseconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  largestUnit: "nanosecond",
  relativeTo
}) }`, `${ d.round({
  largestUnit: "nanoseconds",
  relativeTo
}) }`);
assert.sameValue(`${ d.round({
  smallestUnit: "nanosecond",
  relativeTo
}) }`, `${ d.round({
  smallestUnit: "nanoseconds",
  relativeTo
}) }`);

// counts the correct number of days when rounding relative to a date
var days = Temporal.Duration.from({ days: 45 });
assert.sameValue(`${ days.round({
  relativeTo: "2019-01-01",
  smallestUnit: "months"
}) }`, "P2M");
assert.sameValue(`${ days.negated().round({
  relativeTo: "2019-02-15",
  smallestUnit: "months"
}) }`, "-P1M");
var yearAndHalf = Temporal.Duration.from({
  days: 547,
  hours: 12
});
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2018-01-01",
  smallestUnit: "years"
}) }`, "P2Y");
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2018-07-01",
  smallestUnit: "years"
}) }`, "P1Y");
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2019-01-01",
  smallestUnit: "years"
}) }`, "P1Y");
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2019-07-01",
  smallestUnit: "years"
}) }`, "P1Y");
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2020-01-01",
  smallestUnit: "years"
}) }`, "P1Y");
assert.sameValue(`${ yearAndHalf.round({
  relativeTo: "2020-07-01",
  smallestUnit: "years"
}) }`, "P2Y");
