// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  RegExp.prototype[@@replace] should call replacer function after collecting all matches.
esid: pending
---*/

var rx = RegExp("a", "g");
var r = rx[Symbol.replace]("abba", function() {
    rx.compile("b", "g");
    return "?";
});
assert.sameValue(r, "?bb?");

rx = RegExp("a", "g");
r = "abba".replace(rx, function() {
    rx.compile("b", "g");
    return "?";
});
assert.sameValue(r, "?bb?");
