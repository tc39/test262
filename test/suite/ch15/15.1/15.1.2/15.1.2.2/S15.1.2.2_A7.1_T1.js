// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If Z is empty, return NaN
description: Complex test. R in [2, 36]
---*/

//CHECK#
for (var i = 2; i <= 36; i++) {
  if (isNaN(parseInt("$string", i)) !== true) {
    $ERROR('#' + i + ': parseInt("$string", i) === Not-a-Number. Actual: ' + (parseInt("$string", i)));
  }
}
