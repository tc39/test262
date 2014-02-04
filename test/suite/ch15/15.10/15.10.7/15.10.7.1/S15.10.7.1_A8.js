// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype source property has the attribute DontEnum
 *
 * @path ch15/15.10/15.10.7/15.10.7.1/S15.10.7.1_A8.js
 * @description Checking if enumerating the source property of RegExp.prototype fails
 */

__re = RegExp.prototype;

//CHECK#0
if (__re.hasOwnProperty('source') !== true) {
	$FAIL('#0: __re = RegExp.prototype; __re.hasOwnProperty(\'source\') === true');
}

 //CHECK#1
if (__re.propertyIsEnumerable('source') !== false) {
	$ERROR('#1: __re = RegExp.prototype; __re.propertyIsEnumerable(\'source\') === false');
}

 //CHECK#2
count = 0
for (p in __re){
	if (p==="source") count++	  
}

if (count !== 0) {
  $ERROR('#2: count = 0; __re = RegExp.prototype; for (p in __re){ if (p==="source") count++; } count === 0. Actual: ' + (count));
}  


