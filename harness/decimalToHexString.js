// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of various encoding operations.
defines: [decimalToHexString, decimalToPercentHexString]
---*/

function decimalToHexString(n) {
  var hex = "0123456789ABCDEF";
  n >>>= 0;
  var s = "";
  while (n) {
    s = hex[n & 0xf] + s;
    n >>>= 4;
  }
  while (s.length < 4) {
    s = "0" + s;
  }
  return s;
}

var decimalToPercentHexString$ = new Array(256);

function decimalToPercentHexString(n) {
  var s = decimalToPercentHexString$[n];
  if (!s) {
    var hex = "0123456789ABCDEF";
    var cH = hex[(n >> 4) & 0xf];
    var cL = hex[n & 0xf];
    s = decimalToPercentHexString$[n] = `%${cH}${cL}`;
  }
  return s;
}
