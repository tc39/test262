// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check type of various properties
 *
 * @path annexB/B.2.5.propertyCheck.js
 * @description Checking properties of the Date object (setYear)
 */

if (typeof Date.prototype.setYear !== "function")  $ERROR('#1: typeof Date.prototype.setYear === "function". Actual: ' + (typeof Date.prototype.setYear ));
if (typeof Date.prototype['setYear'] !== "function")  $ERROR('#2: typeof Date.prototype["setYear"] === "function". Actual: ' + (typeof Date.prototype["setYear"] ));



