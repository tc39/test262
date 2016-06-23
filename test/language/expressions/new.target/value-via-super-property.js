// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-super-keyword-runtime-semantics-evaluation
es6id: 12.3.5.1
description: Value when invoked via SuperCall
info: |
  SuperCall : super Arguments

  1. Let newTarget be GetNewTarget().
  [...]
  6. Let result be ? Construct(func, argList, newTarget).
  [...]
features: [class]
---*/

var baseNewTarget = null;
var parentNewTarget = null;

class Base {
  get fromBase() {
    baseNewTarget = new.target;
  }
}

class Parent extends Base {
  get fromParent() {
    parentNewTarget = new.target;
  }
}

class Child extends Parent {
  constructor() {
    super.fromParent;
    super.fromBase;
  }
}

// When the "construct" invocation completes and the "this" value is
// uninitialized, the specification dictates that a ReferenceError must be
// thrown. That behavior is tested elsewhere, so the error is ignored (if it is
// produced at all).
try {
  new Child();
} catch (_) {}

assert.sameValue(parentNewTarget, undefined, 'within "parent" method');
assert.sameValue(baseNewTarget, undefined, 'witin "base" method');
