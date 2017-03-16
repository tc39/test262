// This file was procedurally generated from the following sources:
// - src/async-generators/yield-spread-arr-single.case
// - src/async-generators/default/async-expression-named.template
/*---
description: Use yield value in a array spread position (Named async generator expression)
esid: prod-AsyncGeneratorExpression
flags: [generated, async]
includes: [compareArray.js]
info: |
    Async Generator Function Definitions

    AsyncGeneratorExpression :
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }

    Array Initializer

    SpreadElement[Yield, Await]:
      ...AssignmentExpression[+In, ?Yield, ?Await]

---*/
var arr = ['a', 'b', 'c'];


var callCount = 0;

var gen = async function *g() {
  callCount += 1;
  yield [...yield];
};

var iter = gen();

iter.next(false);
var item = iter.next(['a', 'b', 'c']);

item.then(({ done, value }) => {
  assert(compareArray(value, arr));
  assert.sameValue(done, false);
}).then($DONE, $DONE);

assert.sameValue(callCount, 1);
