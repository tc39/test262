// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this binding test
author: Nikhil Suryanarayanan
---*/

var obj = {
    binder: function(){return () => this; }
 }

 if(obj.binder()() !== obj)
    $ERROR('This binding test failed for obj.binder()()');


 var test = {
    check1:obj.binder(),
    check2:obj.binder
 }

 if(test.check1() !== obj )
    $ERROR('test.check1() should return obj');

if(test.check2()() !== test)
    $ERROR('test.check2()() should return test');
