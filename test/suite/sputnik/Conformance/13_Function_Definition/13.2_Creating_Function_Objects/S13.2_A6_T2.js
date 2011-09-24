// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description check if "arguments" poisoning poisons
 * getOwnPropertyDescriptor too
 * @onlyStrict
 */
Object.getOwnPropertyDescriptor(function(){}, 'arguments');
