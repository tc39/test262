// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function array manipulations
author: Nikhil Suryanrayanan
---*/

var arr = ["check", 1];
 arr = arr.map(v => v + 1);
 if(arr[0] !== "check1" || arr[1] !== 2){
    $ERROR('Array.map function failed using arrow function as callback for every');
 }
