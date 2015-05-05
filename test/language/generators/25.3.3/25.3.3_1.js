// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    2.    If generator does not have a [[GeneratorState]] internal
    slot, then throw a TypeError exception.
author: Nikhil Suryanarayanan
---*/

var gfoo = function*() {}
var iter = (function *() {})();
try{
    iter.__proto__.next.call(gfoo, 1);
    $ERROR('Error Expected');
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR('If generator does not have a [[GeneratorState]] internal slot, then throw a TypeError exception')
}
