// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf uses inherited valueOf method when value of 'fromIndex' is an object with an own toString and inherited valueOf methods
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
---*/

var toStringAccessed = false;
var valueOfAccessed = false;

var proto = {
  valueOf: function() {
    valueOfAccessed = true;
    return 1;
  }
};

var Con = function() {};
Con.prototype = proto;

var child = new Con();
child.toString = function() {
  toStringAccessed = true;
  return 2;
};

assert.sameValue(#[0, true].indexOf(true, child), 1, '[0, true].indexOf(true, child)');
assert.sameValue(valueOfAccessed, true);
assert.sameValue(toStringAccessed, false, 'toStringAccessed');

