// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes does not skip holes; instead it treates them as undefined
author: Domenic Denicola
---*/

assert([,,,].includes(undefined), 'Expected array with many holes to contain undefined');
assert(['a', 'b',, 'd'].includes(undefined), 'Expected array with a single hole to contain undefined');
