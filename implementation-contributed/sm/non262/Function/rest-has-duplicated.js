// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Make sure duplicated name is allowed in non-strict.
function f0(a, a) {
}

// SyntaxError should be thrown if rest parameter name is duplicated.
assertThrowsInstanceOf(() => eval(`
function f1(a, ...a) {
}
`), SyntaxError);

// SyntaxError should be thrown if there is a duplicated parameter.
assertThrowsInstanceOf(() => eval(`
function f2(a, a, ...b) {
}
`), SyntaxError);

