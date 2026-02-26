// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.get
description: >
  When called in the callback passed to `AsyncContext.Variable.prototype.run`,
  it returns the first argument to `run`, even if that is `undefined` and the
  `AsyncContext.Variable` instance has a different default value.
info: |
  AsyncContext.Variable.prototype.get ( )

  3. Let agentRecord be the surrounding agent's Agent Record.
  4. Let asyncContextMapping be agentRecord.[[AsyncContextMapping]].
  5. For each Async Context Mapping Record p of asyncContextMapping, do
    a. If SameValueZero(p.[[AsyncContextKey]], asyncVariable) is true, return p.[[AsyncContextValue]].
features: [AsyncContext]
---*/

const asyncVariable = new AsyncContext.Variable({ defaultValue: 42 });

asyncVariable.run(undefined, () => {
    assert.sameValue(
        asyncVariable.get(),
        undefined,
        'The value of `asyncVariable.get()` is `undefined`'
    );
});
