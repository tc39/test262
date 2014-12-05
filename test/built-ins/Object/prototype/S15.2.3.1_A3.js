// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.1_A3
description: Checking if deleting "Object.prototype" property fails;
flags: [noStrict]
---*/

delete Object.prototype;

//CHECK#2
if (!(Object.hasOwnProperty('prototype'))) {
  $ERROR('#2: the Object.prototype property has the attributes DontDelete.');
}
