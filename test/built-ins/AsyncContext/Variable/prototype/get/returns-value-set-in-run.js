// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  When called in the callback passed to `AsyncContext.Variable.prototype.run`,
  it returns the first argument to `run`.
info: |
  AsyncContext.Variable.prototype.get ( )

  3. Let agentRecord be the surrounding agent's Agent Record.
  4. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  5. For each Async Context Mapping Record p of asyncContextMapping, do
    a. If SameValueZero(p.[[AsyncContextKey]], asyncVariable) is true, return p.[[AsyncContextValue]].

  AsyncContext.Variable.prototype.run ( value, func, ...args )

  4. Let asyncContextMapping be a new empty List.
  ...
  7. Let p be the Async Context Mapping Record { [[AsyncContextKey]]: asyncVariable, [[AsyncContextValue]]: value }.
  8. Append p to asyncContextMapping.
  9. AsyncContextSwap(asyncContextMapping).
  10. Let result be Completion(Call(func, undefined, args)).
  ...
features: [AsyncContext]
---*/

const value = Symbol();

const asyncVariable = new AsyncContext.Variable();

asyncVariable.run(value, () => {
  assert.sameValue(
    asyncVariable.get(),
    value,
    'The value of `asyncVariable.get()` is `value`'
  );
});
