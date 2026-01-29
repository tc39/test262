// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set-constructor
description: >
    Verify Set constructor behavior with null, undefined, or non-iterable arguments.
info: |
    Set ( [ _iterable_ ] )

    4. If _iterable_ is either *undefined* or *null*, return _set_.
    7. Let _iteratorRecord_ be ? GetIterator(_iterable_, ~sync~).

    GetIterator (_obj_,_kind_)

    2. Else,
        a. Let _method_ be ? GetMethod(_obj_, %Symbol.iterator%).
    3. If _method_ is *undefined*, throw a *TypeError* exception.
features: [Set]
---*/
assert.sameValue(new Set().size, 0, "The value of `new Set().size` is `0`");
assert.sameValue(new Set(undefined).size, 0, "The value of `new Set(undefined).size` is `0`");
assert.sameValue(new Set(null).size, 0, "The value of `new Set(null).size` is `0`");
assert.throws(TypeError, function () {
    new Set({[Symbol.iterator] : undefined});
}, "If Symbol.iterator method is undefined, Set constructor throws TypeError.")
