// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Generator.prototype.next() : If Type(generator) is not Object,
    then throw a TypeError exception.
author: Nikhil Suryanarayanan
---*/

var iter = (function *() {})();
try{
    iter.__proto__.next.call(undefined, 1);
    $ERROR('Error Expected');
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR('GeneratorResume : If Type(generator) is not Object, then throw a TypeError exception')
}
