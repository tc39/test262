// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  For any AsyncContext.Variable objects that were unset in the snapshot, and
  that were set in the current snapshot at the time of calling `run`, they are
  unset in the context in which the callback is called.

  This happens even for AsyncContext.Variable instances that were did not yet
  exist when the AsyncContext.Snapshot was created.
info: |
  AsyncContext.Snapshot.prototype.run ( func, ...args )

  3. Let previousContextMapping be
     AsyncContextSwap(asyncSnapshopt.[[AsyncSnapshotMapping]]).
  4. Let result be Completion(Call(func, undefined, args)).
  5. AsyncContextSwap(previousContextMapping).

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.
  4. Return asyncContextMapping.
features: [AsyncContext]
---*/

const symbol = Symbol();

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable({ defaultValue: symbol });
const asyncVar3 = new AsyncContext.Variable();

let asyncSnapshot;

asyncVar1.run("foo", () => {
  asyncSnapshot = new AsyncContext.Snapshot();
});

const newAsyncVar1 = new AsyncContext.Variable({ defaultValue: symbol });
const newAsyncVar2 = new AsyncContext.Variable();

asyncVar2.run("bar", () => {
  asyncVar3.run("baz", () => {
    newAsyncVar1.run("fizz", () => {
      newAsyncVar2.run("buzz", () => {

        asyncSnapshot.run(() => {

          assert.sameValue(
            asyncVar1.get(),
            "foo",
            'The value of `asyncVar1.get()` is `"foo"`'
          );

          assert.sameValue(
            asyncVar2.get(),
            symbol,
            'The value of `asyncVar2.get()` is `symbol`'
          );

          assert.sameValue(
            asyncVar3.get(),
            undefined,
            'The value of `asyncVar3.get()` is `"undefined`'
          );

          assert.sameValue(
            newAsyncVar1.get(),
            symbol,
            'The value of `newAsyncVar1.get()` is `symbol`'
          );

          assert.sameValue(
            newAsyncVar2.get(),
            undefined,
            'The value of `newAsyncVar2.get()` is `"undefined`'
          );

        });

      });
    });
  });
});
