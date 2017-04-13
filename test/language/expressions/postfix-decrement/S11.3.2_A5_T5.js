// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x-- calls PutValue(lhs, newValue)
es5id: S11.3.2_A5_T5
description: >
    Evaluating LeftHandSideExpression lhs returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lhs, newValue) uses the initially
    created Reference even if the environment binding is no longer present.
    No ReferenceError is thrown when 'x--' is in strict-mode code and the
    original binding is no longer present.
---*/

Object.defineProperty(this, "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 2;
  }
});

(function() {
  "use strict";
  x--;
})();

if (this.x !== 1) {
  $ERROR('#1: this.x === 1. Actual: ' + (this.x));
}
