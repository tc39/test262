// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If IsPromise(promise) is false, throw a TypeError exception.
author: Nikhil Suryanarayanan
---*/

try{
    Promise.prototype.then.call({}, function(){});
    $ERROR("Error Expected");
}catch(e){
    if(!(e instanceof TypeError))
        $ERROR("TypeError Expected")
}
