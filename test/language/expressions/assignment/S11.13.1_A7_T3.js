// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Assignment Operator evaluates its operands from left to right.
description: >
    The left-hand side expression is evaluated before the right-hand side.
    Left-hand side expression is MemberExpression: base[prop]. ToPropertyKey(prop)
    is not called.
---*/

function DummyError() { }

assert.throws(DummyError, function() {
  var base = {};
  var prop = {
    toString: function() {
      throw new Test262Error("property key evaluated");
    }
  };
  var expr = function() {
    throw new DummyError();
  };

  base[prop] = expr();
});
