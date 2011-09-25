// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production CharacterEscape :: t evaluates by returning
 * the character \u0009
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.10_CharacterEscape/S15.10.2.10_A1.1_T1.js
 * @description Use \t in RegExp and \u0009 in tested string
 */

//CHECK#1
var arr = /\t/.exec("\u0009");
if ((arr === null) || (arr[0] !== "\u0009")) {
  $ERROR('#1: var arr = /\\t/.exec("\\u0009"); arr[0] === "\\u0009". Actual. ' + (arr && arr[0]));
}

//CHECK#2
var arr = /\t\t/.exec("a\u0009\u0009b");
if ((arr === null) || (arr[0] !== "\u0009\u0009")) {
  $ERROR('#2: var arr = /\\t\\t/.exec("a\\u0009\\u0009b"); arr[0] === "\\u0009\\u0009". Actual. ' + (arr && arr[0]));
}    

