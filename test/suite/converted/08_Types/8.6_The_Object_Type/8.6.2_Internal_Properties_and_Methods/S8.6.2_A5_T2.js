// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[Call]] executes code associated with the object
 *
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2_A5_T2.js
 * @description Call function-property of object, property defined
 *  as seat['move']=function(){position++}
 */

this.position=0;
var seat = {};
seat['move']=function(){position++};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
seat.move();
if (position !==1) {
  $ERROR('#1: this.position=0; seat = {}; seat[\'move\']=function(){position++}; seat.move(); position === 1. Actual: ' + (position));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
seat['move']();
if (position !==2) {
  $ERROR('#2: this.position=0; seat = {}; seat[\'move\']=function(){position++}; seat.move(); seat[\'move\'](); position === 2. Actual: ' + (position));
}
//
//////////////////////////////////////////////////////////////////////////////

