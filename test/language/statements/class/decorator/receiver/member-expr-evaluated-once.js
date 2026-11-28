// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The decorator expression `@obj.dec` reads `obj.dec` once
esid: sec-decoratorevaluation
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

var reads = 0;
var calls = 0;
var obj = {
  get dec() {
    reads += 1;
    return function() {
      calls += 1;
    };
  }
};

@obj.dec
class C {}

assert.sameValue(reads, 1, 'obj.dec is read once');
assert.sameValue(calls, 1, 'the decorator is called once');
