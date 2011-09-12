// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * <LS> between chunks of one string not allowed
 *
 * @section 8.4, 7.8.4
 * @path 08_Types/8.4_The_String_Type/S8.4_A7.4.js
 * @description Insert <LS> between chunks of one string
 * @negative
 */

eval("var x = asdf\u2029ghjk");

