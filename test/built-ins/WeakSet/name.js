// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.1.1
esid: sec-weakset-iterable
description: >
    WeakSet ( [ iterable ] )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
    WeakSet.name, 'WeakSet',
    'The value of `WeakSet.name` is "WeakSet"'
);

verifyNotEnumerable(WeakSet, 'name');
verifyNotWritable(WeakSet, 'name');
verifyConfigurable(WeakSet, 'name');
