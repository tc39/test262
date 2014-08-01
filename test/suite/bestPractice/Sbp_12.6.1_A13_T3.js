// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: FunctionDeclaration within a "do-while" Block is not allowed
description: >
    Declaring a function within a "do-while" loop that is within a
    function declaration itself
negative: SyntaxError
---*/

function(){

do{
    function __func(){};
}while(0);

};
