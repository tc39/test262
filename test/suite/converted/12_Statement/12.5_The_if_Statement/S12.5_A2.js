// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * In the "if" Statement eval in Expression is admitted
 *
 * @path 12_Statement/12.5_The_if_Statement/S12.5_A2.js
 * @description Checking by using eval "eval("true")"
 * @negative
 */

if (eval("true")) $FAIL('#1: In the "if" Statement eval as Expression is admitted');

