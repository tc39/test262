// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - side effects produced by step 1 are visible when an exception occurs
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

var stepFiveOccurs = false;
var fromIndex = {
  valueOf: function() {
    stepFiveOccurs = true;
    return 0;
  }
};
assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(undefined, undefined, fromIndex);
}, TypeError);
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');

