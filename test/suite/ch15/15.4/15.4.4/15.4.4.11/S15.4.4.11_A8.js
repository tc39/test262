// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Call the comparefn passing undefined as the this value (step 13b)
es5id: 15.4.4.11_A8
description: comparefn tests that its this value is undefined
flags: [onlyStrict]
includes: [$FAIL.js]
---*/

var global = this;
[2,3].sort(function(x,y) {
  "use strict";

  if (this === global) {
    $FAIL('#1: Sort leaks global');
  }
  if (this !== undefined) {
    $FAIL('#2: Sort comparefn should be called with this===undefined. ' +
          'Actual: ' + this);
  }
  return x - y;
});
