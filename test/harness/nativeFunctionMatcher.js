// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Provides a regex that makes a best-effort determination that the tested
    string matches the NativeFunction grammar production without requiring a
    correct tokeniser
includes: [nativeFunctionMatcher.js]
---*/

if (!NATIVE_FUNCTION_RE.test('function(){[native code]}')) {
  $ERROR('expected string to pass: "function(){[native code]}"');
}

if (!NATIVE_FUNCTION_RE.test('function(){ [native code] }')) {
  $ERROR('expected string to pass: "function(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function ( ) { [ native code ] }')) {
  $ERROR('expected string to pass: "function ( ) { [ native code ] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ [native code] }')) {
  $ERROR('expected string to pass: "function a(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ /* } */ [native code] }')) {
  $ERROR('expected string to pass: "function a(){ /* } */ [native code] }"');
}

if (NATIVE_FUNCTION_RE.test('')) {
  $ERROR('expected string to fail: ""');
}

if (NATIVE_FUNCTION_RE.test('native code')) {
  $ERROR('expected string to fail: "native code"');
}

if (NATIVE_FUNCTION_RE.test('function(){}')) {
  $ERROR('expected string to fail: "function(){}"');
}

if (NATIVE_FUNCTION_RE.test('function(){ "native code" }')) {
  $ERROR('expected string to fail: "function(){ "native code" }"');
}

if (NATIVE_FUNCTION_RE.test('function(){ [] native code }')) {
  $ERROR('expected string to fail: "function(){ [] native code }"');
}
