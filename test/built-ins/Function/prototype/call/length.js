// Copyright (C) 2017 Tomas Mysik. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Function.prototype.call.length property is configurable
es6id: 19.2.3.3
description: >
    Checking if deleting the Function.prototype.call.length property
    fails
---*/

//CHECK#0
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $ERROR('#0: the Function.prototype.call has length property');
}

//CHECK#1
if (!delete Function.prototype.call.length) {
  $ERROR('#1: The Function.prototype.call.length property is not configurable');
}

//CHECK#2
if (Function.prototype.call.hasOwnProperty('length')) {
  $ERROR('#2: The Function.prototype.call.length property is not configurable');
}
