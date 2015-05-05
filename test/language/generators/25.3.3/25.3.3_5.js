// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    GeneratorResume - If generator does not have a [[GeneratorState]]
    internal slot, then throw a TypeError exception
author: Nikhil Suryanarayanan
---*/

var iter = (function *() {})();
try{
    iter.__proto__.throw.call({}, 1);
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR('GeneratorResume : If Type(generator) is not Object, then throw a TypeError exception')
}
