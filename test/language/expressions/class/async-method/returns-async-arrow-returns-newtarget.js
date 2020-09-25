// This file was procedurally generated from the following sources:
// - src/async-functions/returns-async-arrow-returns-newtarget.case
// - src/async-functions/syntax/async-class-expr-method.template
/*---
description: Async function returns an async function. (Async method as a ClassExpression element)
esid: prod-AsyncMethod
features: [async-functions]
flags: [generated, async]
info: |
    ClassElement :
      MethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

---*/
let count = 0;


var C = class {
  async method(x) {
    return async () => new.target;
  }
};
// Stores a reference `asyncFn` for case evaluation
let c = new C();
let asyncFn = c.method.bind(c);


asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {
  assert.sameValue(result, undefined);
  assert.sameValue(count, 1);
}).then($DONE, $DONE);
