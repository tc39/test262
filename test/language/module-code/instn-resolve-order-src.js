// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Modules dependencies are resolved in source text order
esid: sec-moduledeclarationinstantiation
negative: ReferenceError
flags: [module]
---*/

import './instn-resolve-order-src-valid_.js';
import './instn-resolve-order-src-reference_.js';
import './instn-resolve-order-src-syntax_.js';
