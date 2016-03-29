// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Abrupt completion during module evaluation precludes further evaluation
esid: sec-moduleevaluation
info: |
    [...]
    6. For each String required that is an element of
       module.[[RequestedModules]] do,
       a. Let requiredModule be ? HostResolveImportedModule(module, required).
       b. Perform ? requiredModule.ModuleEvaluation().
negative: TypeError
flags: [module]
---*/

import './eval-rqstd-abrupt-err-type_.js';
import './eval-rqstd-abrupt-err-uri_.js';

throw new RangeError();
