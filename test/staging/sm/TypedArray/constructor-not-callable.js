// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-TypedArray-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
for (var constructor of anyTypedArrayConstructors) {
    assertThrowsInstanceOf(() => constructor(), TypeError);
    assertThrowsInstanceOf(() => constructor(1), TypeError);
    assertThrowsInstanceOf(() => constructor.call(null), TypeError);
    assertThrowsInstanceOf(() => constructor.apply(null, []), TypeError);
    assertThrowsInstanceOf(() => Reflect.apply(constructor, null, []), TypeError);
}

