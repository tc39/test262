// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The decodeURIComponent property has the attribute DontEnum
 *
 * @id: S15.1.3.2_A5.5;
 * @section: 15.1.3.2, 15.2.4.7, 12.6.4;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (this.propertyIsEnumerable('decodeURIComponent') !== false) {
  $ERROR('#1: this.propertyIsEnumerable(\'decodeURIComponent\') === false. Actual: ' + (this.propertyIsEnumerable('decodeURIComponent')));
}

//CHECK#2
result = true;
for (p in this){
  if (p === "decodeURIComponent") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "decodeURIComponent") result = false; }  result === true;');
}

