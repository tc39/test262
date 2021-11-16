// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: Rounding modes work as expected
includes: [testEach.js]
features: [Temporal]
---*/

const earlier = new Temporal.PlainYearMonth(2019, 1);
const later = new Temporal.PlainYearMonth(2021, 9);

testEach`
  roundingMode    | smallestUnit | expectedPositive | expectedNegative
  ${'halfExpand'} | ${'years'}   | ${'P3Y'}         | ${'-P3Y'}
  ${'halfExpand'} | ${'months'}  | ${'P2Y8M'}       | ${'-P2Y8M'}
  ${'ceil'}       | ${'years'}   | ${'P3Y'}         | ${'-P2Y'}
  ${'ceil'}       | ${'months'}  | ${'P2Y8M'}       | ${'-P2Y8M'}
  ${'floor'}      | ${'years'}   | ${'P2Y'}         | ${'-P3Y'}
  ${'floor'}      | ${'months'}  | ${'P2Y8M'}       | ${'-P2Y8M'}
  ${'trunc'}      | ${'years'}   | ${'P2Y'}         | ${'-P2Y'}
  ${'trunc'}      | ${'months'}  | ${'P2Y8M'}       | ${'-P2Y8M'}
`(({ roundingMode, smallestUnit, expectedPositive, expectedNegative }) => {

  const positiveDescription = `${roundingMode}, ${smallestUnit} rounds positive as expected`;
  const negativeDescription = `${roundingMode}, ${smallestUnit} rounds negative as expected`;

  const positiveComparison = later.since(earlier, { smallestUnit, roundingMode }).toString();
  const negativeComparison = earlier.since(later, { smallestUnit, roundingMode }).toString();

  assert.sameValue(positiveComparison, expectedPositive, positiveDescription);
  assert.sameValue(negativeComparison, expectedNegative, negativeDescription);
});
