// Copyright (C) 2025 James M Snell. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error
description: >
  AggregateError constructor creates own code property
info: |
  AggregateError ( errors, message [ , options ] )

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

features: [AggregateError, error-code]
includes: [propertyHelper.js]
---*/

var errors = [];
var message = "my-message";
var code = "ERR_AGGREGATE";
var error = new AggregateError(errors, message, { code });

verifyProperty(error, "code", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: code,
});

verifyProperty(new AggregateError(errors, message), "code", undefined);
verifyProperty(new AggregateError(errors, message, { code: undefined }), "code", { value: undefined });
verifyProperty(new AggregateError(errors, message, {}), "code", undefined);

// code and cause can both be set simultaneously
var cause = new Error("original");
var errorWithBoth = new AggregateError(errors, message, { cause, code: "ERR_BOTH" });
verifyProperty(errorWithBoth, "code", { value: "ERR_BOTH" });
verifyProperty(errorWithBoth, "cause", { value: cause });
