// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-evaluatebody
description: >
    TypeError is thrown when a static field is initialized with an anonymous class extending a non-constructor.
info: |
    Runtime Semantics: EvaluateBody (_functionObject_, _argumentsList_)

    Initializer :
            `=` AssignmentExpression
    3. If IsAnonymousFunctionDefinition(|AssignmentExpression|) is *true*, then
        a. Let _value_ be ? NamedEvaluation of |Initializer| with argument _functionObject_.[[ClassFieldInitializerName]].

    Runtime Semantics: NamedEvaluation (_name_)

    ClassExpression : `class` ClassTail
    1. Let _value_ be ? ClassDefinitionEvaluation of |ClassTail| with arguments *undefined* and _name_.

    Runtime Semantics: ClassDefinitionEvaluation (_classBinding_, _className_)

    ClassTail : ClassHeritage? `{` ClassBody? `}`
    8.c Let _superclassRef_ be Completion(Evaluation of |ClassHeritage|).
    8.e Let _superclass_ be ? GetValue(? _superclassRef_).
    8.g. Else if IsConstructor(_superclass_) is *false*, then
        i. Throw a *TypeError* exception.
features: [class-static-fields-public, class]
---*/
assert.throws(TypeError, function() {
    class x {static field = class extends '' {};}
}, "TypeError is thrown when a static field is initialized with an anonymous class extending a non-constructor.")
