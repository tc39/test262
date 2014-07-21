// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the prototype property has the attributes { DontDelete }
description: >
    Checking if deleting the prototype property of Function("", null)
    fails
includes: [$FAIL.js]
---*/

f = new Function("", null);

//CHECK#1
if (!(f.hasOwnProperty('prototype'))) {
  $FAIL('#1: the function has length property.');
}

fproto = f.prototype;

//CHECK#2
if (delete f.prototype) {
  $ERROR('#2: the prototype property has the attributes { DontDelete }');
}

//CHECK#3
if (f.prototype !== fproto) {
  $ERROR('#3: the prototype property has the attributes { DontDelete }');
}
