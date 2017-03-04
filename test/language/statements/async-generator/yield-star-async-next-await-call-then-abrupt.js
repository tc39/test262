/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Abrupt completion while calling then
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

    Await

    ...
    2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    3. Perform ! Call(promiseCapability.[[Resolve]], undefined, « promise »).
    ...

    Promise Resolve Functions

    ...
    8. Let then be Get(resolution, "then").
    ...
    10. Get thenAction be then.[[Value]].
    ...
    12. Perform EnqueueJob("PromiseJobs", PromiseResolveThenableJob, « promise,
        resolution, thenAction »).
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
              get then() {
                log.push({ name: "get next then" });

                return function() {
                  log.push({ name: "call next then" });

                  log.push({ name: "before throw" });
                  throw rejectReason;
                  log.push({ name: "after throw" });
                };
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

  assert.sameValue(log[5].name, "get next then");

  assert.sameValue(log[6].name, "call next then");

  assert.sameValue(log[7].name, "before throw");

  assert.sameValue(v, rejectReason, "reject reason");

  assert.sameValue(log.length, 8, "log.length");
}).then($DONE, $DONE);
