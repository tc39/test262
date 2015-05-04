// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Multiple Yield *
author: Nikhil Suryanarayanan
---*/

var obj = {
    [Symbol.iterator]: function(){
        return {
            a : 0,
            next: function() {
                if(this.a === 3) {
                    this.a = 0;
                    return {value: this, done: true}
                }
                return {value: this.a++, done: false}
            }
        }
    }
};
function *gfoo(){
    return yield * yield * yield ;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(obj);
if(iterresult.value !== 0 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 0, done: false}');
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
