// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Objects that are expected to be functions but do not define the correct
    [[Class]] internal property do not satisfy the assertion.
includes: [testBuiltInObject.js]
---*/

var threw = false;

try {
  testBuiltInObject(null, true);
} catch(err) {
  threw = true;
  if (err.constructor !== Test262Error) {
    $ERROR(
      'Expected a Test262Error, but a "' + err.constructor.name +
      '" was thrown.'
    );
  }
}

if (threw === false) {
  $ERROR('Expected a Test262Error, but no error was thrown.');
}
