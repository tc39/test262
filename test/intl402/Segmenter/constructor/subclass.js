// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Segmenter
description: The prototype of the Intl.Segmenter constructor is %FunctionPrototype%.
info: |
    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.
    Unless otherwise specified every built-in function object has the %FunctionPrototype% object as the initial value of its [[Prototype]] internal slot.
features: [Intl.Segmenter]
---*/

class CustomSegmenter extends Intl.Segmenter {
  constructor(...args) {
    super(...args);
    this.isCustom = true;
  }
}

let cs = new CustomSegmenter();

assert.sameValue(Object.getPrototypeOf(CustomSegmenter), Intl.Segmenter, 'Object.getPrototypeOf(CustomSegmenter) returns the value of `Intl.Segmenter` (undefined)');
assert.sameValue(Object.getPrototypeOf(CustomSegmenter.prototype), Intl.Segmenter.prototype, 'Object.getPrototypeOf(CustomSegmenter.prototype) returns the value of `Intl.Segmenter.prototype` (undefined)');
assert.sameValue(
  cs instanceof Intl.Segmenter,
  'CustomSegmenter instance is instanceof Intl.Segmenter',
  'The result of `(cs instanceof Intl.Segmenter)` is "CustomSegmenter instance is instanceof Intl.Segmenter"'
);
