// Copyright (C) 2025 James M Snell. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-suppressed-error
description: >
  SuppressedError constructor creates own code property
info: |
  SuppressedError ( error, suppressed, message [ , options ] )

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

features: [explicit-resource-management, error-code]
includes: [propertyHelper.js]
---*/

var err = new Error("error");
var suppressed = new Error("suppressed");
var message = "my-message";
var code = "ERR_SUPPRESSED";
var error = new SuppressedError(err, suppressed, message, { code });

verifyProperty(error, "code", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: code,
});

verifyProperty(new SuppressedError(err, suppressed, message), "code", undefined);
verifyProperty(new SuppressedError(err, suppressed, message, { code: undefined }), "code", { value: undefined });
verifyProperty(new SuppressedError(err, suppressed, message, {}), "code", undefined);

// code and cause can both be set simultaneously
var cause = new Error("original");
var errorWithBoth = new SuppressedError(err, suppressed, message, { cause, code: "ERR_BOTH" });
verifyProperty(errorWithBoth, "code", { value: "ERR_BOTH" });
verifyProperty(errorWithBoth, "cause", { value: cause });
