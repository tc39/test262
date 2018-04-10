// Copyright (C) 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-function.prototype.tostring
description: >
  toString of built-in Function object
info: |
  ...
  If func is a Bound Function exotic object or a built-in Function object, then return an implementation-dependent String source code representation of func.
  The representation must have the syntax of a NativeFunction.
  ...

  NativeFunction:
    function IdentifierName_opt ( FormalParameters ) { [ native code ] }

includes: [fnGlobalObject.js, nativeFunctionMatcher.js, wellKnownIntrinsicObjects.js]
---*/

var visited = [];
var verified = [];

function visit(object, assertion) {
  if (visited.includes(object)) {
    return;
  }

  visited.push(object);

  if (typeof object === "function") {
    assertion(object);
    verified.push(object.name);
  }

  for (var property of Object.getOwnPropertyNames(object)) {
    try {
      if (typeof object[property] === "function" ||
          typeof object[property] === "object") {
        visit(object[property], assertion);
      }
    } catch(error) {
      /* we don't actually want to do anything about failures here */
    }
  }
}

visit(WellKnownIntrinsicObjects, assertNativeFunction);
assert.notSameValue(verified.length, 0);
