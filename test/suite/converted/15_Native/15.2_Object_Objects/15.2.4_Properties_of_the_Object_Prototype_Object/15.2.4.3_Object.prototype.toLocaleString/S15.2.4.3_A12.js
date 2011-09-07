// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @id: S15.2.4.3_A12;
 * @section: 15.2.4.3;
 * @description: Let O be the result of calling ToObject passing the this value as the argument.;
 * @negative;
 */

Object.prototype.toLocaleString.call(undefined);

