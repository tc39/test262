// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Switches back into the context snapshot active at the time of calling the
  wrapped function, after it calls the original callback.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    b. Let previousContextMapping be AsyncContextSwap(snapshot).
    c. Let result be Completion(Call(fn, thisArgument, args)).
    d. AsyncContextSwap(previousContextMapping).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.
  4. Return asyncContextMapping.
features: [AsyncContext]
---*/

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable();

const wrapped = asyncVar1.run(42, () => {
  return AsyncContext.Snapshot.wrap(() => { });
});

const asyncVar3 = new AsyncContext.Variable();

asyncVar1.run("foo", () => {
  asyncVar2.run("bar", () => {
    asyncVar3.run("baz", () => {

      wrapped();

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
