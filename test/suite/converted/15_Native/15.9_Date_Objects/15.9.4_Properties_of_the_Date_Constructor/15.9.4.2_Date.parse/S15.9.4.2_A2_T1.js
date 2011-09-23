// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "parse" is 1
 *
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.2_Date.parse/S15.9.4.2_A2_T1.js
 * @description The "length" property of the "parse" is 1
 */

if(Date.parse.hasOwnProperty("length") !== true){
  $ERROR('#1: The parse has a "length" property');
}

if(Date.parse.length !== 1){
  $ERROR('#2: The "length" property of the parse is 1');
}


