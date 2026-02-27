// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    IteratorBindingInitialization of SingleNameBinding : BindingIdentifier Initializer? throws when ClassHeritage is not an object.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    BindingPattern : ArrayBindingPattern
    1. Let _iteratorRecord_ be ? GetIterator(_value_, ~sync~).
    2. Let _result_ be Completion(IteratorBindingInitialization of |ArrayBindingPattern| with arguments _iteratorRecord_ and _environment_).

    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    SingleNameBinding : BindingIdentifier Initializer?
    1. Let _bindingId_ be the StringValue of |BindingIdentifier|.
    3. Let _v_ be *undefined*.
    5. If |Initializer| is present and _v_ is *undefined*, then
        a. If IsAnonymousFunctionDefinition(|Initializer|) is *true*, then
            i. Set _v_ to ? NamedEvaluation of |Initializer| with argument _bindingId_.

    Runtime Semantics: NamedEvaluation (_name_)

    ClassExpression : `class` ClassTail
    1. Let _value_ be ? ClassDefinitionEvaluation of |ClassTail| with arguments *undefined* and _name_.

    Runtime Semantics: ClassDefinitionEvaluation (_classBinding_, _className_)

    ClassTail : ClassHeritage? `{` ClassBody? `}`
    8.c. Let _superclassRef_ be Completion(Evaluation of |ClassHeritage|).
    8.e. Let _superclass_ be ? GetValue(? _superclassRef_).
    8.g. Else if IsConstructor(_superclass_) is *false*, then
        i. Throw a *TypeError* exception.

    IsConstructor (_argument_)
    1. If _argument_ is not an Object, return *false*.
features: [destructuring-binding]
---*/
assert.throws(TypeError, function () {
    var [x = class extends x {}] = ''
}, "IteratorBindingInitialization of SingleNameBinding : BindingIdentifier Initializer? throws when ClassHeritage is not an object.");
