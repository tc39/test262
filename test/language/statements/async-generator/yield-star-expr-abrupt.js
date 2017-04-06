/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Abrupt completion while getting yield* operand
 info: >
    YieldExpression: yield * AssignmentExpression

    1. Let exprRef be the result of evaluating AssignmentExpression.
    2. Let value be ? GetValue(exprRef).
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
var abrupt = function() {
  log.push({ name: "before throw" });
  throw rejectReason;
  log.push({ name: "after throw" });
};
var asyncIterator = (async function*() {
  log.push({ name: "before yield*" });
  yield* abrupt();
  log.push({ name: "after yield*" });
  return "return-value";
})();

assert.sameValue(log.length, 0, "log.length");

asyncIterator.next("next-arg-1").then(() => {
  $ERROR('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(log[0].name, "before yield*");

  assert.sameValue(log[1].name, "before throw");

  assert.sameValue(v, rejectReason, "reject reason");

  assert.sameValue(log.length, 2, "log.length");
}).then($DONE, $DONE);
