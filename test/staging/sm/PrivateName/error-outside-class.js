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

// Can't reference a private field without an object
assertThrowsInstanceOf(() => eval('#x'), SyntaxError);

// Can't reference a private field without an enclosing class
assertThrowsInstanceOf(() => eval('this.#x'), SyntaxError);

// Can't reference a private field in a random function outside a class context
assertThrowsInstanceOf(
    () => eval('function foo() { return this.#x'), SyntaxError);


