// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Ensure that the regular expression generally distinguishes between valid
    and invalid forms of the NativeFunction grammar production.
includes: [nativeFunctionMatcher.js]
---*/

if (!NATIVE_FUNCTION_RE.test('function(){[native code]}')) {
  throw new Test262Error('expected string to pass: "function(){[native code]}"');
}

if (!NATIVE_FUNCTION_RE.test('function(){ [native code] }')) {
  throw new Test262Error('expected string to pass: "function(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function ( ) { [ native code ] }')) {
  throw new Test262Error('expected string to pass: "function ( ) { [ native code ] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ [native code] }')) {
  throw new Test262Error('expected string to pass: "function a(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ /* } */ [native code] }')) {
  throw new Test262Error('expected string to pass: "function a(){ /* } */ [native code] }"');
}

if (NATIVE_FUNCTION_RE.test('')) {
  throw new Test262Error('expected string to fail: ""');
}

if (NATIVE_FUNCTION_RE.test('native code')) {
  throw new Test262Error('expected string to fail: "native code"');
}

if (NATIVE_FUNCTION_RE.test('function(){}')) {
  throw new Test262Error('expected string to fail: "function(){}"');
}

if (NATIVE_FUNCTION_RE.test('function(){ "native code" }')) {
  throw new Test262Error('expected string to fail: "function(){ "native code" }"');
}

if (NATIVE_FUNCTION_RE.test('function(){ [] native code }')) {
  throw new Test262Error('expected string to fail: "function(){ [] native code }"');
}
