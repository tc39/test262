// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    IteratorStepValue throws when iteratorRecord.[[NextMethod]] is undefined.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingElement : BindingPattern Initializer?
    2. If _iteratorRecord_.[[Done]] is *false*, then
        a. Let _next_ be ? IteratorStepValue(_iteratorRecord_).

    IteratorStepValue (_iteratorRecord_)
    1. Let _result_ be ? IteratorStep(_iteratorRecord_).

    IteratorStep (_iteratorRecord_)
    1. Let _result_ be ? IteratorNext(_iteratorRecord_).

    IteratorNext (_iteratorRecord_, optional _value_)
    1. If _value_ is not present, then
        a. Let _result_ be Completion(Call(_iteratorRecord_.[[NextMethod]], _iteratorRecord_.[[Iterator]])).
    3. If _result_ is a throw completion, then
        a. Set _iteratorRecord_.[[Done]] to *true*.
        b. Return ? _result_.
features: [destructuring-binding, Symbol.iterator]
---*/
assert.throws(TypeError, function () {
    var [{} = 1] = { [Symbol.iterator] : function () {return {};}};
}, "IteratorStepValue throws when iteratorRecord.[[NextMethod]] is undefined.");
