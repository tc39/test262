// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The valueOf function is not generic, it cannot be transferred
    to other kinds of objects for use as a method and there is should be
    a TypeError exception if its this value is not a Boolean object
esid: sec-boolean.prototype.valueof
es5id: 15.6.4.3_A2_T5
description: transferring to the other objects
---*/

//CHECK#1
try{
  var s1 = {x: 1};
  s1.valueOf = Boolean.prototype.valueOf;
  var v1 = s1.valueOf();
  $ERROR('#1: Boolean.prototype.valueOf on not a Boolean object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#1: Boolean.prototype.valueOf on not a Boolean object should throw TypeError, not '+e);
  }
}

//CHECK#1
try{
  var s2 = {x: 1};
  s2.myValueOf = Boolean.prototype.valueOf;
  var v2 = s2.myValueOf();
  $ERROR('#2: Boolean.prototype.valueOf on not a Boolean object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#2: Boolean.prototype.valueOf on not a Boolean object should throw TypeError, not '+e);
  }
}
