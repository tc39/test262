// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using bind
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(typeof a.bind !== "function")
     $ERROR('Bind is not a member exression on arrow function (x) => x')

 if(a.bind.length !== 1 )
     $ERROR('Lengh property of bind method should be 1')
