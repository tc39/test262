// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: FunctionDeclaration within a "for-in" Statement is not allowed
description: >
    Declaring function within a "for-in" Statement that is within
    function declaration
negative: SyntaxError
---*/

function(){

for(x in this){
    function __func(){};
};

};
