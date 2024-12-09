// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- async-iteration
description: |
  pending
esid: pending
---*/

const fn = x => x;

function check(x) {
  AsyncIterator.prototype.every.call(x, fn).then(
    () => {
      throw new Error('check should have been rejected');
    },
    err => {
      assert.sameValue(err instanceof TypeError, true);
    }
  );
}

check();
check(undefined);
check({});
check({next: 0});

