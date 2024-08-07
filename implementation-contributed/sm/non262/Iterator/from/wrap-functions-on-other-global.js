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
class TestError extends Error {}

function checkIterResult({done, value}, expectedDone, expectedValue) {
  assert.sameValue(done, expectedDone);
  assert.sameValue(value, expectedValue);
}

const iter = {
  next(value) {
    return {done: false, value: arguments.length};
  },
  return() {
    throw new TestError();
  },
  throw: (value) => ({done: true, value}),
};
const thisWrap = Iterator.from(iter);
const otherGlobal = newGlobal({newCompartment: true});
const otherWrap = otherGlobal.Iterator.from(iter);

checkIterResult(thisWrap.next.call(otherWrap), false, 0);
checkIterResult(thisWrap.next.call(otherWrap, 'value'), false, 0);

assertThrowsInstanceOf(thisWrap.return.bind(otherWrap), TestError);

