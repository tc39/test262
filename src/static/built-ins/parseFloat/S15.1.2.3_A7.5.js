// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The parseFloat property has the attribute DontEnum
es5id: 15.1.2.3_A7.5
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
if (this.propertyIsEnumerable('parseFloat') !== false) {
  $ERROR('#1:this.propertyIsEnumerable(\'parseFloat\') === false. Actual: ' + (this.propertyIsEnumerable('parseFloat')));
}

//CHECK#2
var result = true;
for (var p in this){
  if (p === "parseFloat") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "parseFloat") result = false; }  result === true;');
}
