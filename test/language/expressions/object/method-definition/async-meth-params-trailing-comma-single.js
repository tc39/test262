// This file was procedurally generated from the following sources:
// - src/function-forms/params-trailing-comma-single.case
// - src/function-forms/default/async-meth.template
/*---
description: A trailing comma should not increase the respective length, using a single parameter (async method)
esid: sec-async-function-definitions
flags: [generated, async]
info: |
    14.6 Async Function Definitions

    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    Trailing comma in the parameters list

    14.1 Function Definitions

    FormalParameters[Yield, Await] : FormalParameterList[?Yield, ?Await] ,
---*/


var callCount = 0;
var __obj = {
  async method(a,) {
    assert.sameValue(a, 42);
    callCount = callCount + 1;
  }
};

// Stores a reference `ref` for case evaluation
var ref = __obj.method;

ref(42, 39).then(() => {
    assert.sameValue(callCount, 1, 'async method invoked exactly once');
}, $DONE).then($DONE, $DONE);

assert.sameValue(ref.length, 1, 'length is properly set');
