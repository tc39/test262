// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check type of various properties
 *
 * @path annexB/B.2.6.propertyCheck.js
 * @description Checking properties of the Date object (toGMTString)
 */

if (typeof Date.prototype.toGMTString !== "function")  $ERROR('#1: typeof Date.prototype.toGMTString === "function". Actual: ' + (typeof Date.prototype.toGMTString ));
if (typeof Date.prototype['toGMTString'] !== "function")  $ERROR('#2: typeof Date.prototype["toGMTString"] === "function". Actual: ' + (typeof Date.prototype["toGMTString"] ));




