// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Segmenter
description: Checks handling of valid values for the granularity option "word" when string text includes URLs, email addresses, #, Dates and acronyms
features: [Intl.Segmenter]
---*/

const testValuesByLength = [
  ["F.C.B", 1],
  ["F.C.BALL", 1],
  ["F.C. BALL", 4],
  ["Please P.T.O 123 times. 123.3242432", 10],
  ["at 12:43 PM", 7],
  ["in 21/03/2013.", 8],
  ["https://example.com/tc39/test262", 9],
  ["https://example.com/tc39/test262?id=test", 13],
  ["example.es , example.com they from era .com", 14],
  ["124.13 1231,23", 3],
  ["#test262, #TC39", 6],
  ["my@mail.com", 3],
  ["my@mail.com sending message to my@mail.org", 13],
  ["it's a @decorator", 6],
];

const testValuesByResult = [
  ["example.es", "example.es"],
  ["mail.com", "mail.com"],
  ["www.wikipedia.org", "www.wikipedia.org"],
];

// test word segmentation based on word count
function testSegmenterByExpectedLengths([value, expectedSize]) {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const segments = segmenter.segment(value);
  let actualSize = 0;
  for (s of segments) {
    actualSize++;
  }
  assert.sameValue(
    actualSize,
    expectedSize,
    `Assert segment count for the text string : ${value}"`
  );
}

// test word segmentation based on expected results
function testSegmenterByExpectedValues([value, expected]) {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
  const iterator = segmenter.segment(value)[Symbol.iterator]();
  assert.sameValue(iterator.next().value.segment, expected);
}

testValuesByLength.forEach(testSegmenterByExpectedLengths);
testValuesByResult.forEach(testSegmenterByExpectedValues);
