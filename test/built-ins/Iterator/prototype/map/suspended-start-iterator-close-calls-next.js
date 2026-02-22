// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.map
description: >
  Generator is closed from suspended-start state and IteratorClose calls next.
info: |
  27.1.2.1.2 %IteratorHelperPrototype%.return ( )
    ...
    4. If O.[[GeneratorState]] is suspended-start, then
       a. Set O.[[GeneratorState]] to completed.
       ...
       c. Perform ? IteratorClose(O.[[UnderlyingIterator]], NormalCompletion(unused)).
       d. Return CreateIteratorResultObject(undefined, true).
    ...

  7.4.11 IteratorClose ( iteratorRecord, completion )
    ...
    3. Let innerResult be Completion(GetMethod(iterator, "return")).
    4. If innerResult is a normal completion, then
       a. Let return be innerResult.[[Value]].
       b. If return is undefined, return ? completion.
       c. Set innerResult to Completion(Call(return, iterator)).
    ...

  27.1.2.1.1 %IteratorHelperPrototype%.next ( )
    1. Return ? GeneratorResume(this value, undefined, "Iterator Helper").

  27.5.3.3 GeneratorResume ( generator, value, generatorBrand )
    1. Let state be ? GeneratorValidate(generator, generatorBrand).
    2. If state is completed, return CreateIteratorResultObject(undefined, true).
    ...

  27.5.3.2 GeneratorValidate ( generator, generatorBrand )
    ...
    5. Let state be generator.[[GeneratorState]].
    6. If state is executing, throw a TypeError exception.
    7. Return state.
features: [iterator-helpers]
---*/

var returnCallCount = 0;

var underlying = {
  next() {
    throw new Test262Error("Unexpected call to next");
  },
  return() {
    returnCallCount += 1;

    // The generator state is already set to "completed". The generator state is
    // not "executing", so `GeneratorValidate` succeeds and `GeneratorResume`
    // returns with `CreateIteratorResultObject()`.
    var result = it.next();
    assert.sameValue(result.value, undefined);
    assert.sameValue(result.done, true);

    return {};
  },
};

var it = Iterator.prototype.map.call(underlying, function() {
  throw new Test262Error("Unexpected call to map");
});

assert.sameValue(returnCallCount, 0);

// This `return()` call sets the generator state to "completed" and then calls
// `IteratorClose()`.
var result = it.return();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

assert.sameValue(returnCallCount, 1);
