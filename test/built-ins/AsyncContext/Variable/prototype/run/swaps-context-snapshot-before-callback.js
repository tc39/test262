// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Switches into a context snapshot containing the given value when calling the
  callback.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  4. Let asyncContextMapping be a new empty List.
  ...
  8. Append p to asyncContextMapping.
  9. AsyncContextSwap(asyncContextMapping.)
  10. Let result be Completion(Call(func, undefined, args)).
  ...

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  ...
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.

features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

assert.sameValue(
  asyncVar.get(),
  undefined,
  'The value of `asyncVar.get()` before calling `run` is `undefined`'
);

asyncVar.run(42, () => {
  assert.sameValue(
    asyncVar.get(),
    42,
    'The value of `asyncVar.get()` inside the callback passed to `run` is `42`'
  );
});
