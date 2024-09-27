// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is an Object, which has an own valueOf method
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
---*/

var fromIndex = {
  valueOf: function() {
    return 1;
  }
};


assert.sameValue(#[0, true].indexOf(true, fromIndex), 1, '#[0, true].indexOf(true, fromIndex)');

