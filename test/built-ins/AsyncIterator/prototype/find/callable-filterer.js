// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.find
description: >
  AsyncIterator.prototype.find expects to be called with a function argument.
features: [iterator-helpers]
flags: [async]
---*/
(async () => {
  let tryCount = 0;
  let catchCount = 0;
  const nonCallable = {};
  async function* g() {}
  let iter = g();

  try {
    tryCount++;
    await AsyncIterator.prototype.find.call(iter, nonCallable);
  } catch (e) {
    catchCount++;
  }

  try {
    tryCount++;
    await iter.find(nonCallable);
  } catch (e) {
    catchCount++;
  }

  assert.sameValue(tryCount, 2, 'The value of `tryCount` is 2');
  assert.sameValue(catchCount, 2, 'The value of `catchCount` is 2');
})().then($DONE, $DONE);
