// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
flags: [async]
features: [AsyncContext]
includes: [asyncHelpers.js]
---*/

const asyncVar = new AsyncContext.Variable();

async function* gen() {
  await Promise.resolve();
  assert.sameValue(asyncVar.get(), "init");
  yield* asyncVar.run("nested-gen", async function* () {
    assert.sameValue(asyncVar.get(), "nested-gen");
    await Promise.resolve();
    assert.sameValue(asyncVar.get(), "nested-gen");
    yield;
    assert.sameValue(asyncVar.get(), "nested-gen");
    await Promise.resolve();
    assert.sameValue(asyncVar.get(), "nested-gen");
  });
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
