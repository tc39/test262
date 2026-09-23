// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    IteratorBindingInitialization throws ReferenceError when evaluating an unresolvable Initializer.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    BindingElement : BindingPattern Initializer?
    1. Let _v_ be *undefined*.
    2. If _iteratorRecord_.[[Done]] is *false*, then
        a. Let _next_ be ? IteratorStepValue(_iteratorRecord_).
        b. If _next_ is not ~done~, then
            i. Set _v_ to _next_.
    3. If |Initializer| is present and _v_ is *undefined*, then
        a. Let _defaultValue_ be ? Evaluation of |Initializer|.
        b. Set _v_ to ? GetValue(_defaultValue_).

    Runtime Semantics: Evaluation
    IdentifierReference : Identifier
    1. Return ? ResolveBinding(StringValue of |Identifier|).

    ResolveBinding (_name_, optional _env_)
    4. Return ? GetIdentifierReference(_env_, _name_, _strict_).

    GetIdentifierReference (_env_, _name_, _strict_)
    1. If _env_ is *null*, then
        a. Return the Reference Record { [[Base]]: ~unresolvable~, [[ReferencedName]]: _name_, [[Strict]]: _strict_, [[ThisValue]]: ~empty~ }.
    4. Else,
        a. Let _outer_ be _env_.[[OuterEnv]].
        b. Return ? GetIdentifierReference(_outer_, _name_, _strict_).      
        
    GetValue (_V_)
    2. If IsUnresolvableReference(_V_) is *true*, throw a *ReferenceError* exception.

    IsUnresolvableReference (_V_)
    1. If _V_.[[Base]] is ~unresolvable~, return *true*; otherwise return *false*.
features: [destructuring-binding]
---*/
assert.throws(ReferenceError, function () {
    var [{} = x] = ''
}, "IteratorBindingInitialization throws ReferenceError when evaluating an unresolvable Initializer.")
