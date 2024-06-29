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
// Grapheme boundaries are locale independent. Test with various locales to
// ensure we get the same results.
const locales = [
  "en", "de", "fr", "ar", "ja", "zh", "th",
];

let strings = {
  // Empty string
  "": [],

  // Ascii
  "test": "test".split(""),
  "hello world": "hello world".split(""),
  "hello\0world": "hello\0world".split(""),
  "\r\n": ["\r\n"],

  // Latin-1
  "äöü éèê µß \xff": "äöü éèê µß \xff".split(""),

  // Two-Byte
  "中文字": "中文字".split(""),

  // Grapheme Clusters: https://www.unicode.org/reports/tr29/#Table_Sample_Grapheme_Clusters
  "e\u0300": ["e\u0300"],
  "\u1100\u1161\u11A8": ["\u1100\u1161\u11A8"], // Hangul syllable "gag"
  "\u0E01\u0E33": ["\u0E01\u0E33"], // Thai kam
  "\u0937\u093F": ["\u0937\u093F"], // Devanagari ssi

  // Emojis
  "\u263A\uFE0F": ["\u263A\uFE0F"], // Variant selector
  "\u{1F385}\u{1F3FB}": ["\u{1F385}\u{1F3FB}"], // Skin tone selector
  "\u{1F469}\u{1F3FD}\u{200D}\u{1F52C}": ["\u{1F469}\u{1F3FD}\u{200D}\u{1F52C}"], // ZWJ
  "\u{1F469}\u{1F3FD}\u{200D}\u{1F52C}\u{FE0F}": ["\u{1F469}\u{1F3FD}\u{200D}\u{1F52C}\u{FE0F}"], // ZWJ + VS
  "\u{1F926}\u{1F3FC}\u{200D}\u{2642}\u{FE0F}": ["\u{1F926}\u{1F3FC}\u{200D}\u{2642}\u{FE0F}"], // ZWJ + VS with BMP modifier
  "\u{1F1E9}\u{1F1EA}": ["\u{1F1E9}\u{1F1EA}"], // Flags
  "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}": ["\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}"], // Subdivision flags
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
  let segmenter = new Intl.Segmenter(locale, {granularity: "grapheme"});

  let resolved = segmenter.resolvedOptions();
  assert.sameValue(resolved.locale, locale);
  assert.sameValue(resolved.granularity, "grapheme");

  for (let [string, graphemes] of Object.entries(strings)) {
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
    assert.compareArray(segments.map(({segment}) => segment), graphemes);

    // Segment iteration and %Segments.prototype%.containing return the same results.
    assert.deepEqual(segmentsFromContaining(segmenter, string), segments);
  }
}

