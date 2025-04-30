// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T9
description: Call toUpperCase() function of string object
---*/

var __obj = {
  valueOf: function() {},
  toString: void 0
};

var __upperCase = new String(__obj).toUpperCase();

var __expected = "UNDEFINED";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__upperCase.length, __expected.length, '#1: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.length === __expected.length');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(__upperCase.index, __expected.index, '#2: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.index === __expected.index');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
assert.sameValue(__upperCase.input, __expected.input, '#3: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.input === __expected.input');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
for (var index = 0; index < __expected.length; index++) {
  if (__upperCase[index] !== __expected[index]) {
    throw new Test262Error('#4.' + index + ': __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase[' + index + ']===' + __expected[index] + '. Actual: ' + __upperCase[index]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
