// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    Holes are not skipped
---*/
var count = 0;
[,,,,,].find(function() { count++; return false; });
assert.sameValue(count, 5);
