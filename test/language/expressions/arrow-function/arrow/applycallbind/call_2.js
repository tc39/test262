// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using call
author: Nikhil Suryanarayanan
---*/

var b = {
    method: () => this
 }

 a = b.method;

 if(a.call(null) !== this)
    $ERROR('Invocation of arrow function failed using fn.call(null, 1)');

 if(a.call(undefined) !== this)
    $ERROR('Invocation of arrow function failed using fn.call(undefined, 1)');

 if(a.call(this) !== this)
    $ERROR('Invocation of arrow function failed using fn.call(this, 1)');

 if(a.call({}) !== this)
    $ERROR('Invocation of arrow function failed using fn.call({}, 1)');
