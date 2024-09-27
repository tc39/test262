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
async function *gen() { yield 'value'; }

const asyncIteratorHelperProto = Object.getPrototypeOf(gen().map(x => x));

assertThrowsInstanceOf(() => asyncIteratorHelperProto.next.call(gen()), TypeError);
assertThrowsInstanceOf(() => asyncIteratorHelperProto.return.call(gen()), TypeError);
assertThrowsInstanceOf(() => asyncIteratorHelperProto.throw.call(gen()), TypeError);

