// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[Call]] executes code associated with the object
 *
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2_A5_T1.js
 * @description Call function-property of object, property defined
 *  as testScreen = {touch:function(){count++}}
 */

this.count=0;

var testScreen = {touch:function(){count++}};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
testScreen.touch();
if (count !==1) {
  $ERROR('#1: this.count=0; testScreen = {touch:function(){count++}}; testScreen.touch(); count === 1. Actual: ' + (count));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
testScreen['touch']();
if (count !==2) {
  $ERROR('#2: this.count=0; testScreen = {touch:function(){count++}}; testScreen.touch(); testScreen[\'touch\'](); count === 2. Actual: ' + (count));
}
//
//////////////////////////////////////////////////////////////////////////////

