// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using apply - 'this' is lexically bound
author: Nikhil Suryanarayanan
---*/

var b = {
    method1: (arg) => {this.x = arg},
    method2: (arg) => {return (arg) => {this.y = arg}},
    method3: function(arg) {return (arg) => {this.z = arg}}
 }

 b.method1.apply({}, ["arg1"]);
 b.method2().apply({}, ["arg2"]);
 b.method3().apply({}, ["arg3"]);

 if(this.x !== "arg1" || this.y !== "arg2" || b.z !== "arg3")
    $ERROR('this binding was incorrect. Calling arrownFn.apply({}, "arg")');
