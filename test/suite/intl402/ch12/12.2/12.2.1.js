// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the Intl.NumberFormat prototype object exists and
 * is not writable, enumerable, or configurable.
 * @author: Roozbeh Pournader
 */

var desc;

if (!Intl.NumberFormat.hasOwnProperty('prototype')) {
    $ERROR('Intl.NumberFormat has no prototype property');
}

desc = Object.getOwnPropertyDescriptor(Intl.NumberFormat, 'prototype');
if (desc.writable === true) {
    $ERROR('Intl.NumberFormat.prototype is writable.');
}
if (desc.enumerable === true) {
    $ERROR('Intl.NumberFormat.prototype is enumerable.');
}
if (desc.configurable === true) {
    $ERROR('Intl.NumberFormat.prototype is configurable.');
}

