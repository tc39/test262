// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using call
author: Nikhil Suryanarayanan
---*/

var a = (x) => x;

 if(typeof a.call !== "function")
     $ERROR('Call is not a member exression on arrow function (x) => x')

 if(a.call.length !== 1 )
     $ERROR('Lengh property of call method should be 1')
