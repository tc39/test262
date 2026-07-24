// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindinginitialization
description: >
    If the getter of _value_ throws, BindingInitialization throws.
info: |
    Runtime Semantics: BindingInitialization (_value_, _environment_)

    ObjectBindingPattern : `{` BindingRestProperty `}`
    1. Let _excludedNames_ be a new empty List.
    2. Return ? RestBindingInitialization of |BindingRestProperty| with arguments _value_, _environment_, and _excludedNames_.

    ObjectBindingPattern : `{` BindingPropertyList `,` BindingRestProperty `}`
    1. Let _excludedNames_ be ? PropertyBindingInitialization of |BindingPropertyList| with arguments _value_ and _environment_.
    2. Return ? RestBindingInitialization of |BindingRestProperty| with arguments _value_, _environment_, and _excludedNames_.

    Runtime Semantics: RestBindingInitialization (_value_, _environment_, _excludedNames_)
    1. Let _lhs_ be ? ResolveBinding(StringValue of |BindingIdentifier|, _environment_).
    2. Let _restObj_ be OrdinaryObjectCreate(%Object.prototype%).
    3. Perform ? CopyDataProperties(_restObj_, _value_, _excludedNames_).

    CopyDataProperties (_target_, _source_, _excludedItems_)
    2. Let _from_ be ! ToObject(_source_).
    3. Let _keys_ be ? _from_.[[OwnPropertyKeys]]().
    4. For each element _nextKey_ of _keys_, do
      a. Let _excluded_ be *false*.
      c. If _excluded_ is *false*, then
        i. Let _desc_ be ? <emu-meta effects="user-code">_from_.[[GetOwnProperty]]</emu-meta>(_nextKey_).
        ii. If _desc_ is not *undefined* and _desc_.[[Enumerable]] is *true*, then
            1. Let _propValue_ be ? Get(_from_, _nextKey_).
features: [destructuring-binding]
---*/
//Check #1
assert.throws(Test262Error, function () {
    var {...x} = {get 1 () {throw new Test262Error}};
}, "If the getter of _value_ throws, RestBindingInitialization performed by ObjectBindingPattern: {BindingRestProperty} throws.");

//Check #2
assert.throws(Test262Error, function () {
    var { y , ... x } = { get 1 ( ) { throw new Test262Error ; } } ;
}, "If the getter of _value_ throws, RestBindingInitialization performed by ObjectBindingPattern: {BindingPropertyList, BindingRestProperty} throws.");
