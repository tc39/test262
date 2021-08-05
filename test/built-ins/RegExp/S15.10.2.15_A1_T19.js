// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The internal helper function CharacterRange takes two CharSet parameters A and B and performs the
    following:
    2. Let a be the one character in CharSet A.
    3. Let b be the one character in CharSet B.
    4. Let i be the character value of character a.
    5. Let j be the character value of character b.
    6. If i > j, throw a SyntaxError exception.
es5id: 15.10.2.15_A1_T19
description: >
    Checking if execution of "/[\x0061d-G]/.exec("1")" leads to
    throwing the correct exception
---*/

//CHECK#1
try {
  throw new Test262Error('#1.1: /[\\x0061d-G]/.exec("1") throw SyntaxError. Actual: ' + (new RegExp("[\\x0061d-G]").exec("1")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    throw new Test262Error('#1.2: /[\\x0061d-G]/.exec("1") throw SyntaxError. Actual: ' + (e));
  }
}
