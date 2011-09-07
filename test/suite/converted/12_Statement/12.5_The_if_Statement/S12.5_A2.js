// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * In the "if" Statement eval in Expression is admitted
 *
 * @id: S12.5_A2;
 * @section: 12.5;
 * @description: Checking by using eval "eval("true")";
 * @negative;
 */

if (eval("true")) $FAIL('#1: In the "if" Statement eval as Expression is admitted');

