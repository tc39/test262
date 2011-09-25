// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.18_A1;
 * @section: 15.4.4.18;
 * @assertion: array.forEach can be frozen while in progress
 * @description: Freezes array.forEach during a forEach to see if it works
*/

['z'].forEach(function(){ Object.freeze(Array.prototype.forEach); });
