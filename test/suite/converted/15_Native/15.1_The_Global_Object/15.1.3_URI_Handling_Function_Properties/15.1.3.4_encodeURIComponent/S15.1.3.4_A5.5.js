// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The encodeURIComponent property has the attribute DontEnum
 *
 * @section: 15.1.3.4, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.4_encodeURIComponent/S15.1.3.4_A5.5.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (this.propertyIsEnumerable('encodeURIComponent') !== false) {
  $ERROR('#1: this.propertyIsEnumerable(\'encodeURIComponent\') === false. Actual: ' + (this.propertyIsEnumerable('encodeURIComponent')));
}

//CHECK#2
result = true;
for (p in this){
  if (p === "encodeURIComponent") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "encodeURIComponent") result = false; }  result === true;');
}

