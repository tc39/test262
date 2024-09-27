// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-RegExp-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Back reference is actually a forwards reference. */
var re = /(\2(a)){2}/;
var str = 'aaa';
var actual = re.exec(str);
var expected = makeExpectedMatch(['aa', 'a', 'a'], 0, str);
checkRegExpMatch(actual, expected);

