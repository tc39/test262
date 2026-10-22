// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-iteratorbindinginitialization
description: >
    IteratorBindingInitialization throws TypeError when an ArrayBindingPattern function parameter receives undefined.
info: |
    Runtime Semantics: Evaluation

    NewExpression : `new` NewExpression
    1. Return ? EvaluateNew(|NewExpression|, ~empty~)

    EvaluateNew (_constructExpr_, _arguments_)

    1. Let _ref_ be ? Evaluation of _constructExpr_.
    2. Let _constructor_ be ? GetValue(_ref_).
    3. If _arguments_ is ~empty~, then
        a. Let _argList_ be a new empty List.
    6. Return ? Construct(_constructor_, _argList_).

    Construct (_F_: a constructor, optional _argumentsList_, optional _newTarget_: a constructor)

    1. If _newTarget_ is not present, set _newTarget_ to _F_.
    2. If _argumentsList_ is not present, set _argumentsList_ to a new empty List.
    3. Return ? _F_.[[Construct]](_argumentsList_, _newTarget_).

    [[Construct]] (_argumentsList_, _newTarget_)

    8. Let _result_ be Completion(OrdinaryCallEvaluateBody(_F_, _argumentsList_)).

    OrdinaryCallEvaluateBody (_F_, _argumentsList_)

    1. Return ? EvaluateBody of _F_.[[ECMAScriptCode]] with arguments _F_ and _argumentsList_.

    Runtime Semantics: EvaluateBody ( _functionObject_, _argumentsList_)

    FunctionBody : FunctionStatementList
    1. Return ? EvaluateFunctionBody of |FunctionBody| with arguments _functionObject_ and _argumentsList_.

    Runtime Semantics: EvaluateFunctionBody (_functionObject_, _argumentsList_)

    FunctionBody : FunctionStatementList
    1. Perform ? FunctionDeclarationInstantiation(_functionObject_, _argumentsList_).

    FunctionDeclarationInstantiation (_func_, _argumentsList_)

    4. Let _formals_ be _func_.[[FormalParameters]].
    24. Let _iteratorRecord_ be CreateListIteratorRecord(_argumentsList_).
    26. Else,
        a. Perform ? IteratorBindingInitialization of _formals_ with arguments _iteratorRecord_ and _env_.
        
    Runtime Semantics: IteratorBindingInitialization (_iteratorRecord_, _environment_)

    FormalParameters : FormalParameterList `,` FunctionRestParameter
    1. Perform ? IteratorBindingInitialization of |FormalParameterList| with arguments _iteratorRecord_ and _environment_.

    BindingElement : BindingPattern Initializer?
    1. Let _v_ be *undefined*.
    2. If _iteratorRecord_.[[Done]] is *false*, then
        a. Let _next_ be ? IteratorStepValue(_iteratorRecord_).
        b. If _next_ is not ~done~, then
            i. Set _v_ to _next_.
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
assert.throws(TypeError, function () {
    new function ([], ...x) {};
}, "IteratorBindingInitialization throws TypeError when an ArrayBindingPattern function parameter receives undefined.")
