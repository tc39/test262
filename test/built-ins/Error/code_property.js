// Copyright (C) 2025 James M Snell. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Error constructor creates own code property
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
includes: [propertyHelper.js]
---*/

var message = "my-message";
var code = "ERR_SOMETHING";
var error = new Error(message, { code });

verifyProperty(error, "code", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: code,
});

// code is absent when options is not provided
verifyProperty(new Error(message), "code", undefined);

// code is present (with value undefined) when explicitly set to undefined
verifyProperty(new Error(message, { code: undefined }), "code", { value: undefined });

// code is absent when options is provided without code
verifyProperty(new Error(message, {}), "code", undefined);

// code accepts any value type, not just strings
verifyProperty(new Error(message, { code: 42 }), "code", { value: 42 });
verifyProperty(new Error(message, { code: null }), "code", { value: null });
verifyProperty(new Error(message, { code: true }), "code", { value: true });

var sym = Symbol("code");
verifyProperty(new Error(message, { code: sym }), "code", { value: sym });

var obj = { toString() { return "ERR_OBJ"; } };
verifyProperty(new Error(message, { code: obj }), "code", { value: obj });

// code and cause can both be set simultaneously
var cause = new Error("original");
var errorWithBoth = new Error(message, { cause, code: "ERR_BOTH" });
verifyProperty(errorWithBoth, "code", { value: "ERR_BOTH" });
verifyProperty(errorWithBoth, "cause", { value: cause });

// options that are not objects are ignored
verifyProperty(new Error(message, "string-options"), "code", undefined);
verifyProperty(new Error(message, 42), "code", undefined);
verifyProperty(new Error(message, true), "code", undefined);
verifyProperty(new Error(message, null), "code", undefined);
verifyProperty(new Error(message, undefined), "code", undefined);
