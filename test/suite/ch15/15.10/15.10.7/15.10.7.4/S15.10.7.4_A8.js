// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype multiline property has the attribute DontEnum
 *
 * @path ch15/15.10/15.10.7/15.10.7.4/S15.10.7.4_A8.js
 * @description Checking if enumerating the multiline property of RegExp.prototype fails
 */

__re = RegExp.prototype;

//CHECK#0
if (__re.hasOwnProperty('multiline') !== true) {
  $FAIL('#0: __re = RegExp.prototype; __re.hasOwnProperty(\'multiline\') === true');
}

 //CHECK#1
if (__re.propertyIsEnumerable('multiline') !== false) {
  $ERROR('#1: __re = RegExp.prototype; __re.propertyIsEnumerable(\'multiline\') === false');
}

 //CHECK#2
count = 0
for (p in __re){
  if (p==="multiline") count++   
}

if (count !== 0) {
  $ERROR('#2: count = 0; __re = RegExp.prototype; for (p in __re){ if (p==="multiline") count++; } count === 0. Actual: ' + (count));
} 

