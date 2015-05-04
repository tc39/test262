// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function array manipulations
author: Nikhil Suryanrayanan
---*/

var arr = [1,2,3];
 var result = 0;

 arr.forEach(v => {
            result += v;
 });

 if(result !== 6){
    $ERROR("Array.forEach arrow function using arrow function as callback for every")
 }
