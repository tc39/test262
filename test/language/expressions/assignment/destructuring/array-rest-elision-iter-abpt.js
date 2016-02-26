// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    IteratorClose is not called when assignment evaluation produces an abrupt
    completion
info: |
    ArrayAssignmentPattern : [ Elisionopt AssignmentRestElement ]

    [...]
    4. If Elision is present, then
       a. Let status be the result of performing
          IteratorDestructuringAssignmentEvaluation of Elision with
          iteratorRecord as the argument.
       b. If status is an abrupt completion, then
          i. If iteratorRecord.[[done]] is false, return
             IteratorClose(iterator, status).
          ii. Return Completion(status).
features: [Symbol.iterator]
es6id: 12.14.5.2
esid: sec-runtime-semantics-destructuringassignmentevaluation
---*/

var nextCount = 0;
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    throw new Test262Error();
  },
  return: function() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
var x;

assert.throws(Test262Error, function() {
  [ , ...x] = iterable;
});

assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);
