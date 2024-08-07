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
// Test fails in ASan builds when ubrk_refreshUText isn't called.

let string = "A. ";

let segmenter = new Intl.Segmenter(undefined, {granularity: "sentence"});
let segments = segmenter.segment(string.repeat(100));

for (let {segment} of segments) {
  assert.sameValue(segment, string);
}

