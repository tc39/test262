// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Number-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

assertThrowsInstanceOf(function() { eval('let a = 100_00_;'); }, SyntaxError);
assertThrowsInstanceOf(() => eval("let b = 10__;"), SyntaxError);
assertThrowsInstanceOf(() => eval("let b = 1._2;"), SyntaxError);

