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
// Sentence boundaries can be locale dependent. The following locales don't use
// any custom tailoring, so they should give the same results.
const locales = [
  "en", "de", "fr", "ar", "ja", "zh", "th",
];

let strings = {
  // Empty string
  "": [],

  // Ascii
  "This is an English sentence. And this is another one.": [
    "This is an English sentence. ",
    "And this is another one."
  ],
  "The colon: it doesn't start a new sentence.": [
    "The colon: it doesn't start a new sentence."
  ],

  // Latin-1
  "Unnötig umständlich Wörter überlegen. Und dann lästigerweise zu längeren Sätzen überarbeiten!": [
    "Unnötig umständlich Wörter überlegen. ",
    "Und dann lästigerweise zu längeren Sätzen überarbeiten!"
  ],

  // Two-Byte
  // Source: https://ja.wikipedia.org/wiki/Unicode
  "Unicode（ユニコード）は、符号化文字集合や文字符号化方式などを定めた、文字コードの業界規格。文字集合（文字セット）が単一の大規模文字セットであること（「Uni」という名はそれに由来する）などが特徴である。": [
    "Unicode（ユニコード）は、符号化文字集合や文字符号化方式などを定めた、文字コードの業界規格。",
    "文字集合（文字セット）が単一の大規模文字セットであること（「Uni」という名はそれに由来する）などが特徴である。"
  ],
};

function assertIsSegmentDataObject(obj) {
  // The prototype is %Object.prototype%.
  assert.sameValue(Object.getPrototypeOf(obj), Object.prototype);

  // The Segment Data object has exactly three own properties.
  let keys = Reflect.ownKeys(obj);
  assert.sameValue(keys.length, 3);
  assert.sameValue(keys[0], "segment");
  assert.sameValue(keys[1], "index");
  assert.sameValue(keys[2], "input");

  // Ensure each property has the correct value type.
  assert.sameValue(typeof obj.segment, "string");
  assert.sameValue(typeof obj.index, "number");
  assert.sameValue(typeof obj.input, "string");

  // |index| is an integer index into |string|.
  assert.sameValue(Number.isInteger(obj.index), true);
  assert.sameValue(obj.index >= 0, true);
  assert.sameValue(obj.index < obj.input.length, true);

  // Segments are non-empty.
  assert.sameValue(obj.segment.length > 0, true);

  // Ensure the segment is present in the input at the correct position.
  assert.sameValue(obj.input.substr(obj.index, obj.segment.length), obj.segment);
}

function segmentsFromContaining(segmenter, string) {
  let segments = segmenter.segment(string);

  let result = [];
  for (let index = 0, data; (data = segments.containing(index)); index += data.segment.length) {
    result.push(data);
  }
  return result;
}

for (let locale of locales) {
  let segmenter = new Intl.Segmenter(locale, {granularity: "sentence"});

  let resolved = segmenter.resolvedOptions();
  assert.sameValue(resolved.locale, locale);
  assert.sameValue(resolved.granularity, "sentence");

  for (let [string, sentences] of Object.entries(strings)) {
    let segments = [...segmenter.segment(string)];

    // Assert each segment is a valid Segment Data object.
    segments.forEach(assertIsSegmentDataObject);

    // Concatenating all segments should return the input.
    assert.sameValue(segments.reduce((acc, {segment}) => acc + segment, ""), string);

    // The "input" property matches the original input string.
    assert.sameValue(segments.every(({input}) => input === string), true);

    // The indices are sorted in ascending order.
    assert.sameValue(isNaN(segments.reduce((acc, {index}) => index > acc ? index : NaN, -Infinity)), false);

    // The computed segments match the expected value.
    assert.compareArray(segments.map(({segment}) => segment), sentences);

    // Segment iteration and %Segments.prototype%.containing return the same results.
    assert.deepEqual(segmentsFromContaining(segmenter, string), segments);
  }
}

// Sentence break suppressions through the "ss" Unicode extension key aren't supported.
{
  let segmenter = new Intl.Segmenter("en-u-ss-standard", {granularity: "sentence"});
  assert.sameValue(segmenter.resolvedOptions().locale, "en");

  let segments = [...segmenter.segment("Dr. Strange is a fictional character.")];
  assert.compareArray(segments.map(({segment}) => segment),
                ["Dr. ", "Strange is a fictional character."]);
}

// Locale-dependent sentence segmentation.
{
  // https://en.wikipedia.org/wiki/Greek_question_mark#Greek_question_mark
  let string1 = "Από πού είσαι; Τί κάνεις;";
  let string2 = string1.replaceAll(";", "\u037E"); // U+037E GREEK QUESTION MARK
  assert.sameValue(string1 !== string2, true);

  for (let string of [string1, string2]) {
    let english = new Intl.Segmenter("en", {granularity: "sentence"});
    let greek = new Intl.Segmenter("el", {granularity: "sentence"});

    // A single sentence in English.
    assert.sameValue([...english.segment(string)].length, 1);

    // But two sentences in Greek.
    //
    // ICU4X doesn't support locale-specific tailoring:
    // https://github.com/unicode-org/icu4x/issues/3284
    // assert.sameValue([...greek.segment(string)].length, 2);
  }
}

