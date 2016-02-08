// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When a `yield` token appears within the DestructuringAssignmentTarget of a
    nested destructuring assignment and within a generator function body, it
    behaves as a YieldExpression.
es6id: 12.14.5.3
features: [generators]
---*/

var value = [[22]];
var x = {};
var assignmentResult, iterationResult, iter;

iter = (function*() {
  assignmentResult = [[x[yield]]] = value;
}());

iterationResult = iter.next();

assert.sameValue(assignmentResult, undefined);
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, false);
assert.sameValue(x.prop, undefined);

iterationResult = iter.next('prop');

assert.sameValue(assignmentResult, value);
assert.sameValue(iterationResult.value, undefined);
assert.sameValue(iterationResult.done, true);
assert.sameValue(x.prop, 22);
