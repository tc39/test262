// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using call
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(a.call(null, 1) !== 1)
    $ERROR('Invocation of arrow function failed using fn.call(null, 1)');

 if(a.call(undefined, 1) !== 1)
    $ERROR('Invocation of arrow function failed using fn.call(undefined, 1)');

 if(a.call(this, 1) !== 1)
    $ERROR('Invocation of arrow function failed using fn.call(this, 1)');

 if(a.call({}, 1) !== 1)
    $ERROR('Invocation of arrow function failed using fn.call({}, 1)');
