// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function array manipulations
author: Nikhil Suryanrayanan
---*/

var arr = [2,4,8,256,3*2];
 if(!arr.every(v => v%2 === 0)){
    $ERROR('Array.every failed using arrow function as callback for every')
 }
