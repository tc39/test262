// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator.prototype [ @@iterator ]
author: Nikhil Suryanarayanan
---*/

var iter = (function *(){})();
if(typeof iter.__proto__[Symbol.iterator] !== "function")
    $ERROR('[Symbol.iterator] is undefined on Generator.prototype');
