// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: ToObject conversion from null value must throw TypeError
description: Trying to convert null to Object
flags: [noStrict]
---*/

// CHECK#1
try{
  null['foo'];
  $ERROR('#1.1: null[\'foo\'] throw TypeError. Actual: ' + (null['foo']));
}
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#1.2: null[\'foo\'] must throw TypeError. Actual: ' + (e));
  }
}

// CHECK#2
try{
  with(null) x = 2;
  $ERROR('#2.1: with(null) x = 2 must throw TypeError. Actual: x === . Actual: ' + (x));
}
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#2.2: with(null) x = 2 must throw TypeError. Actual: ' + (e));
  }
}
