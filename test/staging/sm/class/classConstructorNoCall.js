// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
// Class constructors don't have a [[Call]]
class Foo {
    constructor() { }
}

assert.throws(TypeError, Foo);

class Bar extends Foo {
    constructor() { }
}

assert.throws(TypeError, Bar);

assert.throws(TypeError, class { constructor() { } });
assert.throws(TypeError, class extends Foo { constructor() { } });

assert.throws(TypeError, class foo { constructor() { } });
assert.throws(TypeError, class foo extends Foo { constructor() { } });

