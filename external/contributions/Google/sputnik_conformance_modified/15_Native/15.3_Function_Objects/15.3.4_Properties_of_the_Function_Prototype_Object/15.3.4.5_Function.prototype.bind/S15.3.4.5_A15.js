// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.5_A15;
* @section: 15.3.4.5;
* @assertion: If IsCallable(func) is false, then throw a TypeError exception.
* @negative
* @errortype: TypeError;
*/

Function.prototype.bind.call({}, {});

