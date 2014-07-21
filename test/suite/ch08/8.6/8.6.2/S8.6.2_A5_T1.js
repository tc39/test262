// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "[[Call]] executes code associated with the object"
description: >
    Call function-property of object, property defined  as testScreen
    = {touch:function(){count++}}
---*/

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
