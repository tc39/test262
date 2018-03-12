// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-rest-id.case
// - src/dstr-binding/default/try-catch-init.template
/*---
description: Lone rest element (try catch with initializer statement)
esid: sec-runtime-semantics-catchclauseevaluation
features: [destructuring-binding, catch-initializer]
flags: [generated]
info: |
    https://github.com/tc39/ecma262/pull/1126

    Catch : catch ( CatchParameter ) Block

    CatchParameter[Yield, Await] :
      FormalParameter[?Yield, ?Await]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization
    BindingRestElement : ... BindingIdentifier
    [...] 3. Let A be ArrayCreate(0). [...] 5. Repeat
       [...]
       f. Let status be CreateDataProperty(A, ToString (n), nextValue).
       [...]
---*/
var values = [1, 2, 3];

var ranCatch = false;

try {
  throw undefined;
} catch ([...x] = values) {
  assert(Array.isArray(x));
  assert.sameValue(x.length, 3);
  assert.sameValue(x[0], 1);
  assert.sameValue(x[1], 2);
  assert.sameValue(x[2], 3);
  assert.notSameValue(x, values);
  ranCatch = true;
}

assert(ranCatch, 'executed `catch` block');
