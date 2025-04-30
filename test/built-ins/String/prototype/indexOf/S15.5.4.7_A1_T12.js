// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T12
description: Argument is string, and instance is array of strings
---*/

var __instance = new Array('new', 'zoo', 'revue');

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(__instance.indexOf('new'), 0, '#1: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.indexOf(\'new\') === 0');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(__instance.indexOf('zoo'), 1, '#2: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.indexOf(\'zoo\') === 1');
//
//////////////////////////////////////////////////////////////////////////////
