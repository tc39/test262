// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const iter = {
  next: () => ({ done: false, value: 0 }),
  return: (value = "old return") => ({ done: true, value }),
};

const wrap = Iterator.from(iter);

let {done, value} = wrap.return("return argument ignored");
assert.sameValue(done, true);
assert.sameValue(value, "old return");

iter.return = () => { throw new Error(); };
assertThrowsInstanceOf(() => wrap.return(), Error);

iter.return = null;
let nullResult = wrap.return("return argument ignored");
assert.sameValue(nullResult.done, true);
assert.sameValue(nullResult.value, undefined);

