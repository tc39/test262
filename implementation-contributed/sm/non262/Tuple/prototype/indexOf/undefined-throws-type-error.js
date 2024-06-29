// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf applied to undefined throws a TypeError
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


assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(undefined);
}, TypeError);

assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(null);
}, TypeError);

