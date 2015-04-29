// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
    Create a new object in each function call when receiver is a
    primitive value. See ECMA-262, Annex C.
flags: [noStrict]
includes: [compareArray.js]
---*/

// Create a new object in each function call when receiver is a
// primitive value. See ECMA-262, Annex C.
var a = [];
[1, 2].find(function() { a.push(this) }, "");
assert(a[0] !== a[1]);
