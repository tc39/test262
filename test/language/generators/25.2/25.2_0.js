// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    GeneratorFunction.length should be value:1 and { [[Writable]]:
    false, [[Enumerable]]: false, [[Configurable]]: true }
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {};
var generatorFunction = gfoo.constructor;

if(generatorFunction.length !== 1)
    $ERROR('GeneratorFunction.length should be value:1 and { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }');
