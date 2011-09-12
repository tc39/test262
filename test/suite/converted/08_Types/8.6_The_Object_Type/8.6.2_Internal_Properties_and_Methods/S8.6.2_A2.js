// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Properties of the [[Prototype]] object
 * are visible as properties of the child object for the purposes of get access, but not for put access
 *
 * @section 8.6.2, 15.2.4
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2_A2.js
 * @description Check visibility properties of the child object for the purposes of get access, but not for put access
 * @strict_only
 * @strict_mode_negative
 */

//Establish foo object 
function FooObj(){};
FooObj.prototype.prop="some";

// Invoke instance of foo object
var foo= new FooObj;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (foo.prop !== "some"){
  $ERROR('#1: function FooObj(){}; FooObj.prototype.prop="some"; var foo= new FooObj; foo.prop === "some". Actual: ' + (foo.prop));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
foo.prop=true;
// Invoke another instance of foo object
var foo__ = new FooObj;
if (foo__.prop !== "some"){
  $ERROR('#2: function FooObj(){}; FooObj.prototype.prop="some"; var foo= new FooObj; foo.prop=true; var foo__ = new FooObj; foo__.prop === "some". Actual: ' + (foo__.prop));
}
//
//////////////////////////////////////////////////////////////////////////////

