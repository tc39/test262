// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  The context name of an anonymous class that gets its name from named
  evaluation is the same as the name of the class
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
features: [decorators, class-fields-public, class-fields-private, Symbol]
---*/

var contexts = [];
var classes = [];

function dec(value, context) {
  contexts.push(context);
  classes.push(value);
}

var a = @dec class {};
let b = @dec class {};
var obj = { c: @dec class {} };
var d;
d = @dec class {};

var sym = Symbol('sym');
var anonymous = Symbol();

class Holder {
  e = @dec class {};
  static #f = @dec class {};
  static [sym] = @dec class {};
  static [anonymous] = @dec class {};
}

new Holder();

var expected = ['a', 'b', 'c', 'd', '#f', '[sym]', '', 'e'];
assert.sameValue(contexts.length, expected.length, 'the decorator runs for each class');
for (var i = 0; i < expected.length; i++) {
  assert.sameValue(contexts[i].name, expected[i], 'context.name of class ' + i);
  assert.sameValue(contexts[i].name, classes[i].name, 'context.name is the name of class ' + i);
}
