// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    In strict mode primitive value thisArg should not be coerced to an object.
flags: [onlyStrict]
---*/
var a = [];
[1, 2].findIndex(function() { "use strict"; a.push(this); }, "");
assert.sameValue(a[0], "");
assert.sameValue(a[1], a[0]);
