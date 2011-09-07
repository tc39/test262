// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "protected" token can not be used as identifier in strict code
 *
 * @id: S7.5.3_A1.23;
 * @section: 7.5.3;
 * @description: Checking if execution of "protected=1" fails in
 * strict code;
 * @negative;
 */

"use strict";
protected = 1;

