// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-class-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Class constructors don't have a [[Call]]
class Foo {
    constructor() { }
}

assertThrowsInstanceOf(Foo, TypeError);

class Bar extends Foo {
    constructor() { }
}

assertThrowsInstanceOf(Bar, TypeError);

assertThrowsInstanceOf(class { constructor() { } }, TypeError);
assertThrowsInstanceOf(class extends Foo { constructor() { } }, TypeError);

assertThrowsInstanceOf(class foo { constructor() { } }, TypeError);
assertThrowsInstanceOf(class foo extends Foo { constructor() { } }, TypeError);

