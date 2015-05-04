// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function returning object
author: Nikhil Suryanrayanan
---*/

var obj_2 = value => ({ value: 1 });
if((obj_2('obj'))['value'] !== 1 )
    $ERROR('Obj_2 arrow function mapping to key');
