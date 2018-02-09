// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The production CharacterClassEscape :: w evaluates by returning the set of characters containing the sixty-three characters:
    a - z, A - Z, 0 - 9, _
es5id: 15.10.2.12_A3_T2
description: a - z
---*/

var regexp_w = /\w/;

//CHECK#0061-007A
var result = true; 
for (var alpha = 0x0061; alpha <= 0x007A; alpha++) {
  var str = String.fromCharCode(alpha);
  var arr = regexp_w.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: a - z');
}
