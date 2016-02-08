// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When a `yield` token appears within the Initializer of an AssignmentElement
    outside of a generator function body, it behaves as an IdentifierReference.
es6id: 12.14.5.4
flags: [noStrict]
---*/

var value = [];
var yield = 4;
var result, x;

result = [ x = yield ] = value;

assert.sameValue(result, value);
assert.sameValue(x, 4);
