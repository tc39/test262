// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
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
const fn = x => x;

function check(x) {
  AsyncIterator.prototype.find.call(x, fn).then(
    () => assert.sameValue(true, false, 'expected error'),
    err => {
      assert.sameValue(err instanceof TypeError, true);
    }
  );
}

check();
check(undefined);
check({});
check({next: 0});

