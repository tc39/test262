// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype.throw(value)
author: Nikhil Suryanarayanan
---*/

var iter = (function *(){})();
if(typeof iter.__proto__.throw !== "function")
    $ERROR('Generator.next should be a function object');
