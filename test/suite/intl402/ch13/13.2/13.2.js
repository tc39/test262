// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the Intl.DateTimeFormat constructor has a length
 * property that equals 2.
 * @author: Roozbeh Pournader
 */

if (!Intl.DateTimeFormat.hasOwnProperty('length')) {
    $ERROR('Intl.DateTimeFormat has no length property');
}
    
if (Intl.DateTimeFormat.length != 2) {
    $ERROR('Intl.DateTimeFormat.length is not 2.');
}

