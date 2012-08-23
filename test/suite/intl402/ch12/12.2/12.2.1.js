// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the Intl.DateTimeFormat prototype object exists and
 * is not writable, enumerable, or configurable.
 * @author: Roozbeh Pournader
 */

var desc;

if (!Intl.DateTimeFormat.hasOwnProperty('prototype')) {
    $ERROR('Intl.DateTimeFormat has no prototype property');
}

desc = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat, 'prototype');
if (desc.writable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is writable.');
}
if (desc.enumerable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is enumerable.');
}
if (desc.configurable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is configurable.');
}

