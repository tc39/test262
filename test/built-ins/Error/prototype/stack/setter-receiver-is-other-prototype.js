// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  The SameValue check in SetterThatIgnoresPrototypeProperties is locked to
  %Error.prototype% only. Calling the setter with any other prototype object
  (NativeError prototypes, AggregateError.prototype) as the receiver does NOT
  throw via the home-object check; it installs an own data property on that
  prototype.
info: |
  set Error.prototype.stack

  [...]
  4. Perform ? SetterThatIgnoresPrototypeProperties(this value, %Error.prototype%, "stack", v).

  SetterThatIgnoresPrototypeProperties ( this, home, p, v )

  [...]
  2. If SameValue(this, home) is true, then
    a. NOTE: Throwing here emulates assignment to a non-writable data property
       on the home object in strict mode code.
    b. Throw a TypeError exception.
  3. Let desc be ? this.[[GetOwnProperty]](p).
  4. If desc is undefined, then
    a. Perform ? CreateDataPropertyOrThrow(this, p, v).
includes: [propertyHelper.js]
features: [error-stack-accessor]
---*/

var set = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').set;

var nativeErrors = [
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
];

for (var i = 0; i < nativeErrors.length; ++i) {
  var Ctor = nativeErrors[i];
  var proto = Ctor.prototype;

  assert.sameValue(
    Object.getOwnPropertyDescriptor(proto, 'stack'),
    undefined,
    Ctor.name + '.prototype: precondition: no own "stack" property'
  );

  set.call(proto, 'sentinel-' + Ctor.name);

  verifyProperty(proto, 'stack', {
    value: 'sentinel-' + Ctor.name,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  // verifyProperty above asserts configurable: true, which causes the helper
  // to delete the property as part of its check; confirm the mutation didn't
  // leak.
  assert.sameValue(
    Object.getOwnPropertyDescriptor(proto, 'stack'),
    undefined,
    Ctor.name + '.prototype: cleanup'
  );
}
