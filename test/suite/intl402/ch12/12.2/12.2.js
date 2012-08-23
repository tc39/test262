// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the Intl.NumberFormat constructor has a length
 * property that equals 2.
 * @author: Roozbeh Pournader
 */

if (!Intl.NumberFormat.hasOwnProperty('length')) {
    $ERROR('Intl.NumberFormat has no length property');
}
    
if (Intl.NumberFormat.length != 2) {
    $ERROR('Intl.NumberFormat.length is not 2.');
}

