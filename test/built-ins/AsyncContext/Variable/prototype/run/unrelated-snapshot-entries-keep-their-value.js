// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Switches into a context snapshot which keeps the values of all entries not
  corresponding to the current AsyncContext.Variable from the previous context
  snapshot.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  3. Let previousContextMapping be AsyncContextSnapshot().
  4. Let asyncContextMapping be a new empty List.
  5. For each Async Context Mapping Record p of previousContextMapping, do
     a. If SameValueZero(p.[[AsyncContextKey]], asyncVariable) is false, then
        i. Let q be the Async Context Mapping Record
           { [[AsyncContextKey]]: p.[[AsyncContextKey]],
           [[AsyncContextValue]]: p.[[AsyncContextValue]] }
        ii. Append q to asyncContextMapping
  6. Assert: asyncContextMapping does not contain an Async Context Mapping
     Record whose [[AsyncContextKey]] is asyncVariable.
  7. Let p be the Async Context Mapping Record
     { [[AsyncContextKey]]: asyncVariable, [[AsyncContextValue]]: value }.
  8. Append p to asyncContextMapping.
  9. AsyncContextSwap(asyncContextMapping)
  ...

  AsyncContextSwap ( snapshotMapping )

  1. Let agentRecord be the surrounding agent's Agent Record.
  ...
  3. Set agentRecord.[[AsyncContextMapping]] to snapshotMapping.

  AsyncContextSnapshot ( )

  1. Let agentRecord be the surrounding agent's Agent Record.
  2. Return agentRecord.[[AsyncContextMapping]].
features: [AsyncContext]
---*/

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable();
const asyncVar3 = new AsyncContext.Variable();

const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");
const symbol3 = Symbol("symbol3");
const symbol4 = Symbol("symbol4");
const symbol5 = Symbol("symbol5");

asyncVar1.run(symbol1, () => {
  asyncVar2.run(symbol2, () => {
    asyncVar3.run(symbol3, () => {

      assert.sameValue(asyncVar1.get(), symbol1, 'asyncVar1.get() === symbol1');
      assert.sameValue(asyncVar2.get(), symbol2, 'asyncVar2.get() === symbol2');
      assert.sameValue(asyncVar3.get(), symbol3, 'asyncVar3.get() === symbol3');

      asyncVar2.run(symbol4, () => {
        asyncVar1.run(symbol5, () => {

          assert.sameValue(asyncVar1.get(), symbol5, 'asyncVar1.get() === symbol5');
          assert.sameValue(asyncVar2.get(), symbol4, 'asyncVar2.get() === symbol4');
          assert.sameValue(asyncVar3.get(), symbol3, 'asyncVar3.get() === symbol3');

        });
      });

    });
  });
});
