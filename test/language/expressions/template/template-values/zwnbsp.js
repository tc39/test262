// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.1
description: >
    The zero width no-break space format-control character may be used within
    template literals.
---*/

assert.sameValue(
  `\uFEFFtest`, '﻿test', 'Specified via unicode escape sequence'
);
assert.sameValue(
  `﻿test`, '﻿test', 'Specified via literal character'
);
