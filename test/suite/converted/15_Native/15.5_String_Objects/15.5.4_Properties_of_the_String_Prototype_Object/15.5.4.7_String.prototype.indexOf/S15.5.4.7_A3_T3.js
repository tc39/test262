// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0 indexOf(searchString,0) returns
 *
 * @section 15.5.4.7
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A3_T3.js
 * @description Call "$$abcdabcd".indexOf("ab",function(){return -Infinity;}()) and check result
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("$$abcdabcd".indexOf("ab", function(){return -Infinity;}())!==2) {
  $ERROR('#1: "$$abcdabcd".indexOf("ab", function(){return -Infinity;}())===2. Actual: '+("$$abcdabcd".indexOf("ab", function(){return -Infinity;}()))); 
}
//
//////////////////////////////////////////////////////////////////////////////

