// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.flatmap
description: >
  Underlying iterator's return method is called with zero arguments.
info: |
  27.1.4.6 Iterator.prototype.flatMap ( mapper )
    ...
    6. Let closure be a new Abstract Closure with no parameters that captures
       iterated and mapper and performs the following steps when called:
      ...
      b. Repeat,
        ...
        viii. Repeat, while innerAlive is true,
          ...
          4. Else,
            a. Let completion be Completion(Yield(innerValue)).
            b. If completion is an abrupt completion, then
              i. Let backupCompletion be Completion(IteratorClose(innerIterator, completion)).
              ii. IfAbruptCloseIterator(backupCompletion, iterated).
              iii. Return ? IteratorClose(iterated, completion).
        ...

  27.1.2.1.2 %IteratorHelperPrototype%.return ( )
    ...
    4. If O.[[GeneratorState]] is suspended-start, then
      ...
      c. Perform ? IteratorClose(O.[[UnderlyingIterator]], NormalCompletion(unused)).
      ...
    5. Let C be ReturnCompletion(undefined).
    6. Return ? GeneratorResumeAbrupt(O, C, "Iterator Helper").
features: [iterator-helpers]
---*/

var counter = 0;
var innerCounter = 0;

var underlying = {
  next() {
    return {
      done: false,
      value: 0,
    };
  },
  return() {
    assert.sameValue(arguments.length, 0);

    counter += 1;
    return {};
  }
};

var inner = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false,
      value: 0,
    };
  },
  return() {
    assert.sameValue(arguments.length, 0);

    innerCounter += 1;
    return {};
  }
};

function mapToInner() {
  return inner;
}

// Close from "suspended-start".
{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);

  assert.sameValue(counter, 0);
  assert.sameValue(innerCounter, 0);
  it.return();
  assert.sameValue(counter, 1);
  assert.sameValue(innerCounter, 0);
}

{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);

  assert.sameValue(counter, 1);
  assert.sameValue(innerCounter, 0);
  it.return(1);
  assert.sameValue(counter, 2);
  assert.sameValue(innerCounter, 0);
}

{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);

  assert.sameValue(counter, 2);
  assert.sameValue(innerCounter, 0);
  it.return(1, 2);
  assert.sameValue(counter, 3);
  assert.sameValue(innerCounter, 0);
}

// Close from "suspended-yield".
{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);
  it.next();

  assert.sameValue(counter, 3);
  assert.sameValue(innerCounter, 0);
  it.return();
  assert.sameValue(counter, 4);
  assert.sameValue(innerCounter, 1);
}

{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);
  it.next();

  assert.sameValue(counter, 4);
  assert.sameValue(innerCounter, 1);
  it.return(1);
  assert.sameValue(counter, 5);
  assert.sameValue(innerCounter, 2);
}

{
  var it = Iterator.prototype.flatMap.call(underlying, mapToInner);
  it.next();

  assert.sameValue(counter, 5);
  assert.sameValue(innerCounter, 2);
  it.return(1, 2);
  assert.sameValue(counter, 6);
  assert.sameValue(innerCounter, 3);
}
