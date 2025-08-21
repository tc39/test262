// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
flags: [async]
features: [AsyncContext]
includes: [asyncHelpers.js]
---*/

const context = new AsyncContext.Variable();

let resolveFn;

async function asyncCb() {
  assert.sameValue(context.get(), 42);

  await new Promise(resolve => {
    resolveFn = resolve;
  });

  assert.sameValue(context.get(), 42);
}

asyncTest(() => {
  assert.sameValue(context.get(), undefined);

  const promise = context.run(42, asyncCb);

  return promise.then(() => {
    assert.sameValue(context.get(), undefined);
  });
});

resolveFn();
