// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Restores the snapshot when calling the callback.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  3. Let previousContextMapping be
     AsyncContextSwap(asyncSnapshopt.[[AsyncSnapshotMapping]]).
  4. Let result be Completion(Call(func, undefined, args)).

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.
  4. Return asyncContextMapping.
features: [AsyncContext]
---*/

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable();
const asyncVar3 = new AsyncContext.Variable();

let asyncSnapshot;

asyncVar1.run("foo", () => {
  asyncVar2.run("bar", () => {
    asyncVar3.run("baz", () => {

      asyncSnapshot = new AsyncContext.Snapshot();

    });
  });
});

asyncSnapshot.run(() => {

  assert.sameValue(
    asyncVar1.get(),
    "foo",
    'The value of `asyncVar1.get()` is `"foo"`'
  );

  assert.sameValue(
    asyncVar2.get(),
    "bar",
    'The value of `asyncVar2.get()` is `"bar"`'
  );

  assert.sameValue(
    asyncVar3.get(),
    "baz",
    'The value of `asyncVar3.get()` is `"baz"`'
  );

});
