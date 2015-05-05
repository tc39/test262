// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 25.2.3.3 GeneratorFunction.prototype[@@toStringTag]
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {};
if(gfoo.__proto__[Symbol.toStringTag] + "" !== "GeneratorFunction")
    $ERROR('The inital value of the @@toStringTag property is the string value "GeneratorFunction"');
