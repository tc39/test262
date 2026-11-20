// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  `this` and `super` in a parenthesized decorator refer to the code that
  contains the class
esid: prod-DecoratorParenthesizedExpression
features: [decorators, super]
---*/

var calls = [];
var base = {
  dec: function() {
    calls.push('super');
  }
};

var obj = {
  dec: function() {
    calls.push('this');
  },
  run() {
    class A {
      @(this.dec) a() {}
      @(super.dec) b() {}
    }
  }
};

Object.setPrototypeOf(obj, base);
obj.run();

assert.sameValue(calls.join(), 'this,super');
