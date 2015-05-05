// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using apply - 'this' is lexically bound
author: Nikhil Suryanarayanan
---*/

var b = {
    method: () => this
 }

 a = b.method;

 if(a.apply(null) !== this)
    $ERROR('Invocation of arrow function failed using fn.apply(null, [1])');

 if(a.apply(undefined) !== this)
    $ERROR('Invocation of arrow function failed using fn.apply(undefined, [1])');

 if(a.apply(this) !== this)
    $ERROR('Invocation of arrow function failed using fn.apply(this, [1])');

 if(a.apply({}) !== this)
    $ERROR('Invocation of arrow function failed using fn.apply({}, [1])');
