// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Switches back into the previous context snapshot after calling the callback,
  even if it throws an exception.
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

function CustomError() { }

const asyncVar = new AsyncContext.Variable();

asyncVar.run("foo", () => {

  try {
    asyncVar.run("bar", () => {
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
    'The value of `asyncVar.get()` inside the first `run` and after the second one should be `"foo"`'
  );

});
