// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If string.charAt(k) in [0xD800 - 0xDBFF] and string.charAt(k+1) not in
    [0xDC00 - 0xDFFF], throw URIError
es5id: 15.1.3.3_A1.3_T1
description: >
    Complex tests, string.charAt(k+1) in [0x0000, 0xD7FF, 0xD800,
    0xDBFE, 0xDBFF, 0xE000, 0xFFFF]
---*/

var chars = [0x0000, 0xD7FF, 0xD800, 0xDBFE, 0xDBFF, 0xE000, 0xFFFF];
var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;

for (var index = 0xD800; index <= 0xDBFF; index++) {
  count++; 
  var res = true;
  for (var indexC = 0; indexC < chars.length; indexC++) {
    var hex = decimalToHexString(index);
    try {
      encodeURI(String.fromCharCode(index, chars[indexC]));    
    } catch (e) { 
      if ((e instanceof URIError) === true) continue;
    }
    res = false;
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
