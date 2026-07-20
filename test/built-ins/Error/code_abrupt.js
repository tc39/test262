// Copyright (C) 2025 James M Snell. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: InstallErrorOwnProperties on abrupt completions for code
info: |
  Error ( message [ , options ] )

  ...
  4. Perform ? InstallErrorOwnProperties(O, options).
  ...

  InstallErrorOwnProperties ( O, options )

  1. If options is an Object, then
    a. If ? HasProperty(options, "cause") is true, then
      i. Let cause be ? Get(options, "cause").
      ii. Perform CreateNonEnumerableDataPropertyOrThrow(O, "cause", cause).
    b. If ? HasProperty(options, "code") is true, then
      i. Let code be ? Get(options, "code").
      ii. Perform CreateNonEnumerableDataPropertyOrThrow(O, "code", code).
  2. Return unused.

esid: sec-error-message
features: [error-code]
---*/

var message = "my-message";
var options;

// HasProperty for "code" throws
options = new Proxy({}, {
  has(target, prop) {
    if (prop === "code") {
      throw new Test262Error("HasProperty");
    }
    return prop in target;
  },
});
assert.throws(Test262Error, function() {
  new Error(message, options);
}, "HasProperty");

// Get for "code" throws
options = {
  get code() {
    throw new Test262Error("Get Code");
  },
};
assert.throws(Test262Error, function() {
  new Error(message, options);
}, "Get Code");

// HasProperty for "cause" throws before "code" is ever accessed
var codeAccessed = false;
options = new Proxy({}, {
  has(target, prop) {
    if (prop === "cause") {
      throw new Test262Error("HasProperty cause");
    }
    if (prop === "code") {
      codeAccessed = true;
    }
    return prop in target;
  },
});
assert.throws(Test262Error, function() {
  new Error(message, options);
}, "HasProperty cause before code");
assert.sameValue(codeAccessed, false,
  "code should not be accessed when HasProperty for cause throws");

// Get for "cause" throws before "code" is ever accessed
codeAccessed = false;
options = new Proxy({ cause: 0 }, {
  get(target, prop) {
    if (prop === "cause") {
      throw new Test262Error("Get cause");
    }
    if (prop === "code") {
      codeAccessed = true;
    }
    return target[prop];
  },
});
assert.throws(Test262Error, function() {
  new Error(message, options);
}, "Get cause before code");
assert.sameValue(codeAccessed, false,
  "code should not be accessed when Get for cause throws");
