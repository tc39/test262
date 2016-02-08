// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If B = 11110xxx (n = 4) and (k + 2) + 9 >= length, throw URIError
es5id: 15.1.3.1_A1.6_T1
description: Complex tests. B = [0xF0 - 0xF7]
---*/

var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;

for (var index = 0xF0; index <= 0xF7; index++) {
  count++; 
  var str = "";
  var result = true;
  for (var len = 0; len < 9; len++) {
    var hex = decimalToHexString(index);
    try {
      decodeURI("%" + hex.substring(2) + str);      
    } catch (e) { 
      if ((e instanceof URIError) === true) continue;                
    }
    result = false;
    str = str + "1";
  }
  if (result !== true) {
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
