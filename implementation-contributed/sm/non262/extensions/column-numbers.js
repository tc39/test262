// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/actual   = 'No Error';
expected = /column-numbers\.js:4:11/;
try {
    throw new Error("test");
}
catch(ex) {
    actual = ex.stack;
    print('Caught exception ' + ex.stack);
}
reportMatch(expected, actual, 'column number present');
