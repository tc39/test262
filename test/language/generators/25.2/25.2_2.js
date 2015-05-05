// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: GeneratorFunction.__proto__ does not equal Function.prototype
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {};
if(gfoo.__proto__ === Function.prototype)
    $ERROR('gfoo.__proto__ does not equal Function.prototype');
