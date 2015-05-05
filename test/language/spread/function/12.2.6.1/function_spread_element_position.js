// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Spread can be positioned anywhere in the formal parameter list
author: Nikhil Suryanarayanan
---*/

function foo(x,y){
    return x === 1 && y === 2;
 }

 if(eval('foo(...[1], 2)') !== true)
    $ERROR('Calling spread at first argument position inside eval');

 if(foo(1,...[2]) !== true)
    $ERROR('Calling spread at second argument position');

 if(foo(...[1],...[2]) !== true)
    $ERROR('Calling spread at first & second argument position');
