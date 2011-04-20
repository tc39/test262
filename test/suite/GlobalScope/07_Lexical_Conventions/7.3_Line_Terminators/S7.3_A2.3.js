// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


// Converted for Test262 from original Sputnik source

 // CHECK#1
if (eval("'\u2028str\u2028ing\u2028'") === "\u2028str\u2028ing\u2028") {
  $ERROR('#1: eval("\'\\u2028str\\u2028ing\\u2028\'") === "\\u2028str\\u2028ing\\u2028"');
}
 

