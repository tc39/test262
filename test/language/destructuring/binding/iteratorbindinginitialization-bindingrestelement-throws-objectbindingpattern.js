// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    IteratorBindingInitialization throws TypeError trying to destructure nested object.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    ArrayBindingPattern : `[` Elision? BindingRestElement `]`
    1. If |Elision| is present, then
        a. Perform ? IteratorDestructuringAssignmentEvaluation of |Elision| with argument _iteratorRecord_.
    2. Return ? IteratorBindingInitialization of |BindingRestElement| with arguments _iteratorRecord_ and _environment_.

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingRestElement : `...` BindingPattern
    1. Let _A_ be ! ArrayCreate(0).
    3.c.i Return ? BindingInitialization of |BindingPattern| with arguments _A_ and _environment_.

    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingElement : BindingPattern Initializer?
    1. Let _v_ be *undefined*.
    4. Return ? BindingInitialization of |BindingPattern| with arguments _v_ and _environment_.

    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ObjectBindingPattern
    1. Perform ? RequireObjectCoercible(_value_).
features: [destructuring-binding]
---*/
assert.throws(TypeError, function () {
    var [... [{}]] = ''
}, "IteratorBindingInitialization throws TypeError trying to destructure nested object.")
