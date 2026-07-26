// Copyright (C) 2025 James M Snell. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: NativeError constructor creates own code property
info: |
  NativeError ( message [ , options ] )

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

esid: sec-nativeerror
features: [error-code]
includes: [propertyHelper.js, nativeErrors.js]
---*/

for (var i = 0; i < nativeErrors.length; ++i) {
  var nativeError = nativeErrors[i];

  var message = "my-message";
  var code = "ERR_SOMETHING";
  var error = new nativeError(message, { code });

  verifyProperty(error, "code", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: code,
  });

  verifyProperty(new nativeError(message), "code", undefined);
  verifyProperty(new nativeError(message, { code: undefined }), "code", { value: undefined });
  verifyProperty(new nativeError(message, {}), "code", undefined);
}
