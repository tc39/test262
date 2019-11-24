// Copyright 2019 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: NativeError prototypes do not have an own toString method.
info: |
  19.5.6.3 Properties of the NativeError Prototype Objects

  Each NativeError prototype object:
    ...
    has a [[Prototype]] internal slot whose value is %Error.prototype%.
---*/

var nativeErrors = [
  EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
];

for (let i = 0; i < nativeErrors.length; i += 1) {
  var NativeError = nativeErrors[i];

  assert(!NativeError.prototype.hasOwnProperty('toString'));
  assert.sameValue(NativeError.prototype.toString, Error.prototype.toString);
}
