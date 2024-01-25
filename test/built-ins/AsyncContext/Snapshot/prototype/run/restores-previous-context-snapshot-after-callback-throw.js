// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.prototype.run
description: >
  Switches back into the context snapshot active at the time of calling `run`
  after calling the callback, even if it throws an exception.
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

function CustomError() { }

const asyncVar = new AsyncContext.Variable();

const snapshot = asyncVar.run(42, () => new AsyncContext.Snapshot());

asyncVar.run("foo", () => {

  try {
    snapshot.run(() => {
      throw new CustomError();
    })
  } catch (e) {
    if (!(e instanceof CustomError)) {
      throw e;
    }
  }

  assert.sameValue(
    asyncVar.get(),
    "foo",
    'The value of `asyncVar.get()` should be `"foo"`'
  );

});
