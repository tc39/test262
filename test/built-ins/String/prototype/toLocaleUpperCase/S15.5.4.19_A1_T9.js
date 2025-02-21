// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T9
description: Call toLocaleUpperCase() function of string object
---*/

var __obj = {
  valueOf: function() {},
  toString: void 0
};

var __lowerCase = new String(__obj).toLocaleUpperCase();

var __expected = "UNDEFINED";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__lowerCase.length, __expected.length, '#1: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.length === __expected.length');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(__lowerCase.index, __expected.index, '#2: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.index === __expected.index');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
assert.sameValue(__lowerCase.input, __expected.input, '#3: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.input === __expected.input');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
for (var index = 0; index < __expected.length; index++) {
  if (__lowerCase[index] !== __expected[index]) {
    throw new Test262Error('#4.' + index + ': __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase[' + index + ']===' + __expected[index] + '. Actual: ' + __lowerCase[index]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
