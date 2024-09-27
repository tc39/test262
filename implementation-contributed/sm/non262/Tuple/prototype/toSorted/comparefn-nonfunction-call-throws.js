// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*//*
  1. If _comparefn_ is not *undefined* and IsCallable(_comparefn_) is *false*, throw a *TypeError* exception.
  ...
*/

let sample = #[42, 43, 44, 45, 46];

let compareFnVals = [[null, "null"],
                     [true, "true"],
                     [false, "false"],
                     ['', "\'\'"],
                     [/a/g, "/a/g"],
                     [42, "42"],
                     [[], "[]"],
                     [{}, "{}"]];

for (pair of compareFnVals) {
    f = pair[0];
    errorMsg = "comparefn is: " + pair[1];
    assertThrowsInstanceOf(() => sample.withSorted(f),
                           TypeError, errorMsg);
}

