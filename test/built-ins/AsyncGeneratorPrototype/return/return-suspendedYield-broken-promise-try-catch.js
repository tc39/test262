// Copyright (C) 2022 Chengzhong Wu. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asyncgenerator-prototype-return
description: >
  A broken promise should resume the generator and reject with
  the exception.
info: |
  AsyncGenerator.prototype.return ( value )
  ...
  9. Else if state is suspendedYield, then
    a. Perform AsyncGeneratorResume(generator, completion).
  ...

  AsyncGeneratorCompleteStep ( generator, completion, done [ , realm ] )
  Resumes the steps defined at AsyncGeneratorStart ( generator, generatorBody )
  ...
  4. Set the code evaluation state of genContext such that when evaluation is resumed for that execution context the following steps will be performed:
    ...
    i. Perform AsyncGeneratorDrainQueue(generator).
    j. Return undefined.

  AsyncGeneratorDrainQueue ( generator )
  ...
  5. Repeat, while done is false,
    a. Let next be the first element of queue.
    b. Let completion be Completion(next.[[Completion]]).
    c. If completion.[[Type]] is return, then
        i. Set generator.[[AsyncGeneratorState]] to awaiting-return.
        ii. Perform AsyncGeneratorAwaitReturn(generator).
        iii. Set done to true.
  ...

flags: [async]
features: [async-iteration]
---*/

var g = async function*() {
  try {
    yield 0;
    return 1;
  } catch (err) {
    assert.sameValue(err.message, 'broken promise');
    return 2;
  }
};

let brokenPromise = Promise.resolve(42);
Object.defineProperty(brokenPromise, 'constructor', {
  get: function () {
    throw new Error('broken promise');
  }
});

var it = g();
it.next().then(() => {
  return gen.return(brokenPromise)
}).then(ret => {
  assert.sameValue(ret.value, 2, 'returned value');
  assert.sameValue(ret.done, true, 'returned value');
}).then($DONE, $DONE);
