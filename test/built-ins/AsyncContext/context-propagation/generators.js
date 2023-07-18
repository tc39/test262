// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
flags: [async]
features: [AsyncContext]
includes: [asyncHelpers.js]
---*/

// TODO: This test tests the agreed behavior in
// https://github.com/tc39/proposal-async-context/issues/18, but the proposed
// spec text does not yet implement that behavior.

const context = new AsyncContext.Variable();

async function* gen(context) {
  await Promise.resolve();
  assert.sameValue(context.get(), "init");
  yield;
  await Promise.resolve();
  assert.sameValue(context.get(), "init");
}

asyncTest(async () => {
  let g;
  context.run('init', () => {
    g = gen(context);
  });
  await context.run('first iter', async () => {
    await g.next();
  });
  await context.run('second iter', async () => {
    await g.next();
  });
});
