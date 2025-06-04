// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  When the function returns a promise, the async context snapshot when the
  promise resolves will not be the wrapped snapshot.
info: |
  TODO
flags: [async]
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

let resolve;

async function callback() {
  assert.sameValue(asyncVar.get(), "bar");

  await new Promise(resolveFn => {
    resolve = resolveFn;
  });

  assert.sameValue(asyncVar.get(), "bar");
}

const wrapped = asyncVar.run("bar", () => AsyncContext.Snapshot.wrap(callback));

asyncVar.run("foo", () => {

  wrapped().then(() => {
    assert.sameValue(asyncVar.get(), "foo");
  }).then($DONE, $DONE);

});

resolve();
