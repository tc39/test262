// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The context name of an anonymous class is the empty String
esid: sec-createdecoratorcontextobject
info: |
  CreateDecoratorContextObject ( kind, name, initializers, decorationState [ , isStatic ] )

  ...
  Else,
    i. If name is a Private Name, then
      1. Let className be name.[[Description]].
    ii. Else if name is a Symbol, then
      1. Let description be name.[[Description]].
      2. If description is undefined, let className be the empty String.
      3. Else, let className be the string-concatenation of "[", description, and "]".
    iii. Else,
      1. Let className be name.
    ...
    v. Perform ! CreateDataPropertyOrThrow(contextObj, "name", className).
features: [decorators]
---*/

var names = [];

function dec(value, context) {
  names.push(context.name);
}

(@dec class {});
[@dec class {}];

assert.sameValue(names.length, 2, 'the decorator runs twice');
assert.sameValue(names[0], '', 'parenthesized anonymous class');
assert.sameValue(names[1], '', 'anonymous class in an array literal');
