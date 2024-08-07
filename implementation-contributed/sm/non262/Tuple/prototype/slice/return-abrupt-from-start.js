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
---*/
var o1 = { valueOf: function() { throw new SyntaxError(); } };
var o2 = { toString: function() { throw new SyntaxError(); } };

var sample = #[];

assertThrowsInstanceOf(() => sample.slice(o1),
                       SyntaxError, "valueOf throws");
assertThrowsInstanceOf(() => sample.slice(o2),
                       SyntaxError, "toString throws");

