// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-PrivateName-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/
class A {
  #x = 14;
  g() {
    return eval('this.#x');
  }
}

a = new A;
assert.sameValue(a.g(), 14);

