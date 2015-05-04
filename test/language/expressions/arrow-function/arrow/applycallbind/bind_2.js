// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using bind
author: Nikhil Suryanarayanan
---*/

var b = {
    method: () => this
 }

 a = b.method;

 if(a.bind(null)() !== this)
    $ERROR('Invocation of arrow function failed using fn.bind(null, 1)');

 if(a.bind(undefined)() !== this)
    $ERROR('Invocation of arrow function failed using fn.bind(undefined, 1)');

 if(a.bind(this)() !== this)
    $ERROR('Invocation of arrow function failed using fn.bind(this, 1)');

 if(a.bind({})() !== this)
    $ERROR('Invocation of arrow function failed using fn.bind({}, 1)');
