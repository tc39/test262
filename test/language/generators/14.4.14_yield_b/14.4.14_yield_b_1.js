// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    yield * AssignmentExpression - If Type(iterator) is not Object,
    then throw a TypeError exception
author: Nikhil Suryanarayanan
---*/

var obj = {
    [Symbol.iterator](){
        return 1;
    }
}
function *gfoo() {
    yield * obj;
}
var iter = gfoo();
try{
    iter.next();
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR('TypeError Expected')
}
