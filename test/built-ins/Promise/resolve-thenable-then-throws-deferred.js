// Copyright (C) 2026 Alistair Smith. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Resolving with a thenable whose `then` method throws before settling the
    promise, after invocation of the executor function
esid: sec-newpromiseresolvethenablejob
info: |
    NewPromiseResolveThenableJob ( promiseToResolve, thenable, then )

    1. Let job be a new Job Abstract Closure with no parameters that captures
       promiseToResolve, thenable, and then and performs the following steps
       when called:
      a. Let resolvingFuncs be CreateResolvingFunctions(promiseToResolve).
      b. Let thenCallResult be Completion(HostCallJobCallback(then, thenable,
         « resolvingFuncs.[[Resolve]], resolvingFuncs.[[Reject]] »)).
      c. If thenCallResult is an abrupt completion, then
        i. Return ? Call(resolvingFuncs.[[Reject]], undefined,
           « thenCallResult.[[Value]] »).
      d. Return ! thenCallResult.
flags: [async]
---*/

var returnValue = null;
var value = {};
var resolve;
var thenable = {
  then: function() {
    throw value;
  }
};
var promise = new Promise(function(_resolve) {
  resolve = _resolve;
});

promise.then(function() {
  $DONE('The promise should not be fulfilled.');
}, function(val) {
  if (val !== value) {
    $DONE('The promise should be rejected with the thrown value.');
    return;
  }

  $DONE();
});

returnValue = resolve(thenable);

assert.sameValue(returnValue, undefined, '"resolve" return value');
