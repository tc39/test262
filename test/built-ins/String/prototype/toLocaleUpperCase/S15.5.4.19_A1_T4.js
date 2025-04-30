// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T4
description: >
    Call toLocaleUpperCase() function without arguments of string and
    from empty string
---*/

var __lowerCase = "".toLocaleUpperCase();
var __expected = "";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__lowerCase.length, __expected.length, '#1: __lowerCase = "".toLocaleUpperCase(); __expected = ""; __lowerCase.length === __expected.length');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(__lowerCase.index, __expected.index, '#2: __lowerCase = "".toLocaleUpperCase(); __expected = ""; __lowerCase.index === __expected.index');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
assert.sameValue(__lowerCase.input, __expected.input, '#3: __lowerCase = "".toLocaleUpperCase(); __expected = ""; __lowerCase.input === __expected.input');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
assert.sameValue(__lowerCase[0], __expected[0], '#4: __lowerCase = "".toLocaleUpperCase(); __lowerCase[0]===' + __expected[0] + '');
//
//////////////////////////////////////////////////////////////////////////////
