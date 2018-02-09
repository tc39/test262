// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-5-1-s
description: Array.prototype.filter - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

  var innerThisCorrect = false;

  function callbackfn(val, idx, obj) {
    "use strict";
    innerThisCorrect = this===undefined;
    return true;
  }

  [1].filter(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
