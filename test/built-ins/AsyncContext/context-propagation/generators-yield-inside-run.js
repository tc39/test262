// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
features: [AsyncContext]
---*/

// TODO: This test tests the behavior in
// https://github.com/tc39/proposal-async-context/pull/61

const asyncVar = new AsyncContext.Variable();

function* gen() {
  assert.sameValue(asyncVar.get(), "init");
  yield* asyncVar.run("nested-gen", function* () {
    assert.sameValue(asyncVar.get(), "nested-gen");
    yield;
    assert.sameValue(asyncVar.get(), "nested-gen");
  });
  assert.sameValue(asyncVar.get(), "init");
}

let g;
asyncVar.run('init', () => {
  g = gen();
});
asyncVar.run('first iter', () => {
  g.next();
});
asyncVar.run('second iter', () => {
  g.next();
});
