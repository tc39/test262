// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  AsyncIterator constructor throws when called without new.

  AsyncIterator is not enabled unconditionally
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- async-iteration
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOf(() => AsyncIterator(), TypeError);

