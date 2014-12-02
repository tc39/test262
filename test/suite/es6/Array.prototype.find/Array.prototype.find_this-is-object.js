// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.find should convert thisArg into an object
flags: [noStrict]
---*/

var dataTypes = [
    undefined,
    null,
    true,
    this,
    {},
    'string',
    0,
    function () {}
]

for (var i = 0, len = dataTypes.length; i < len; i++) {
	[1].find(function () {
		if (!(this instanceof Object)) {
		  $ERROR('#' + i + ': !(this instanceof Object). Actual: ' + typeof this);
		}
	}, dataTypes[i])
}
