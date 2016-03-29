// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Module dependencies are resolved following a depth-first strategy
esid: sec-moduledeclarationinstantiation
negative: ReferenceError
flags: [module]
---*/

import './instn-resolve-order-depth-child_.js';
import './instn-resolve-order-depth-syntax_.js';
