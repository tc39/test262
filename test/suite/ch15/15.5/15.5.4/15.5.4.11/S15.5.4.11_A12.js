// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Call replaceValue passing undefined as the this value
description: replaceValue tests that its this value is undefined
flags: [onlyStrict]
includes: [$FAIL.js]
---*/

var global = this;
'x'.replace(/x/, function() {
  "use strict";

  if (this === global) {
    $FAIL('#1: String replace leaks global');
  }
  if (this !== undefined) {
    $FAIL('#2: replaceValue should be called with this===undefined. ' +
          'Actual: ' + this);
  }
  return 'y';
});
