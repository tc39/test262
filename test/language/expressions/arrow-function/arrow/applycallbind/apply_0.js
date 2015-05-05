// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using apply
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(typeof a.apply !== "function")
     $ERROR('Apply is not a member exression on arrow function (x) => x');

 if(a.apply.length !== 2 )
     $ERROR('Lengh property of apply method should be 2')
