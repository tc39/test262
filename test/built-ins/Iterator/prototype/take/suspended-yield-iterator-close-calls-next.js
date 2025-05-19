// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.take
description: >
  Generator is closed from suspended-yield state and IteratorClose calls next.
info: |
  27.1.2.1.2 %IteratorHelperPrototype%.return ( )
    ...
    5. Let C be ReturnCompletion(undefined).
    6. Return ? GeneratorResumeAbrupt(O, C, "Iterator Helper").

  27.5.3.4 GeneratorResumeAbrupt ( generator, abruptCompletion, generatorBrand )
    1. Let state be ? GeneratorValidate(generator, generatorBrand).
    ...
    4. Assert: state is suspended-yield.
    ...
    8. Set generator.[[GeneratorState]] to executing.
    ...
    10. Resume the suspended evaluation of genContext using abruptCompletion as
        the result of the operation that suspended it. Let result be the
        Completion Record returned by the resumed computation.
    ...

  27.5.3.2 GeneratorValidate ( generator, generatorBrand )
    ...
    5. Let state be generator.[[GeneratorState]].
    6. If state is executing, throw a TypeError exception.
    7. Return state.

  27.1.4.11 Iterator.prototype.take ( limit )
    ...
    10. Let closure be a new Abstract Closure with no parameters that captures
        iterated and integerLimit and performs the following steps when called:
      ...
      b. Repeat,
        ...
        v. Let completion be Completion(Yield(value)).
        vi. IfAbruptCloseIterator(completion, iterated).
    ...

  7.4.12 IfAbruptCloseIterator ( value, iteratorRecord )
    ...
    2. If value is an abrupt completion, return ? IteratorClose(iteratorRecord, value).
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
    ...
features: [iterator-helpers]
---*/

var returnCallCount = 0;

var underlying = {
  next() {
    return {value: 123, done: false};
  },
  return() {
    returnCallCount += 1;

    // The generator state is set to "executing", so this `next()` call throws
    // a TypeError when `GeneratorResume` performs `GeneratorValidate`.
    assert.throws(TypeError, function() {
      it.next();
    });

    return {};
  },
};

var it = Iterator.prototype.take.call(underlying, Infinity);

// Move generator into "suspended-yield" state.
var result = it.next();
assert.sameValue(result.value, 123);
assert.sameValue(result.done, false);

assert.sameValue(returnCallCount, 0);

// This `return()` call continues execution in the suspended generator.
var result = it.return();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

assert.sameValue(returnCallCount, 1);
