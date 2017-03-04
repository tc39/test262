/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Abrupt completion while getting value
 info: >
    YieldExpression: yield * AssignmentExpression

    ...
    6. Repeat
      a. If received.[[Type]] is normal, then
        ii. Let innerResult be ? Invoke(iterator, "next",
            « received.[[Value]] »).
        iii. If generatorKind is async, then set innerResult to
             ? Await(innerResult).
        ...
        vi. If done is true, then
          1. Return ? IteratorValue(innerResult).
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
  },
  get [Symbol.asyncIterator]() {
    log.push({ name: "get [Symbol.asyncIterator]" });

    return function() {
      log.push({ name: "call [Symbol.asyncIterator]" });

      return {
        get next() {
          log.push({ name: "get next" });

          return function() {
            log.push({ name: "call next" });

            return {
              get value() {
                log.push({ name: "get next value" });

                log.push({ name: "before throw" });
                throw rejectReason;
                log.push({ name: "after throw" });
              },
              get done() {
                log.push({ name: "get next done" });

                return true;
              }
            };
          };
        }
      };
    };
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

  assert.sameValue(log[2].name, "call [Symbol.asyncIterator]");

  assert.sameValue(log[3].name, "get next");

  assert.sameValue(log[4].name, "call next");

  assert.sameValue(log[5].name, "get next done");

  assert.sameValue(log[6].name, "get next value");

  assert.sameValue(log[7].name, "before throw");

  assert.sameValue(v, rejectReason, "reject reason");

  assert.sameValue(log.length, 8, "log.length");
}).then($DONE, $DONE);
