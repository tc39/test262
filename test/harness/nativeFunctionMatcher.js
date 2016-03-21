// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Provides a regex that makes a best-effort determination that the tested
    string matches the NativeFunction grammar production without requiring a
    correct tokeniser
includes: [nativeFunctionHelper.js]
---*/

if (!(
  NATIVE_FUNCTION_RE.test('function(){[native function]}') &&
  NATIVE_FUNCTION_RE.test('function(){ [native function] }') &&
  NATIVE_FUNCTION_RE.test('function ( ) { [ native function ] }') &&
  NATIVE_FUNCTION_RE.test('function a(){ [native function] }') &&
  NATIVE_FUNCTION_RE.test('function a(){ /* } */ [native function] }') &&
  !NATIVE_FUNCTION_RE.test('') &&
  !NATIVE_FUNCTION_RE.test('native function') &&
  !NATIVE_FUNCTION_RE.test('function(){}') &&
  !NATIVE_FUNCTION_RE.test('function(){ "native function" }') &&
  !NATIVE_FUNCTION_RE.test('function(){ [] native function }')
)) $ERROR('NATIVE_FUNCTION_RE failed');
