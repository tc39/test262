// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests properties of Intl object.
 */

// We keep Intl extensible and not frozen.
if (Object.isFrozen(Intl) === true) {
    $ERROR('isFrozen(Intl) returns true.');
}

if (Object.isExtensible(Intl) === false) {
    $ERROR('isExtensible(Intl) returns false.');
}

var falsey;

// Intl can't be constructed.
try {
    falsey = new Intl();
} catch (e) {
}

if (!!falsey) {
    $ERROR('Intl object should not be constructable.');
}

// Intl can't be called as a function.
try {
    /*jshint newcap:false*/
    falsey = Intl();
} catch (e) {
}

if (!!falsey) {
    $ERROR('Intl should not be callable.');
}

