/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Abrupt completion while getting [Symbol.iterator]
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
      b. If method is undefined,
        i. Let syncMethod be ? GetMethod(obj, @@iterator).
    ...

    GetMethod ( V, P )

    ...
    2. Let func be ? GetV(V, P).
    ...

 flags: [async]
---*/

var log = [];
var rejectReason = new Proxy({}, {
  get() {
    // No operation should be done on reject reason.
    log.push({ name: "rejectReason get" });
  },
  has() {
    log.push({ name: "rejectReason has" });
  }
});
var iter = {
  get [Symbol.iterator]() {
    log.push({ name: "get [Symbol.iterator]" });

    log.push({ name: "before throw" });
    throw rejectReason;
    log.push({ name: "after throw" });
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

  assert.sameValue(log[3].name, "before throw");

  assert.sameValue(v, rejectReason, "reject reason");

  assert.sameValue(log.length, 4, "log.length");
}).then($DONE, $DONE);
