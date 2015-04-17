/*---
description: >
    `yield` is not a valid IdentifierReference in an AssignmentProperty within
    generator function bodies.
es6id: 12.14.5
flags: [noStrict]
features: [generators]
negative: SyntaxError
---*/

(function*() {
  { yield } = {};
});
