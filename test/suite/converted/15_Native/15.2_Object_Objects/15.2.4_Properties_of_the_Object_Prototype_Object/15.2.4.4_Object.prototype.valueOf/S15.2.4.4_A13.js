// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Let O be the result of calling ToObject passing the this value as the argument.
 *
 * @id: S15.2.4.4_A13;
 * @section: 15.2.4.4;
 * @description: Checking Object.prototype.valueOf invoked by the 'call' property.;
 * @negative;
 */

Object.prototype.valueOf.call(null);

