// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
es5id: 11.1.6_A3_T4
description: Applying grouping operator to undefined
---*/

//Check for undefined and null

//CHECK#1
assert.sameValue((undefined), undefined, '#1: (undefined) === undefined');

//CHECK#2
if ((void 0) !== void 0) {
  throw new Test262Error('#2: (void 0) === void 0. Actual: ' + ((void 0)));
}

//CHECK#2
assert.sameValue((null), null, '#2: (null) === null');
