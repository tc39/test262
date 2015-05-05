// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype.throw(value)
author: Nikhil Suryanarayanan
---*/

var iter = (function *(){})();
if(iter.__proto__.throw.length !== 1)
    $ERROR('Generator.next.length should have value 1');
