/*---
description: >
    `yield` is a valid IdentifierReference in an AssignmentProperty outside of
    strict mode and generator functions.
es6id: 12.14.5
flags: [noStrict]
---*/

var value = { yield: 3 };
var result, yield;

result = { yield } = value;

assert.sameValue(result, value);
assert.sameValue(yield, 3);
