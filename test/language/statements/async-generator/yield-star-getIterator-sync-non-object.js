/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Non object returned by [Symbol.iterator]()
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
        i. Let syncMethod be ? GetMethod(obj, @@iterator).
        ii. Let syncIterator be ? Call(syncMethod, obj).
        iii. Return ? CreateAsyncFromSyncIterator(syncIterator).
    ...

    CreateAsyncFromSyncIterator(syncIterator)

    1. If Type(syncIterator) is not Object, throw a TypeError exception.
    ...

 flags: [async]
---*/

var log = [];
var iter = {
  get [Symbol.iterator]() {
    log.push({ name: "get [Symbol.iterator]" });

    return function() {
      log.push({ name: "call [Symbol.iterator]" });

      return "non object";
    };
  },
  get [Symbol.asyncIterator]() {
    log.push({ name: "get [Symbol.asyncIterator]" });

    return undefined;
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

  assert.sameValue(log[2].name, "get [Symbol.iterator]");

  assert.sameValue(log[3].name, "call [Symbol.iterator]");

  if (!(v instanceof TypeError)) {
    $ERROR('Expected TypeError but got ' + v);
  }

  assert.sameValue(log.length, 4, "log.length");
}).then($DONE, $DONE);
