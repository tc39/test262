// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  AsyncIterator constructor throws when called without new.

    AsyncIterator is not enabled unconditionally
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/

assertThrowsInstanceOf(() => AsyncIterator(), TypeError);

