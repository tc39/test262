// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If B = 11110xxx (n = 4) and C != 10xxxxxx (C - first of octets after B),
    throw URIError
es5id: 15.1.3.1_A1.15_T5
description: Complex tests. B = [0xF0 - 0x0F7], C = [0xC0, 0xFF]
includes: [decimalToHexString.js]
---*/

var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;

for (var indexB = 0xF0; indexB <= 0xF7; indexB++) {
  count++; 
  var hexB = decimalToHexString(indexB); 
  var result = true;
  for (var indexC = 0xC0; indexC <= 0xFF; indexC++) {
    var hexC = decimalToHexString(indexC);  
    try {
      decodeURI("%" + hexB.substring(2) + "%A0" + "%" + hexC.substring(2) + "%A0");
    } catch (e) { 
      if ((e instanceof URIError) === true) continue;                
    }
    result = false;
  }
  if (result !== true) {
    if (indexO === 0) { 
      indexO = indexB;
    } else {
      if ((indexB - indexP) !== 1) {             
        if ((indexP - indexO) !== 0) {
          var hexP = decimalToHexString(indexP);
          var hexO = decimalToHexString(indexO);
          $ERROR('#' + hexO + '-' + hexP + ' ');
        } 
        else {
          var hexP = decimalToHexString(indexP);
          $ERROR('#' + hexP + ' ');
        }  
        indexO = indexB;
      }         
    }
    indexP = indexB;
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
