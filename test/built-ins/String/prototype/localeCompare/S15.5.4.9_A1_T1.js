// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.localeCompare(that)
es5id: 15.5.4.9_A1_T1
description: This string is symbol and arguments are symbols
---*/

var str1 = new String("h");
//CHECK#1
var str2 = new String("\x68");
assert.sameValue(str1.localeCompare(str2), 0, '#1: var str1 = new String("h"); var str2 = new String ("\\x68"); str1.localeCompare(str2)===0');

//CHECK#2
var str2 = new String("\u0068");
assert.sameValue(str1.localeCompare(str2), 0, '#2: var str1 = new String("h"); var str2 = new String ("\\u0068"); str1.localeCompare(str2)===0');

//CHECK#3
var str2 = new String("h");
assert.sameValue(str1.localeCompare(str2), 0, '#3: var str1 = new String("h"); var str2 = new String ("h"); str1.localeCompare(str2)===0');
