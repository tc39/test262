// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When the `yield` keyword occurs within the Initializer of a
    SingleNameBinding witihn the FormalParameters of a GeneratorMethod, it
    behaves as a YieldExpression.
es6id: 14.4
features: [generators]
flags: [noStrict]
---*/

var yield = 'defaultViaIdentifier';
var obj;
var iter = (function*() {
  obj = {
    *method(x = yield) {
      return x;
    }
  };
}());

iter.next();

iter.next('defaultViaExpression');

assert.sameValue(obj.method().next(), 'defaultViaExpression');
