// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/
const iteratorHelperProto = Object.getPrototypeOf([].values().map(x => x));

function *gen() {
  yield 1;
}

assertThrowsInstanceOf(() => iteratorHelperProto.next.call(gen()), TypeError);
assertThrowsInstanceOf(() => iteratorHelperProto.return.call(gen()), TypeError);
assertThrowsInstanceOf(() => iteratorHelperProto.throw.call(gen()), TypeError);

