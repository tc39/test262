// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A decorator `@dec` is called with undefined as the this value
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
features: [decorators]
---*/

var receivers = [];
var obj = {
  dec: function(value, context) {
    'use strict';
    receivers.push(this);
  },
  factory: function() {
    'use strict';
    receivers.push(this);
    return obj.dec;
  }
};
var dec = obj.dec;

var C = class {
  @dec
  method() {}
};

var D = @dec class {};


assert.sameValue(receivers.length, 2, 'decorator runs for the method and the class');
assert.sameValue(receivers[0], undefined, 'method decorator this value');
assert.sameValue(receivers[1], undefined, 'class decorator this value');
