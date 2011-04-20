// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


// Converted for Test262 from original Sputnik source

 //CHECK#1
try {
  var z = (1 /= 1);
  $ERROR('#1.1: 1 /= 1 throw ReferenceError (or SyntaxError). Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 /= 1 throw ReferenceError (or SyntaxError). Actual: ' + (e));  
  } else {
    var z = (1 /= 1);
  }
}
 

