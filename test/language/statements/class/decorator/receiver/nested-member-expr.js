// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A decorator `@ns.obj.dec` is called with `ns.obj` as the this value
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
var ns = { obj: obj };

class C {
  @ns.obj.dec
  method() {}
}

@ns.obj.dec
class D {}


assert.sameValue(receivers.length, 2, 'decorator runs for the method and the class');
assert.sameValue(receivers[0], obj, 'method decorator this value');
assert.sameValue(receivers[1], obj, 'class decorator this value');
