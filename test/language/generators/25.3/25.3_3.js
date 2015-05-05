// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype.next(value)
author: Nikhil Suryanarayanan
---*/

var iter = (function *(){})();
if(iter.__proto__.next.length !== 1)
    $ERROR('Generator.next.length should have value 1');
