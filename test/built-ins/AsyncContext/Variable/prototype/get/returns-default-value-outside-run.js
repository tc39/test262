// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  When called outside of any `AsyncContext.Variable.prototype.run` or
  `AsyncContext.Snapshot.prototype.run` callback, it returns
  [[AsyncVariableDefaultValue]].
info: |
  AsyncContext.Variable.prototype.get ( )

  3. Let agentRecord be the surrounding agent's Agent Record.
  4. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  5. For each Async Context Mapping Record p of asyncContextMapping, do
    a. If SameValueZero(p.[[AsyncContextKey]], asyncVariable) is true, return p.[[AsyncContextValue]].
  6. Return asyncVariable.[[AsyncVariableDefaultValue]].

  An agent record's [[AsyncContextMapping]] field is initially an empty list,
  and this only changes in `AsyncContext.Variable.prototype.run` and
  `AsyncContext.Snapshot.prototype.run`.
features: [AsyncContext]
---*/

const defaultValue = Symbol();

const asyncVariable = new AsyncContext.Variable({ defaultValue });

assert.sameValue(
    asyncVariable.get(),
    defaultValue,
    'The value of `asyncVariable.get()` is `defaultValue`'
)
