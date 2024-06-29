// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
- non262-Intl-Collator-shell.js
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
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

let scrambled = ['𠙶', '𠇲', '㓙', '㑧', '假', '凷'];

// Root or pinyin
const fallback = ["假", "凷", "㑧", "㓙", "𠇲", "𠙶"];

scrambled.sort(new Intl.Collator("zh-u-co-big5han").compare);
assert.compareArray(scrambled, fallback);

scrambled.sort(new Intl.Collator("zh-u-co-gb2312").compare);
assert.compareArray(scrambled, fallback);

assert.sameValue(new Intl.Collator("zh-u-co-big5han").resolvedOptions().collation, "default");
assert.sameValue(new Intl.Collator("zh-u-co-gb2312").resolvedOptions().collation, "default");

assert.sameValue(Intl.supportedValuesOf("collation").includes("big5han"), false);
assert.sameValue(Intl.supportedValuesOf("collation").includes("gb2312"), false);

