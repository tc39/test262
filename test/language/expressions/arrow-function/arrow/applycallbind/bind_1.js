// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using bind
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(a.bind(null, 1)() !== 1)
    $ERROR('Invocation of arrow function failed using fn.bind(null, 1)');

 if(a.bind(undefined, 1)() !== 1)
    $ERROR('Invocation of arrow function failed using fn.bind(undefined, 1)');

 if(a.bind(this, 1)() !== 1)
    $ERROR('Invocation of arrow function failed using fn.bind(this, 1)');

 if(a.bind({}, 1)() !== 1)
    $ERROR('Invocation of arrow function failed using fn.bind({}, 1)');
