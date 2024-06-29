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

// Sort first by block and then by radical-stroke inside each block.
// This matches the ICU/ICU4X implicithan root order, which is used
// by Chrome as of October 2022. (As of October 2022, Safari uses
// the unihan root order, which uses more data but uses radical-stroke
// across blocks.)
const byBlock = ['假', '凷', '㑧', '㓙', '𠇲', '𠙶'];

scrambled.sort(new Intl.Collator().compare);
assert.compareArray(scrambled, byBlock);

