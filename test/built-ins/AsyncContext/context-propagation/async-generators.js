// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
flags: [async]
features: [AsyncContext]
includes: [asyncHelpers.js]
---*/

// TODO: This test tests the behavior in
// https://github.com/tc39/proposal-async-context/pull/61

const asyncVar = new AsyncContext.Variable();

async function* gen() {
  await Promise.resolve();
  assert.sameValue(asyncVar.get(), "init");
  yield;
  await Promise.resolve();
  assert.sameValue(asyncVar.get(), "init");
}

asyncTest(async () => {
  let g;
  asyncVar.run('init', () => {
    g = gen();
  });
  await asyncVar.run('first iter', async () => {
    await g.next();
  });
  await asyncVar.run('second iter', async () => {
    await g.next();
  });
});
