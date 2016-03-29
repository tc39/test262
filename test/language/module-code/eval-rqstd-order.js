// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Requested modules are evaluated prior to the requesting module in source
    code order
esid: sec-moduleevaluation
info: |
    [...]
    6. For each String required that is an element of
       module.[[RequestedModules]] do,
       a. Let requiredModule be ? HostResolveImportedModule(module, required).
       b. Perform ? requiredModule.ModuleEvaluation().
    [...]
    16. Let result be the result of evaluating module.[[ECMAScriptCode]].
    [...]
includes: [fnGlobalObject.js]
flags: [module]
---*/

assert.sameValue(fnGlobalObject().test262, '12345678');

import {} from './eval-rqstd-order-1_.js';

import './eval-rqstd-order-2_.js';

import * as ns1 from './eval-rqstd-order-3_.js';

import dflt1 from './eval-rqstd-order-4_.js';

export {} from './eval-rqstd-order-5_.js';

import dflt2, {} from './eval-rqstd-order-6_.js';

export * from './eval-rqstd-order-7_.js';

import dflt3, * as ns from './eval-rqstd-order-8_.js';
