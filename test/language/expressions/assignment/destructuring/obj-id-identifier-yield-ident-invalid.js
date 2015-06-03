/*---
description: >
    `yield` is not a valid IdentifierReference in an AssignmentProperty within
    strict mode code.
es6id: 12.14.5
flags: [onlyStrict]
negative: SyntaxError
---*/

var { yield } = {};
