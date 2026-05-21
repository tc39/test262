// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-set-error.prototype.stack
description: >
  The SameValue check in SetterThatIgnoresPrototypeProperties is locked to
  %Error.prototype% only. Calling the setter with any other prototype object
  (NativeError prototypes, AggregateError.prototype, SuppressedError.prototype)
  as the receiver does NOT throw via the home-object check; it installs an own
  data property on that prototype.
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

var prototypes = [
  ['EvalError.prototype', EvalError.prototype],
  ['RangeError.prototype', RangeError.prototype],
  ['ReferenceError.prototype', ReferenceError.prototype],
  ['SyntaxError.prototype', SyntaxError.prototype],
  ['TypeError.prototype', TypeError.prototype],
  ['URIError.prototype', URIError.prototype],
  typeof AggregateError === 'undefined' ? null : ['AggregateError.prototype', AggregateError.prototype],
  typeof SuppressedError === 'undefined' ? null : ['SuppressedError.prototype', SuppressedError.prototype]
];

for (var i = 0; i < prototypes.length; ++i) {
  if (!prototypes[i]) continue;
  var label = prototypes[i][0];
  var proto = prototypes[i][1];

  assert.sameValue(
    Object.getOwnPropertyDescriptor(proto, 'stack'),
    undefined,
    label + ': precondition: no own "stack" property'
  );

  set.call(proto, 'sentinel-' + label);

  verifyProperty(proto, 'stack', {
    value: 'sentinel-' + label,
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
    label + ': cleanup'
  );
}
