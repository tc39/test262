// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A decorator `@Outer.#dec` is called with `Outer` as the this value
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
features: [decorators, class-static-methods-private]
---*/

var receivers = [];

class Outer {
  static #dec(value, context) {
    receivers.push(this);
  }

  static run() {
    class C {
      @Outer.#dec
      method() {}
    }
  }
}

Outer.run();

assert.sameValue(receivers.length, 1, 'the decorator runs once');
assert.sameValue(receivers[0], Outer, 'the this value is the base object');
