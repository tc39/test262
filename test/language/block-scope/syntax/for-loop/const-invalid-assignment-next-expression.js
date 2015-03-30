// Copyright (C) 2015 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    const: invalid assignment in next expression
negative: TypeError
---*/

for (const i = 0; i < 1; i++) { }
