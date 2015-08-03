// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this argument is passed as null
es6id: 22.1.2.1
---*/

assert.throws(TypeError, function(){Array.from.call(null);});
