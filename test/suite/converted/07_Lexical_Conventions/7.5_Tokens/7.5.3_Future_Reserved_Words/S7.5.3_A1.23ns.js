// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "protected" token can be used as identifier in non-strict code
 *
 * @section: 7.5.3;
 * @path: 07_Lexical_Conventions/7.5_Tokens/7.5.3_Future_Reserved_Words/S7.5.3_A1.23ns.js;
 * @description: Checking if execution of "protected=1" succeeds in non-strict code;
 */

new Function('protected = 1');

