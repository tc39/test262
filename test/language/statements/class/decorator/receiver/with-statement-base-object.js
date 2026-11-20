// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  A decorator `@dec` that resolves to a binding of a with statement object is
  called with that object as the this value
esid: sec-getdecoratorreceiver
info: |
  DecoratorEvaluation

  Decorator : @ DecoratorMemberExpression
    ...
    4. Return DecoratorDefinition Record { [[Decorator]]: value, [[Receiver]]: GetDecoratorReceiver(ref) }.

  GetDecoratorReceiver ( ref )

  1. If ref is a Reference Record, then
    a. If IsPropertyReference(ref) is true, then
      i. Return GetThisValue(ref).
    b. Let refEnv be ref.[[Base]].
    c. Assert: refEnv is an Environment Record.
    d. Return refEnv.WithBaseObject().
  2. Return undefined.
flags: [noStrict]
features: [decorators]
---*/

var receivers = [];
var scope = {
  dec: function(value, context) {
    receivers.push(this);
  }
};

with (scope) {
  @dec
  class C {
    @dec
    method() {}
  }
}

assert.sameValue(receivers.length, 2, 'the decorator runs for the method and the class');
assert.sameValue(receivers[0], scope, 'method decorator this value');
assert.sameValue(receivers[1], scope, 'class decorator this value');
