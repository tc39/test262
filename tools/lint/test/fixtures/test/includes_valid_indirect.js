^ expected errors | v input
// Copyright (C) 2019 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
includes: [detachArrayBuffer.js, usesDetachArrayBuffer.js]
---*/

// This file doesn't reference any names defined by the first "include" file,
// but the second "include" file does.

modifiedDetachArrayBuffer();
