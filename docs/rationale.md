# Test262 maintenance rationale

Explanations behind the practices promoted by the project maintainers.

## Vestigial tests

Test262 has been maintained for many years, and the practices used to write
tests have evolved alongside the needs of its consumers. When conventions
change, old tests are typically updated to accommodate the new practices. That
doesn't always happen, though, and one doesn't have to look very far to find
examples of tests which contradict the preferred patterns.

For instance:

- tests which expression expectations with `throw` statements inside of
  conditional statements rather than the assertion API implemented by the
  harness files (though this explicitness will always been desirable when
  asserting the semantics of conditional statements and `throw` statements
  themselves)
- tests with file names derived from section numbers in the 5th edition of
  ECMA262, e.g. `built-ins/Array/15.4.5-1.js`
- tests which validate multiple behaviors, using elaborate comment blocks to
  designate sections
- tests which use deprecated harness functions, e.g. `verifyEnumerable`,
  `verifyConfigurable`, and `verifyWritable`

Since existing tests do not necessarily reflect the project's current
best-practices, it's especially important for test authors to familiarize
themselves with the contribution guidelines.

## Test generation

The project includes a software tool for generating test material from abstract
templates. The generator was designed to promote uniformity of coverage,
particularly for parts of the grammar that are used in many productions
(specifically: the destructuring assignment patterns introduced in the 6th
edition of ECMA262).

This tool makes it easy to introduce enormous numbers of tests. Introducing
more tests is not a goal unto itself, though. Test262 prioritizes coherence in
its coverage of the specification, and it recognizes that the value of tests,
as measured by their likelihood to identify defects, varies.

For these reasons, the maintainers urge restraint in the application of the
test generation tool.

## File structure

For practical reasons, tests are organized in a tree structure according to the
conventions of modern file systems. Unfortunately, this structure is not
expressive enough to model the semantics of a rich and evolving programming
language like ECMAScript. This means the common and crucial task of coverage
assessment will likely always be a challenge, but strong conventions around
file organization can help.

Tests for syntax-derived operations are organized according to the language
grammar, with directories used to describe non-terminals. Tests for built-in
APIs are organized according to the identifiers by which they can be accessed,
with directories used to describe the sequence of properties that can be used
from the global scope.

Directories are not generally applied beyond these limits; further
differentiation is instead achieved through structured file names which follow
ad-hoc conventions. This organization balances the need to group tests
logically with the need to discover tests.

Many consumers use file names as a way to compare test results across revisions
and between implementations. For this reason, tests files are rarely
re-organized after being accepted.

## Regression tests

It is possible to write tests for semantics which, while not explicitly
specified by ECMA262, are nonetheless valid according to the normative text.
Such tests are welcome in Test262, but their fitness is not a given. Consumers
from many constituencies value the coherence and consistency of the test suite,
and tests which disallow arbitrary extraneous behavior can degrade those
qualities. Because Test262 is not maintained as a repository of regression
tests, contributions which include these kinds of tests will be weighed against
their likelihood of identifying error in a plurality of implementations.

## Large tests

Test262 tests are typically very focused. The vast majority exercise just one
algorithm step/grammar production, and some are even more granular that that!

Some test contributors are uncomfortable splitting their work across files like
this. It's certainly unlike the practices that are common in modern application
development. In those settings, many tests are often grouped into the same file
and separated by function boundaries.

Test262 doesn't use the same approach as a typical application test suite in
order to limit complexity. The guidance of "one test per file" means that
consuming Test262 is relatively easy; there is no "test runner" API for
consumers to implement, and interpreting results is likewise straightforward.
It also lowers the barrier to entry for new contributors since there is no API
to learn.

## Syntax tests

When testing a syntactic feature of the language, it can be tempting to write
tests which verify that some bit of source text does *not* produce a syntax
error. Contributors should try to push beyond verifying only the lack of a
syntax error because almost all such tests also have observable semantics. It's
often better for a test to assert that the expected semantics are followed,
even when they may already be covered elsewhere.

However, this is not always desirable because verifying semantics invariably
requires inserting still more code, and that additional code may degrade the
tests' precision for verifying syntax.

When considering this tension, be aware that TC39 maintains [a separate project
called test262-parser-tests](https://github.com/tc39/test262-parser-tests).
This project was partially motivated by a desire to offer test material that
isn't (and perhaps cannot be) related to any specific grammar production. The
availability of that project may inform decisions about if, where, and how to
include tests for syntax in Test262.

## Avoiding abstraction

Contributors will occasionally suggest introducing new abstractions to reduce
duplication in tests. The maintainers set a relatively high bar for such
enhancements, both due to their many drawbacks and due to the aspects of
standards testing which limit their benefit.

The drawbacks to abstraction include:

- it degrades the tests by introducing unrelated semantics
- it discourages contributors by requiring them to learn more
- it frustrates implementers by making it harder to understand what's being
  tested and what has failed

One of abstraction's common motivations is its tendency to reduce maintenance
costs by limiting duplication. TC39 has a very high standard for compatibility
between revisions of ECMA262. This gives us a certain assurance in Test262 that
maintainers of other test suites do not enjoy: Test262's tests are very rarely
invalidated. The project takes advantage of this by using a more declarative,
readable, and verbose style.

Abstraction has other motivations, so there will always be room for it to some
extent. When the benefits of a specific proposal outweigh the drawbacks, then
it should be well documented and also well-tested. Test262 maintains tests for
its "harness" abstractions in [a dedicated directory within the test suite
itself](https://github.com/tc39/test262/tree/main/test/harness).
