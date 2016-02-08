// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The push property of Array has the attribute DontEnum
es5id: 15.4.4.7_A6.5
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
if (Array.propertyIsEnumerable('push') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'push\') === false. Actual: ' + (Array.propertyIsEnumerable('push')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "push") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "push") result = false; }  result === true;');
}
