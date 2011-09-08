// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * array.forEach can be frozen while in progress
 *
 * @section: 15.4.4.18;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.18_Array_prototype_forEach/S15.4.4.18_A1.js;
 * @description: Freezes array.forEach during a forEach to see if it works;
 */

['z'].forEach(function(){ Object.freeze(Array.prototype.forEach); });

