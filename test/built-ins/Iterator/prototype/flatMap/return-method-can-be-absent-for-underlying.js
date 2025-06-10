// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.flatmap
description: >
  Call "return" when underlying iterator has no user-defined return method.
info: |
  27.1.2.1.2 %IteratorHelperPrototype%.return ( )
    ...
    5. Let C be ReturnCompletion(undefined).
    6. Return ? GeneratorResumeAbrupt(O, C, "Iterator Helper").

  27.5.3.4 GeneratorResumeAbrupt ( generator, abruptCompletion, generatorBrand )
    ...
    10. Resume the suspended evaluation of genContext using abruptCompletion as
        the result of the operation that suspended it. Let result be the
        Completion Record returned by the resumed computation.
    ...

  27.1.4.6 Iterator.prototype.flatMap ( mapper )
    ...
    6. Let closure be a new Abstract Closure with no parameters that captures
       iterated and mapper and performs the following steps when called:
      ...
      b. Repeat,
        ...
        viii. Repeat, while innerAlive is true,
          4. Else,
            a. Let completion be Completion(Yield(innerValue)).
            b. If completion is an abrupt completion, then
              ...
              iii. Return ? IteratorClose(iterated, completion).
        ...

  7.4.11 IteratorClose ( iteratorRecord, completion )
    ...
    3. Let innerResult be Completion(GetMethod(iterator, "return")).
    4. If innerResult is a normal completion, then
       a. Let return be innerResult.[[Value]].
       b. If return is undefined, return ? completion.
    ...
features: [iterator-helpers]
---*/

var returnCallCount = 0;

var underlying = {
  next() {
    return {value: 123, done: false};
  },
  // NB: No return method here.
};

var inner = {
  next() {
    return {value: 456, done: false};
  },
  return() {
    returnCallCount += 1;
    return {};
  },
};

var it = Iterator.prototype.flatMap.call(underlying, function() {
  return inner;
});

// Move generator into "suspended-yield" state.
var result = it.next();
assert.sameValue(result.value, 456);
assert.sameValue(result.done, false);

assert.sameValue(returnCallCount, 0);

// This `return()` call continues execution in the suspended generator.
var result = it.return();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

assert.sameValue(returnCallCount, 1);
