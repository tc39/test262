// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Promise-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Bug 1646317 - Don't assert on stack overflow under Promise.any().

if ("ignoreUnhandledRejections" in this) {
  ignoreUnhandledRejections();
}

Array.prototype[Symbol.iterator] = function*() {
  let rejected = Promise.reject(0);
  let p = Promise.any([rejected]);
}
new Set(Object.keys(this));
new Set(Object.keys(this));

