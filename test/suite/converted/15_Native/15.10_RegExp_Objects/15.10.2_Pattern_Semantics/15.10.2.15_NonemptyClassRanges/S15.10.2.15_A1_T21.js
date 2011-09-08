// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The internal helper function CharacterRange takes two CharSet parameters A and B and performs the
 * following:
 * If A does not contain exactly one character or B does not contain exactly one character then throw
 * a SyntaxError exception
 *
 * @section: 15.10.2.15;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.15_NonemptyClassRanges/S15.10.2.15_A1_T21.js;
 * @description: Checking if execution of "/[\ad-G]/.exec("a")" leads to throwing the correct exception;
 */

//CHECK#1
try {
  $ERROR('#1.1: /[\\ad-G]/.exec("a") throw SyntaxError. Actual: ' + (new RegExp("[\\ad-G]").exec("a")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[\\ad-G]/.exec("a") throw SyntaxError. Actual: ' + (e));
  }
}

