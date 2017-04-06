/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Non callable returned by [Symbol.asyncIterator]
 info: >
    YieldExpression: yield * AssignmentExpression

    1. Let exprRef be the result of evaluating AssignmentExpression.
    2. Let value be ? GetValue(exprRef).
    3. Let generatorKind be ! GetGeneratorKind().
    4. Let iterator be ? GetIterator(value, generatorKind).
    ...

    GetIterator ( obj [ , hint ] )

    ...
    3. If hint is async,
      a. Set method to ? GetMethod(obj, @@asyncIterator).
    ...

    GetMethod ( V, P )

    ...
    2. Let func be ? GetV(V, P).
    ...
    4. If IsCallable(func) is false, throw a TypeError exception.
    ...

 flags: [async]
---*/

var log = [];
var iter = {
  get [Symbol.iterator]() {
    log.push({ name: "get [Symbol.iterator]" });
  },
  get [Symbol.asyncIterator]() {
    log.push({ name: "get [Symbol.asyncIterator]" });

    return "non callable";
  }
};
var asyncIterator = (async function*() {
  log.push({ name: "before yield*" });
  yield* iter;
  log.push({ name: "after yield*" });
  return "return-value";
})();

assert.sameValue(log.length, 0, "log.length");

asyncIterator.next("next-arg-1").then(() => {
  $ERROR('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(log[0].name, "before yield*");

  assert.sameValue(log[1].name, "get [Symbol.asyncIterator]");

  if (!(v instanceof TypeError)) {
    $ERROR('Expected TypeError but got ' + v);
  }

  assert.sameValue(log.length, 2, "log.length");
}).then($DONE, $DONE);
