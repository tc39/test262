// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  pending
esid: pending
---*/

class badBase {}
assert.throws(TypeError, badBase);

class badSub extends (class {}) {}
assert.throws(TypeError, badSub);

