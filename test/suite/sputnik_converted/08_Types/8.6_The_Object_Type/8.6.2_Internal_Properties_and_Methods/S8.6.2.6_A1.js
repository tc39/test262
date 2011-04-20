// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.6_A1;
* @section: 8.6.2.6, 8.6.2, 9.8, 11.8.6;
* @assertion: This should generate a TypeError, 
* Cause we overload toString method so it return non Primitive value 
* See ECMA reference at http://bugzilla.mozilla.org/show_bug.cgi?id=167325;
* @description: Try to overload toString method;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.6_A1",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2.6_A1.js",

assertion: "This should generate a TypeError,",

description: "Try to overload toString method",

test: function testcase() {
   try
{
	var __obj = {toString: function() {return new Object();}}  
	String(__obj);
	$ERROR('#1.1: var __obj = {toString: function() {return new Object();}}; String(__obj) throw TypeError. Actual: ' + (String(__obj)));
}
catch(e)
{
	if ((e instanceof TypeError) !== true) {
	  $ERROR('#1.2: var __obj = {toString: function() {return new Object();}}; String(__obj) throw TypeError. Actual: ' + (e));
	}  
}  


 }
});

