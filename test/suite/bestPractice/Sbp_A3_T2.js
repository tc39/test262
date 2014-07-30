// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    FunctionDeclaration within a "do-while" Block in strict code is not
    allowed
description: >
    Declaring a function within a "do-while" loop that is  within a
    strict function
negative: SyntaxError
bestPractice: "http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls"
flags: [onlyStrict]
---*/

"use strict";
(function(){
   do {
     function __func(){};
   } while(0);
});
