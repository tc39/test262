// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a number (value is -0)
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
---*/

assert.sameValue(#[true].indexOf(true, -0), 0, '#[true].indexOf(true, -0)');

