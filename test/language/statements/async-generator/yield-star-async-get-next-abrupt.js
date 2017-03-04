/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Abrupt completion while getting next
 info: >
    YieldExpression: yield * AssignmentExpression

    ...
    6. Repeat
      a. If received.[[Type]] is normal, then
        ii. Let innerResult be ? Invoke(iterator, "next",
            « received.[[Value]] »).
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

          log.push({ name: "before throw" });
          throw rejectReason;
          log.push({ name: "after throw" });
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

  assert.sameValue(log[4].name, "before throw");

  assert.sameValue(v, rejectReason, "reject reason");

  assert.sameValue(log.length, 5, "log.length");
}).then($DONE, $DONE);
