// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  For any AsyncContext.Variable objects that were unset when wrap was called,
  and that were set in the current snapshot at the time of calling the wrapped
  function, they are unset in the context inside the callback.

  This happens even for AsyncContext.Variable instances that were did not yet
  exist when the AsyncContext.Snapshot was created.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  2. Let snapshot be AsyncContextSnapshot().
  3. Let closure be a new Abstract Closure with parameters (...args) that captures fn and snapshot and performs the following steps when called:
    ...
    b. Let previousContextMapping be AsyncContextSwap(snapshot).
    c. Let result be Completion(Call(fn, thisArgument, args)).
  ...
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

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

// Will only be constructed after calling `wrap`.
let newAsyncVar1;
let newAsyncVar2;

function callback() {
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
}

let wrapped;

asyncVar1.run("foo", () => {
  wrapped = AsyncContext.Snapshot.wrap(callback);
});

newAsyncVar1 = new AsyncContext.Variable({ defaultValue: symbol });
newAsyncVar2 = new AsyncContext.Variable();

asyncVar2.run("bar", () => {
  asyncVar3.run("baz", () => {
    newAsyncVar1.run("fizz", () => {
      newAsyncVar2.run("buzz", () => {

        wrapped();

      });
    });
  });
});
