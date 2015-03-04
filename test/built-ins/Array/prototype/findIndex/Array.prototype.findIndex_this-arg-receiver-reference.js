// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    Do not create a new object in each function call when receiver is a
    non-primitive value. See ECMA-262, Annex C.
---*/
var a = [];
[1, 2].findIndex(function() { a.push(this) }, {});
assert.sameValue(a[1], a[0]);
