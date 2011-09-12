// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase() return a string, but not a String object
 *
 * @section 15.5.4.17
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A2_T1.js
 * @description Checking returned result
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("Hello, WoRlD!".toLocaleLowerCase() !== "hello, world!") {
  $ERROR('#1: "Hello, WoRlD!".toLocaleLowerCase() === "hello, world!". Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ("Hello, WoRlD!".toLocaleLowerCase() !== String("hello, world!")) {
  $ERROR('#2: "Hello, WoRlD!".toLocaleLowerCase() === String("hello, world!"). Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("Hello, WoRlD!".toLocaleLowerCase() === new String("hello, world!")) {
  $ERROR('#3: "Hello, WoRlD!".toLocaleLowerCase() !== new String("hello, world!")');
}
//
//////////////////////////////////////////////////////////////////////////////

