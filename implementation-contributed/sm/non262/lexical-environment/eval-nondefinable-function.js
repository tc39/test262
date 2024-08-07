// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-lexical-environment-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/try {
  eval("var shouldNotBeDefined1; function NaN(){}; var shouldNotBeDefined2;");
} catch (e) {
}

assert.sameValue(Object.getOwnPropertyDescriptor(this, 'shouldNotBeDefined2'), undefined);
assert.sameValue(Object.getOwnPropertyDescriptor(this, 'shouldNotBeDefined1'), undefined);

