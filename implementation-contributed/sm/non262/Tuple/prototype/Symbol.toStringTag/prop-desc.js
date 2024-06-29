// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


// Copyright (C) 2016 the V8 project authors. All rights reserved.
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

var TuplePrototype = Tuple.prototype;
var desc = Object.getOwnPropertyDescriptor(
  TuplePrototype, Symbol.toStringTag
);

assert.sameValue(desc.value, "Tuple");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(desc.set, undefined);
assert.sameValue(desc.get, undefined);

