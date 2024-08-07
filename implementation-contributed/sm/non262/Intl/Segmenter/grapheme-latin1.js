// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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
// CRLF should be the only compound grapheme for Latin-1 strings.

let segmenter = new Intl.Segmenter("en", {granularity: "grapheme"});

for (let i = 0; i <= 0xff; ++i) {
  for (let j = 0; j <= 0xff; ++j) {
    let string = String.fromCodePoint(i, j);
    let segments = segmenter.segment(string);

    let data1 = segments.containing(0);
    let data2 = segments.containing(1);
    let graphemes = [...segments];

    if (i === "\r".charCodeAt(0) && j === "\n".charCodeAt(0)) {
      assert.sameValue(data1.index, 0);
      assert.sameValue(data1.segment, "\r\n");

      assert.sameValue(data2.index, 0);
      assert.sameValue(data2.segment, "\r\n");

      assert.sameValue(graphemes.length, 1);
    } else {
      assert.sameValue(data1.index, 0);
      assert.sameValue(data1.segment, String.fromCodePoint(i));

      assert.sameValue(data2.index, 1);
      assert.sameValue(data2.segment, String.fromCodePoint(j));

      assert.sameValue(graphemes.length, 2);
    }
  }
}

