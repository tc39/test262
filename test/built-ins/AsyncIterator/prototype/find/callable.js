// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.find
description: >
  AsyncIterator.prototype.find is callable, but not constructable.
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
    await AsyncIterator.prototype.find.call(iter, () => {});
  } catch (e) {
    catchCount++;
  }

  try {
    tryCount++;
    await iter.find(() => {});
  } catch (e) {
    catchCount++;
  }

  try {
    tryCount++;
    await new iter.find(() => {});
  } catch (e) {
    catchCount++;
  }

  assert.sameValue(tryCount, 3, 'The value of `tryCount` is 3');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
})().then($DONE, $DONE);
