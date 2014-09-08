// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator calls PutValue(lref, v)
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lref, v) uses the initially
    created Reference even if the environment binding is no longer present.
    No ReferenceError is thrown when 'x &= y' is in strict-mode code and the
    original binding is no longer present.
    Check operator is "x &= y".
includes:
    - fnGlobalObject.js
---*/

Object.defineProperty(fnGlobalObject(), "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 5;
  }
});

(function() {
  "use strict";
  x &= 3;
})();

if (fnGlobalObject().x !== 1) {
  $ERROR('#1: fnGlobalObject().x === 1. Actual: ' + (fnGlobalObject().x));
}
