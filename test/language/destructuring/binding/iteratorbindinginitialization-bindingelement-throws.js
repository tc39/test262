// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    IteratorBindingInitialization throws TypeError trying to destructure nested array.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)
    
    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).
    
    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingElementList : BindingElementList `,` BindingElisionElement
    1. Perform ? IteratorBindingInitialization of |BindingElementList| with arguments _iteratorRecord_ and _environment_.
    2. Return ? IteratorBindingInitialization of |BindingElisionElement| with arguments _iteratorRecord_ and _environment_.

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)
    
    BindingElisionElement : Elision BindingElement
    2. Return ? IteratorBindingInitialization of |BindingElement| with arguments _iteratorRecord_ and _environment_.

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingElement : BindingPattern Initializer?
    1. Let _v_ be *undefined*.
    4. Return ? BindingInitialization of |BindingPattern| with arguments _v_ and _environment_.

    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).

    GetIterator (_obj_, _kind_)
    2. Else,
        a. Let _method_ be ? GetMethod(_obj_, %Symbol.iterator%).

    GetMethod (_V_, _P_)
    1. Let _func_ be ? GetV(_V_, _P_).

    GetV (_V_, _P_)
    1. Let _O_ be ? ToObject(_V_).
features: [destructuring-binding]
---*/
//Check #1
assert.throws(TypeError, function () {
    var [[x], y] = '';
}, "IteratorBindingInitialization throws TypeError trying to destructure nested array.");

//Check #2
assert.throws(TypeError, function () {
    var [x, [y]] = '';
}, "IteratorBindingInitialization throws TypeError trying to destructure nested array.");
