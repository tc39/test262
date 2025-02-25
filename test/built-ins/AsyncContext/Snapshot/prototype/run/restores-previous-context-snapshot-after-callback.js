// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Switches back into the context snapshot active at the time of calling `run`
  after calling the callback.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  3. Let previousContextMapping be AsyncContextSwap(asyncSnapshot.[[AsyncSnapshotMapping]]).
  4. Let result be Completion(Call(func, undefined, args)).
  5. AsyncContextSwap(previousContextMapping).
  6. Return result.

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.
  4. Return asyncContextMapping.
features: [AsyncContext]
---*/

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable();

const snapshot = asyncVar1.run(42, () => new AsyncContext.Snapshot());

const asyncVar3 = new AsyncContext.Variable();

asyncVar1.run("foo", () => {
  asyncVar2.run("bar", () => {
    asyncVar3.run("baz", () => {

      snapshot.run(() => { });

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
  });
});
