// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Switches back into the previous context snapshot after calling the callback,
  even when an AsyncContext.Snapshot() is created inside the callback.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  3. Let previousContextMapping be AsyncContextSnapshot().
  ...
  10. Let result be Completion(Call(func, undefined, args)).
  11. AsyncContextSwap(previousContextMapping).
  12. Return result.

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  ...
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.

  AsyncContextSnapshot ( )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Return agentRecord.[[AsyncContextMapping]].
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

let snapshot;

asyncVar.run("foo", () => {
  asyncVar.run("42", () => {
    snapshot = new AsyncContext.Snapshot();
  });

  assert.sameValue(
    asyncVar.get(),
    "foo",
    'The value of `asyncVar.get()` inside the first `run` and after the second one should be `"foo"`'
  );
});

assert.sameValue(
  asyncVar.get(),
  undefined,
  'The value of `asyncVar.get()` after the first `run` should be `undefined`'
);
