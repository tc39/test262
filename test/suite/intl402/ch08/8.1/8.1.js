// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl object has proper constructors.
 */

if (Intl === undefined) {
    $ERROR('Intl object is undefined.');
}

if (typeof Intl.Collator !== 'function') {
    $ERROR('Intl.Collator is not a function.');
}

if (typeof Intl.NumberFormat !== 'function') {
    $ERROR('Intl.NumberFormat is not a function.');
}

if (typeof Intl.DateTimeFormat !== 'function') {
    $ERROR('Intl.DateTimeFormat is not a function.');
}

