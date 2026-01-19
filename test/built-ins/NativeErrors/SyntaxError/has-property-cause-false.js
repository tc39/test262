// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-native-error-types-used-in-this-standard-syntaxerror
description: >
    NativeError should not have a 'cause' property if the options argument is not an Object or lacks a 'cause' field.
info: |
    _NativeError_ ( _message_ [ , _options_ ] )

    1. If NewTarget is *undefined*, let _newTarget_ be the active function object; else let _newTarget_ be NewTarget.
    2. Let _O_ be ? OrdinaryCreateFromConstructor(_newTarget_, <code>"%<var>NativeError</var>.prototype%"</code>, « [[ErrorData]] »).
    4. Perform ? InstallErrorCause(_O_, _options_).

    InstallErrorCause (_O_, _options_)

    1. If _options_ is an Object and ? HasProperty(_options_, *"cause"*) is *true*, then
        a. Let _cause_ be ? Get(_options_, *"cause"*).
        b. Perform CreateNonEnumerableDataPropertyOrThrow(_O_, *"cause"*, _cause_).
    2. Return ~unused~.
features: [Reflect]
---*/
//EvalError
assert.sameValue(Reflect.has(EvalError(0, {}), "cause"), false, "cause property should not exist");

//RangeError
assert.sameValue(Reflect.has(RangeError(0, {}), "cause"), false, "cause property should not exist");

//ReferenceError
assert.sameValue(Reflect.has(ReferenceError(0, {}), "cause"), false, "cause property should not exist");

//SyntaxError
assert.sameValue(Reflect.has(SyntaxError(0, {}), "cause"), false, "cause property should not exist");

//TypeError
assert.sameValue(Reflect.has(TypeError(0, {}), "cause"), false, "cause property should not exist");

//URIError
assert.sameValue(Reflect.has(URIError(0, {}), "cause"), false, "cause property should not exist");
