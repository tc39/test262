// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.3.1.5    Generator.prototype [ @@toStringTag ] - The initial
    value of the @@toStringTag property is the string value
    "Generator".
author: Nikhil Suryanarayanan
---*/

var iter = (function *(){})();
if(iter.__proto__[Symbol.toStringTag] + ""  !== "Generator")
    $ERROR('The initial value of the @@toStringTag property is the string value "Generator"');
