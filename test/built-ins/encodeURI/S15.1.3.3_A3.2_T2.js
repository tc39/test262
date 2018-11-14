// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    unescapedURISet containing one instance of each character valid in
    uriUnescaped
es5id: 15.1.3.3_A3.2_T2
es6id: 18.2.6.4
esid: sec-encodeuri-uri
description: "Complex tests, uriUnescaped :: DecimalDigit"
---*/

var DecimalDigit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (var indexC = 0; indexC < DecimalDigit.length; indexC++) {
  var str = DecimalDigit[indexC];
  if (encodeURI(str) !== str) {
    $ERROR('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }
}
