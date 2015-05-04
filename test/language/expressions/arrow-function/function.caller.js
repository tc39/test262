// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: function.caller
---*/

function bar(){
    var fn = () => fn.caller;
    return fn();
 }

 if(bar() !== bar)
    $ERROR("Function.caller is incorrect inside Arrow Function");
