// Copyright (C) 2019 Caio Lima (Igalia SL). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If an initializer returns an abrupt complition, other initializers should not execute
esid: [[construct]]
info: |
  [[Construct]] ( argumentsList, newTarget)
    ...
    8. If kind is "base", then
      a. Perform OrdinaryCallBindThis(F, calleeContext, thisArgument).
      b. Let result be InitializeInstanceFields(thisArgument, F).
      c. If result is an abrupt completion, then
        i. Remove calleeContext from execution context stack and restore callerContext as the running execution context.
        ii. Return Completion(result).
    ...

  ClassTail : ClassHeritage { ClassBody }
    ...
    34. For each item fieldRecord in order from staticFields,
      a. Perform ? DefineField(F, field).
    ...

features: [class-fields-public, class-static-fields-public, class]
---*/

function abruptComplition() {
  throw new Test262Error();
}

let neverExecuted = false;

function sideEffect() {
  neverExecuted = true;
}

class C {
  a = abruptComplition();
  b = sideEffect();
}

assert.throws(Test262Error, function() {
  let c = new C();
}, 'field initializer should end with abrupt complition');
assert.sameValue(neverExecuted, false);

assert.throws(Test262Error, function() {
  class D {
    static a = abruptcomplition();
    static b = sideEffect();
  }
}, 'static field initializer should end with abrupt complition');
assert.sameValue(neverExecuted, false);
