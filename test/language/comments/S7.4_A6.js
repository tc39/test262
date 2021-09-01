// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If multi line comments csn not nest, they can contain any Unicode
    character
es5id: 7.4_A6
description: "\"var\"+ yy+ \"xx = 1\", insert instead of yy all Unicode characters"
includes: [decimalToHexString.js]
---*/

for (var indexI = 0; indexI <= 65535; indexI++) {
  try {
    var xx = 0;
    eval("/*var " + String.fromCharCode(indexI) + "xx = 1*/");
    if (xx !== 0) {
      throw new Test262Error('#' + decimalToHexString(indexI) + ' ');
    }
  } catch (e){
    throw new Test262Error('#' + decimalToHexString(indexI) + ' ');
  }
}
