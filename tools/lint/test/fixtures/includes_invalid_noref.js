INCLUDES
^ expected errors | v input
// Copyright (C) 2019 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
includes: [detachArrayBuffer.js]
---*/

// This file doesn't reference any names defined by the "include" file. It
// contains some references that don't match exactly in order to verify that
// the linter is not susceptible to false positives.
DETACHBUFFER();
$DETACHBUFFE();
$DETACH_BUFFER();
