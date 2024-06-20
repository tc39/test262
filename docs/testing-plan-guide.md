# Testing plan guide

#### What is this document

[ECMAScript proposals](https://github.com/tc39/proposals/) that reach Stage 2.7 in the [TC39 Process](https://tc39.es/process-document/) need to have sufficient tests integrated to the Test262 test suite. To track the added tests, ensure that they are complete, and to get an idea of the amount of work needed, it's often helpful to have a testing plan outlining what exactly should be tested.

This document is a guide intended to help proposal authors and test262 contributors create such testing plans. It includes detailed instructions for contributors less familiar with test262 testing or less familiar with composing a testing plan, as well as a [checklist](./#testing-plan-checklist) that may also be helpful to contributors more experienced with Test262 tests and testing plans.

In the end of this document, in addition to the [checklist](./#testing-plan-checklist), there are also some [links](./#see-also) with further material.


## Getting started creating a testing plan for an ECMAScript proposal.

If you are looking for an ECMAScript proposal to write a testing plan for, we try to have [open issues asking for testing plans](https://github.com/tc39/test262/issues?q=is%3Aissue+is%3Aopen+testing+plan), for proposals in Stage 2.7 or 3. You can also see the [TC39 document](https://github.com/tc39/proposals/) tracking the status of all the open proposals, in case we missed something, in which case please create the missing testing plan issue.

Before you start it's wise to communicate with proposal champion(s) in case they already have a testing plan and/or tests ready.

Understand the proposal text:

- read the explainer in the proposal repo's README, and
- read the slides from any TC39 plenary presentation.

If you're unfamiliar with ECMAScript spec text, read this guide on [how to read the ECMAScript Specification](https://timothygu.me/es-howto/).

Read the proposal's rendered specification.

Finally, list all the separate tests that need to be written, as explained in the following sections.

### Tests for new APIs

#### Boilerplate tests

For new APIs, you can start by listing some standard tests, such as the following.

- Property descriptor of the object/method/whatever. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/prop-desc.js)
- Brand check for methods, what happens when calling it with a `this` that is not what what it expects, via `Function.prototype.apply` or `.call`. [Example](https://github.com/tc39/test262/blob/main/test/intl402/ListFormat/prototype/format/branding.js)
- Object prototype and extensibility. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/Temporal/Instant/builtin.js)
- Function boilerplate:
  + Function length. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/length.js)
  + Function name. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/name.js)
  + Function is or is not a constructor. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/Number/isNaN/not-a-constructor.js)

#### Success cases

List the various success cases that result in a normal completion:

- Identify algorithm branches, and include a potential input that leads to each branch case.
- See the proposal's explainer for particular cases that this proposal wants to cover.

#### Failure cases

List failure cases, when an exception is thrown:

- Check new spec text for every place where a `?` appears, indicating that what follows may throw an exception.
- List other potential unexpected edge cases. At the rendered spec, use the `U` key to see who calls the related parts of the code, and check for unexpected entry points.

#### Side-effects and algorithm step order

Finally, consider testing the order of the algorithm steps, if there are steps that introduce side effects. However, it's best to not overdo it here. The goal is to help implementations correctly implement the new functionality. Exhaustively testing the order of side effects can lead to diminishing returns.

### Tests for new syntax

A testing plan for new syntax is similar to that for a new API but additionally:

- Test both the syntax and how it's evaluated, so double the tests.
- Check [CONTRIBUTING.md](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md) for special frontmatter flags when testing syntax errors.
- Look into the ECMA-262 sections named [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-array-initializer-runtime-semantics-evaluation).

## Tips and tricks

Check what engines test, in case you missed something. Some engines' test locations in their codebase:

- v8 https://source.chromium.org/chromium/chromium/src/+/main:v8/test/mjsunit/
- SpiderMonkey: https://searchfox.org/mozilla-central/source/js/src/tests/non262/ and https://searchfox.org/mozilla-central/source/js/src/jit-test/tests (note that the latter is usually more focused on testing the JIT compiler, however it may contain more general API tests that are not yet isolated as potential test262 tests).
- JSC https://trac.webkit.org/browser/webkit/trunk/JSTests

Finally, if you don't understand why a certain part of the spec is the way it is, it helps to git blame the file `spec.html` of the proposal's Git repository. You may find linked PRs pointing to related issues, potentially with test cases that cover that part of the spec.

### Examples of input categories

- `undefined`, `null`, symbols
- strings, "", "\b", "\n"
- Booleans
- number, BigInt, NaN, ±0, ±∞
- Objects, Arrays

## Completing the testing plan

As important as it is to have a complete testing plan, it is equally important to avoid diminishing returns and to understand when to stop adding cases to be tested. Especially when new specification algorithms call on existing algorithms, it may be temping to dive in the existing algorithms to explore the different paths they may take. However it is best to focus on writing more surface tests for these cases, and only dive in the nested algorithms when the proposal is expecting these to be relevant to the new additions.

On this topic it may be helpful to go through the discussion on the [Testing Plan issue](https://github.com/tc39/test262/issues/4054) for `Math.sumPrecise`, and [Mike Pennisi's testing plan guide for WPT](https://web-platform-tests.org/writing-tests/making-a-testing-plan.html).

# Testing plan checklist

- [ ] Create a testing plan [issue](https://github.com/tc39/test262/issues), if there is none yet.
  + [ ] Link the proposal repository and rendered text, if available.
  + [ ] Optionally mention any implementations of the proposal, where the proposed tests could be tested.
  + [ ] Cc the proposal champion(s) to inform them of the testing plan issue.
- [ ] Send a PR to [tc39/proposals](https://github.com/tc39/proposals/) to link the testing plan issue ([example](https://github.com/tc39/proposals/pull/533)).
- [ ] Compose a testing plan and add it to the issue as a checklist (using markdown checkbox list items `- [ ]`).
- [ ] Cc the proposal champion(s) after the testing plan is added, so they can potentially weigh in on whether it is sufficient.

# See also

- Discussion on Testing Plan issue for `Math.sumPrecise`. https://github.com/tc39/test262/issues/4054
- Mike Pennisi's guide for WPT. https://web-platform-tests.org/writing-tests/making-a-testing-plan.html
- Other Test262 Testing Plan issues. https://github.com/tc39/test262/issues?q=is%3Aissue%20%22testing%20plan%22
