/*---
 author: Tooru Fujisawa [:arai] <arai_a@mac.com>
 esid: pending
 description: Non object returned by next
   "then" shouldn't be accessed for non-object
 info: >
    YieldExpression: yield * AssignmentExpression

    ...
    2. Let value be ? GetValue(exprRef).
    3. Let generatorKind be ! GetGeneratorKind().
    4. Let iterator be ? GetIterator(value, generatorKind).
    5. Let received be NormalCompletion(undefined).
    6. Repeat
      a. If received.[[Type]] is normal, then
        ii. Let innerResult be ? Invoke(iterator, "next",
            « received.[[Value]] »).
        iii. If generatorKind is async, then set innerResult to
             ? Await(innerResult).
        iv. If Type(innerResult) is not Object, throw a TypeError exception.
        ...

    Await

    ...
    2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    3. Perform ! Call(promiseCapability.[[Resolve]], undefined, « promise »).
    ...

    Promise Resolve Functions

    ...
    7. If Type(resolution) is not Object, then
      a. Return FulfillPromise(promise, resolution).
    8. Let then be Get(resolution, "then").
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

    return function() {
      log.push({ name: "call [Symbol.asyncIterator]" });

      return {
        get next() {
          log.push({ name: "get next" });

          return function() {
            log.push({ name: "call next" });

            Object.defineProperty(String.prototype, "then", {
                get: function() {
                  log.push({ name: "get next then" });
                }
            });
            return "non object";
          };
        }
      };
    };
  }
};
var asyncIterator = (async function*() {
  log.push({ name: "before yield*" });
  var v = yield* iter;
  log.push({ name: "after yield*" });
  return "return-value";
})();

assert.sameValue(log.length, 0, "log.length");

asyncIterator.next("next-arg-1").then(v => {
  $ERROR('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(log[0].name, "before yield*");

  assert.sameValue(log[1].name, "get [Symbol.asyncIterator]");

  assert.sameValue(log[2].name, "call [Symbol.asyncIterator]");

  assert.sameValue(log[3].name, "get next");

  assert.sameValue(log[4].name, "call next");

  if (!(v instanceof TypeError)) {
    $ERROR('Expected TypeError but got ' + v);
  }

  assert.sameValue(log.length, 5, "log.length");
}).then($DONE, $DONE);
