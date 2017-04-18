// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If B1 = 0xxxxxxxx ([0x00 - 0x7F]), without [uriReserved, #], return B1
es5id: 15.1.3.1_A2.2_T1
description: Complex tests, use RFC 3629
includes: [decimalToHexString.js]
---*/

var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;
var uriReserved = [";", "/", "?", ":", "@", "&", "=", "+", "$", ","];
l:
for (var indexB1 = 0x00; indexB1 <= 0x7F; indexB1++) {       
  count++;
  var hexB1 = decimalToHex2String(indexB1);
  var index = indexB1;  
  try {
    var hex = String.fromCharCode(index);
    for (var indexC = 0; indexC < uriReserved.length; indexC++) {
      if (hex === uriReserved[indexC]) continue l;        
    } 
    if (hex === "#") continue l;
    if (decodeURI("%" + hexB1) === hex) continue;
  } catch (e) {
    if (e instanceof Test262Error) throw e;
  }   
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
