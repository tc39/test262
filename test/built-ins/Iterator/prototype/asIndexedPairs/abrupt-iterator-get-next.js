// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Returns abrupt when next accessor is abrupt.
info: |
  %AsyncIterator.prototype%.asIndexedPairs ( )

  Let iterated be ? GetIteratorDirect(this value).
  Let closure be a new Abstract Closure with no parameters that captures iterated and performs the following steps when called:
    Let index be 0.
    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated, lastValue)).
      ...

  IteratorNext ( iteratorRecord [ , value ] )

    If value is not present, then
      Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]]).
    Else,
      Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
    If Type(result) is not Object, throw a TypeError exception.
    Return result.


includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let nextGets = 0;
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  get next() {
    nextGets++;
    throw new Test262Error();
  }
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let iterator = new Test262AsyncIteratorAbrupt([1, 2]);
  assert.sameValue(nextGets, 0, 'The value of `nextGets` is 0');

  try {
    tryCount++;
    iterator.asIndexedPairs();
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(nextGets, 1, 'The value of `nextGets` is 1');
})().then($DONE, $DONE);
