// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.5.3_A1.23;
 * @section: 7.5.3;
 * @assertion: The "protected" token can not be used as identifier in strict code;
 * @description: Checking if execution of "protected=1" fails in
 * strict code;
 * @negative
 * @onlyStrict
 */

"use strict";
var protected = 1;
