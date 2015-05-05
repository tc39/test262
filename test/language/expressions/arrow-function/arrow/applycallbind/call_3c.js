// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using call
author: Nikhil Suryanarayanan
---*/

var b = {
    method1: (arg) => {this.x = arg},
    method2: (arg) => {return (arg) => {this.y = arg}},
    method3: function(arg) {return (arg) => {this.z = arg}}
 }

 b.method1.call(this, "arg1");
 b.method2().call(this, "arg2");
 b.method3().call(this, "arg3");

 if(this.x !== "arg1" || this.y !== "arg2" || b.z !== "arg3")
    $ERROR('this binding was incorrect. Calling arrownFn.apply({}, "arg")');
