// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Number field names.
class C {
    128 = class {};
}
assert.sameValue(new C()[128].name, "128");

// Bigint field names.
class D {
    128n = class {};
}
assert.sameValue(new D()[128].name, "128");

