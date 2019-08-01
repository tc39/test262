// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
description: >
  Abrupt completion returned when accessing `done` property of iteration result
info: |
  YieldExpression : yield * AssignmentExpression

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
  3. Let iterator be ? GetIterator(value).
  4. Let received be NormalCompletion(undefined).
  5. Repeat
     a. If received.[[Type]] is normal, then
        [...]
     b. Else if received.[[Type]] is throw, then
        [...]
     c. Else,
        i. Assert: received.[[Type]] is return.
        ii. Let return be ? GetMethod(iterator, "return").
        iii. If return is undefined, return Completion(received).
        iv. Let innerReturnResult be ? Call(return, iterator, «
            received.[[Value]] »).
        v. If Type(innerReturnResult) is not Object, throw a TypeError
           exception.
        vi. Let done be ? IteratorComplete(innerReturnResult).

  7.4.3 IteratorComplete

  1. Assert: Type(iterResult) is Object.
  2. Return ToBoolean(? Get(iterResult, "done")).
features: [generators, Symbol.iterator]
---*/

var thrown = new Test262Error();
var badIter = {};
var poisonedDone = Object.defineProperty({}, 'done', {
  get: function() {
    throw thrown;
  }
});
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function() {
      return poisonedDone;
    }
  };
};
function* g() {
  try {
    yield * badIter;
  } catch (err) {
    caught = err;
  }
}
var iter = g();
var caught;

iter.next();
iter.return();

assert.sameValue(caught, thrown);
