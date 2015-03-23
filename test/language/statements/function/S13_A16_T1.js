// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Any separators are admitted between declaration chunks
es5id: 13_A16
description: Inserting separators between declaration chunks
flags: [noStrict]
---*/

function
x
(
)
{
}
;

x();

function                                                    y                                   (                                          )                                              {};

y();

function

z

(

)

{
    
}

;

z();

eval("function\u0009\u2029w(\u000C)\u00A0{\u000D};");

w();
