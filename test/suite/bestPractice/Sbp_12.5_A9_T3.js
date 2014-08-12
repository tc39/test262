// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function declaration within an "if" statement is not allowed
description: >
    Declaring function within an "if" statement that is declared
    within the function declaration
negative: SyntaxError
---*/

function(){

if (true) {
    function __func(){};
} else {
    function __func(){};
}

};
