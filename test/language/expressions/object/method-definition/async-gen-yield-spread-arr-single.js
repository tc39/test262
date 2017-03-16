// This file was procedurally generated from the following sources:
// - src/async-generators/yield-spread-arr-single.case
// - src/async-generators/default/async-obj-method.template
/*---
description: Use yield value in a array spread position (Async generator method)
esid: prod-AsyncGeneratorMethod
flags: [generated, async]
includes: [compareArray.js]
info: |
    Async Generator Function Definitions

    AsyncGeneratorMethod :
      async [no LineTerminator here] * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

    Array Initializer

    SpreadElement[Yield, Await]:
      ...AssignmentExpression[+In, ?Yield, ?Await]

---*/
var arr = ['a', 'b', 'c'];

var callCount = 0;

var gen = {
  async *method() {
    callCount += 1;
    yield [...yield];
  }
}.method;

var iter = gen();

iter.next(false);
var item = iter.next(['a', 'b', 'c']);

item.then(({ done, value }) => {
  assert(compareArray(value, arr));
  assert.sameValue(done, false);
}).then($DONE, $DONE);

assert.sameValue(callCount, 1);
