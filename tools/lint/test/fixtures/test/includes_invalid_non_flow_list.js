INCLUDES
^ expected errors | v input
// Copyright (C) 2019 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
includes:
    - propertyHelper.js
---*/

// This file uses "includes" as non flow style
verifyConfigurable(Object, '');
