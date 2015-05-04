// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using apply
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(a.apply(null, [1]) !== 1)
    $ERROR('Invocation of arrow function failed using fn.apply(null, [1])');

 if(a.apply(undefined, [1]) !== 1)
    $ERROR('Invocation of arrow function failed using fn.apply(undefined, [1])');

 if(a.apply(this, [1]) !== 1)
    $ERROR('Invocation of arrow function failed using fn.apply(this, [1])');

 if(a.apply({}, [1]) !== 1)
    $ERROR('Invocation of arrow function failed using fn.apply({}, [1])');
