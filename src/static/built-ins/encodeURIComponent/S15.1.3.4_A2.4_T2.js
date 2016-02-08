// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If string.charAt(k) in [0xD800 - 0xDBFF] and string.charAt(k+1) in
    [0xDC00 � 0xDFFF], return 4 octets (000wwwxx xxxxyyyy yyzzzzzz ->
    11110www 10xxxxxx 10yyyyyy 10zzzzzz)
es5id: 15.1.3.4_A2.4_T2
description: >
    Complex tests, use RFC 3629, string.charAt(k) in [0xD800, 0xDBFF,
    0xD9FF]
---*/

var chars = [0xD800, 0xDBFF, 0xD9FF];
var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0; 
for (var index = 0xDC00; index <= 0xDFFF; index++) {
  var res = true;
  for (var indexC = 0; indexC < chars.length; indexC++) {
    var index1 = (chars[indexC] - 0xD800) * 0x400 + (index - 0xDC00) + 0x10000;
    var hex1 = decimalToHexString(0x0080 + (index1 & 0x003F)).substring(2);
    var hex2 = decimalToHexString(0x0080 + (index1 & 0x0FC0) / 0x0040).substring(2);
    var hex3 = decimalToHexString(0x0080 + (index1 & 0x3F000) / 0x1000).substring(2);
    var hex4 = decimalToHexString(0x00F0 + (index1 & 0x1C0000) / 0x40000).substring(2);
    var str = String.fromCharCode(chars[indexC], index);
    try {
      if (encodeURIComponent(str).toUpperCase() !== "%" + hex4 + "%" + hex3 + "%" + hex2 + "%" + hex1) {
        res = false;
      }
    } catch(e) {res = false}    
  }
  if (res !== true) {  
    if (indexO === 0) { 
      indexO = index;
    } else {
      if ((index - indexP) !== 1) {             
        if ((indexP - indexO) !== 0) {
          var hexP = decimalToHexString(indexP);
          var hexO = decimalToHexString(indexO);
          $ERROR('#' + hexO + '-' + hexP + ' ');
        } 
        else {
          var hexP = decimalToHexString(indexP);
          $ERROR('#' + hexP + ' ');
        }  
        indexO = index;
      }         
    }
    indexP = index;
    errorCount++;    
  }
  count++;  
}

if (errorCount > 0) {
  if ((indexP - indexO) !== 0) {
    var hexP = decimalToHexString(indexP);
    var hexO = decimalToHexString(indexO);
    $ERROR('#' + hexO + '-' + hexP + ' ');
  } else {
    var hexP = decimalToHexString(indexP);
    $ERROR('#' + hexP + ' ');
  }     
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count + ' ');
}

function decimalToHexString(n) {
  n = Number(n);
  var h = "";
  for (var i = 3; i >= 0; i--) {
    if (n >= Math.pow(16, i)) {
      var t = Math.floor(n / Math.pow(16, i));
      n -= t * Math.pow(16, i);
      if ( t >= 10 ) {
        if ( t == 10 ) { h += "A"; }
        if ( t == 11 ) { h += "B"; }
        if ( t == 12 ) { h += "C"; }
        if ( t == 13 ) { h += "D"; }
        if ( t == 14 ) { h += "E"; }
        if ( t == 15 ) { h += "F"; }
      } else {
        h += String(t);
      }
    } else {
      h += "0";
    }
  }
  return h;
}
