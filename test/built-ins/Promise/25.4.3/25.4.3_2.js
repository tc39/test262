// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Promise - 3.    4.    If promise does not have a [[PromiseStatus]]
    internal slot, then throw a TypeError exception.
author: Nikhil Suryanarayanan
---*/

try{
    Promise.call({}, function(f,r){});
    $ERROR('Error Expected');
}catch(e){
    if(!(e instanceof TypeError ))
        $ERROR('TypeError Expected')
}
