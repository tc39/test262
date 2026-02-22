// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator's return method is called with zero arguments.
info: |
  27.1.4.8 Iterator.prototype.map ( mapper )

  ...
  6. Let closure be a new Abstract Closure with no parameters that captures
     iterated and mapper and performs the following steps when called:
    ...
    b. Repeat,
      ...
      v. Let completion be Completion(Yield(mapped)).
      vi. IfAbruptCloseIterator(completion, iterated).
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

// Close from "suspended-start".
{
  var it = Iterator.prototype.map.call(underlying, function(){});

  assert.sameValue(counter, 0);
  it.return();
  assert.sameValue(counter, 1);
}

{
  var it = Iterator.prototype.map.call(underlying, function(){});

  assert.sameValue(counter, 1);
  it.return(1);
  assert.sameValue(counter, 2);
}

{
  var it = Iterator.prototype.map.call(underlying, function(){});

  assert.sameValue(counter, 2);
  it.return(1, 2);
  assert.sameValue(counter, 3);
}

// Close from "suspended-yield".
{
  var it = Iterator.prototype.map.call(underlying, function(){});
  it.next();

  assert.sameValue(counter, 3);
  it.return();
  assert.sameValue(counter, 4);
}

{
  var it = Iterator.prototype.map.call(underlying, function(){});
  it.next();

  assert.sameValue(counter, 4);
  it.return(1);
  assert.sameValue(counter, 5);
}

{
  var it = Iterator.prototype.map.call(underlying, function(){});
  it.next();

  assert.sameValue(counter, 5);
  it.return(1, 2);
  assert.sameValue(counter, 6);
}
