// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-duration-objects
description: min/max values
features: [Temporal]
---*/

var units = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds"
];

// minimum is zero
assert.sameValue(`${ new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 0) }`, "PT0S");
units.forEach(unit => assert.sameValue(`${ Temporal.Duration.from({ [unit]: 0 }) }`, "PT0S"));
[
  "P0Y",
  "P0M",
  "P0W",
  "P0D",
  "PT0H",
  "PT0M",
  "PT0S"
].forEach(str => assert.sameValue(`${ Temporal.Duration.from(str) }`, "PT0S"));

// unrepresentable number is not allowed
units.forEach((unit, ix) => {
  assert.throws(RangeError, () => new Temporal.Duration(...Array(ix).fill(0), 1e+400));
  assert.throws(RangeError, () => Temporal.Duration.from({ [unit]: 1e+400 }));
});
var manyNines = "9".repeat(309);
[
  `P${ manyNines }Y`,
  `P${ manyNines }M`,
  `P${ manyNines }W`,
  `P${ manyNines }D`,
  `PT${ manyNines }H`,
  `PT${ manyNines }M`,
  `PT${ manyNines }S`
].forEach(str => assert.throws(RangeError, () => Temporal.Duration.from(str)));

// max safe integer is allowed in calendar units and as seconds
[
  [0, "P9007199254740991Y"],
  [1, "P9007199254740991M"],
  [2, "P9007199254740991W"],
  [6, "PT9007199254740991S"],
].forEach(([ix, str]) => {
  assert.sameValue(`${ new Temporal.Duration(...Array(ix).fill(0), Number.MAX_SAFE_INTEGER) }`, str);
  assert.sameValue(`${ Temporal.Duration.from(str) }`, str);
});

// larger integers are allowed in calendar units but may lose precision
function test(ix, suffix) {
  function doAsserts(duration) {
    var str = duration.toString();
    assert.sameValue(str.slice(0, 11), "P1000000000");
    assert.sameValue(str.slice(-1), suffix);
    assert.sameValue(str.length, suffix.length + 28);
  }
  doAsserts(new Temporal.Duration(...Array(ix).fill(0), 1e+26, ...Array(9 - ix).fill(0)));
  doAsserts(Temporal.Duration.from({ [units[ix]]: 1e+26 }));
  doAsserts(Temporal.Duration.from(`P100000000000001000000000000${ suffix }`));
}
test(0, "Y");
test(1, "M");
test(2, "W");
