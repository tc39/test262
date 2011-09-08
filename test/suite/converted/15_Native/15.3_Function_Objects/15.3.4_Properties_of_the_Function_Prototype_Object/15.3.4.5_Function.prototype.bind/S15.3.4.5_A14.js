// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @section: 15.3.4.5;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.5_Function.prototype.bind/S15.3.4.5_A14.js;
 * @description: If IsCallable(func) is false, then throw a TypeError exception.;
 * @negative: TypeError;
 */

Function.prototype.bind.call(null, {});


