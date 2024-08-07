// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
- deepEqual.js
- non262-Intl-Segmenter-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// https://www.unicode.org/reports/tr29/#Sentence_Boundary_Rules

const strings = {
  // SB1, SB2
  "": [],

  // SB3
  "\r\n": ["\r\n"],

  // SB4
  "First paragraph.\nSecond paragraph.": ["First paragraph.\n", "Second paragraph."],
  "First paragraph.\rSecond paragraph.": ["First paragraph.\r", "Second paragraph."],
  "First paragraph.\r\nSecond paragraph.": ["First paragraph.\r\n", "Second paragraph."],
  "First paragraph.\x85Second paragraph.": ["First paragraph.\x85", "Second paragraph."],

  // SB5
  "\xADWo\xADrd\xAD.\xAD": ["\xADWo\xADrd\xAD.\xAD"],
  "Word.\n\xAD": ["Word.\n", "\xAD"],
  "Word.\r\xAD\n": ["Word.\r", "\xAD\n"],

  // SB6
  ".2": [".2"],
  "1.2": ["1.2"],
  "!2": ["!", "2"],
  "1!2": ["1!", "2"],

  // SB7
  "A.B": ["A.B"],
  "a.B": ["a.B"],
  "A. B": ["A. ", "B"],
  "a. B": ["a. ", "B"],

  // SB8
  "#.a": ["#.a"],
  "#. a": ["#. a"],
  "#. # a": ["#. # a"],
  "#. 1 a": ["#. 1 a"],
  "#. , a": ["#. , a"],
  "#. Aa": ["#. ", "Aa"],

  // SB8a
  "Word..": ["Word.."],
  "Word . , ": ["Word . , "],
  "Word.'\t , ": ["Word.'\t , "],

  // SB9, SB10, SB11
  "Word.''": ["Word.''"],
  "Word.'\t ": ["Word.'\t "],
  "Word.'\t \n": ["Word.'\t \n"],
};

function assertSegments(string, sentences) {
  let seg = segmenter.segment(string);
  let segments = [...seg];

  // The computed segments match the expected value.
  assert.compareArray(segments.map(({segment}) => segment), sentences);

  // |containing()| should return the same result.
  for (let expected of segments) {
    let {segment, index} = expected;
    for (let i = index; i < index + segment.length; ++i) {
      let actual = seg.containing(i);
      assert.deepEqual(actual, expected);
    }
  }
}

let segmenter = new Intl.Segmenter("en", {granularity: "sentence"});

for (let [string, words] of Object.entries(strings)) {
  assertSegments(string, words);
}

// Locale-dependent sentence segmentation.
{
  // https://en.wikipedia.org/wiki/Greek_question_mark#Greek_question_mark
  let string = "A sentence; semicolon separated.";

  let english = new Intl.Segmenter("en", {granularity: "sentence"});
  let greek = new Intl.Segmenter("el", {granularity: "sentence"});

  // A single sentence in English.
  assert.sameValue([...english.segment(string)].length, 1);

  // ICU4C: Two sentences in Greek.
  // assert.sameValue([...greek.segment(string)].length, 2);

  // ICU4X: A single sentence in Greek.
  assert.sameValue([...greek.segment(string)].length, 1);
}

