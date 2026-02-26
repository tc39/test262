// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  When it returns a promise, the async context snapshot when the promise
  resolves will not be the one inside of the callback.
info: |
  TODO
flags: [async]
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const asyncSnapshot = asyncVar.run("bar", () => new AsyncContext.Snapshot());

let resolve;

asyncVar.run("foo", () => {

  asyncSnapshot.run(async () => {
    assert.sameValue(asyncVar.get(), "bar");

    await new Promise(resolveFn => {
      resolve = resolveFn;
    });

    assert.sameValue(asyncVar.get(), "bar");
  }).then(() => {
    assert.sameValue(asyncVar.get(), "foo");
  }).then($DONE, $DONE);

});

resolve();
