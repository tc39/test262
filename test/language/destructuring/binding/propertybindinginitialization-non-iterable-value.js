// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    If _value_ is non-iterable, BindingInitialization for the nested ArrayBindingPattern throws TypeError.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    ObjectBindingPattern :
        `{` BindingPropertyList `}`
        `{` BindingPropertyList `,` `}`
    1. Perform ? PropertyBindingInitialization of |BindingPropertyList| with arguments _value_ and _environment_.

    ObjectBindingPattern : `{` BindingPropertyList `,` BindingRestProperty `}`
    1. Let _excludedNames_ be ? PropertyBindingInitialization of |BindingPropertyList| with arguments _value_ and _environment_.

    Runtime Semantics: PropertyBindingInitialization (_value_,_environment_)

    BindingPropertyList : BindingPropertyList `,` BindingProperty
    2. Let _nextNames_ be ? PropertyBindingInitialization of |BindingProperty| with arguments _value_ and _environment_.
    
    BindingProperty : PropertyName `:` BindingElement
    1. Let _P_ be ? Evaluation of |PropertyName|.
    2. Perform ? KeyedBindingInitialization of |BindingElement| with arguments _value_, _environment_, and _P_.
    
    Runtime Semantics: KeyedBindingInitialization (_value_, _environment_, _propertyName_)

    BindingElement : BindingPattern Initializer?
    1. Let _v_ be ? GetV(_value_, _propertyName_).
    3. Return ? BindingInitialization of |BindingPattern| with arguments _v_ and _environment_.

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
    var {x: []} = 1;
}, "If _value_ is non-iterable, BindingInitialization of the nested ArrayBindingPattern throws TypeError.")

//Check #2
assert.throws(TypeError, function () {
    var {x: [], ...y} = 1;
}, "If _value_ is non-iterable, BindingInitialization of the nested ArrayBindingPattern throws TypeError.")
