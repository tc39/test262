## Test262: ECMAScript Test Suite ([ECMA TR/104](http://ecma-international.org/publications/techreports/E-TR-104.htm))


Test262 is the implementation conformance test suite for the latest drafts (or most recent published edition) of the following Ecma specifications: 

- [ECMA-262, ECMAScript Language Specification](https://tc39.github.io/ecma262/)
- [ECMA-402, ECMAScript Internationalization API Specification](https://tc39.github.io/ecma402/) 
- [ECMA-404, The JSON Data Interchange Format](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) (pdf)

Test262 itself is described in [ECMA TR/104]((http://ecma-international.org/publications/techreports/E-TR-104.htm)) and is included in [ECMA-414](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf) (pdf).

### Goals & State of Test262

The goal of Test262 is to provide test material that covers every observable behavior specified in the [ECMA-414 Standards Suite](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf). Development of Test262 is an on-going process. As of May 2025, Test262 consisted of over 50,000 individual test files covering the majority of the pseudo-code algorithms and grammar productions defined in the [ECMA-414 Standards Suite](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf). Each of these files contains one or more distinct test cases. This marks the most comprehensive ECMAScript test suite to date. While test coverage is broad, TC39 does not consider coverage to be complete and as with any software project there exists the possibility of omissions and errors. This project welcomes any contributions to Test262 that help make test coverage of existing features more comprehensive.


### ECMAScript feature proposals

As defined in the [TC39 Process](https://tc39.github.io/process-document/), Stage 4 Entrance Criteria requires tests for new feature proposals to advance. Tests may be written by proposal champions, implementers, or any interested community member. 

A **proposal champion** is someone that worked on the feature proposal and specification directly.

An **implementer** is someone that works on implementing the proposal into a JavaScript engine, parser, runtime or embedding. 
 
A **community member** is _you_, and we welcome you to contribute! If you're having trouble getting started, or even just want to ask a question, feel free to open an issue. 

### Contributing to Test262

Guidance for contributing to Test262 can be found in [CONTRIBUTING.md](./CONTRIBUTING.md). 

**Authors of contributions from non-Ecma member organizations must sign the [Test262 CLA](http://tc39.github.io/test262-cla)**

### Running Test262

Guidance for running Test262 and explanations of how a test file must be interpreted by a test runner is in [INTERPRETING](./INTERPRETING.md)

### Rationale

This project offers an explanation for many of its design decisions and maintenance practices--see [rationale.md](./docs/rationale.md).

### Test262 Runners

Volunteer-maintained projects that may be used to execute Test262 in various ECMAScript hosts:

- https://github.com/tc39/test262-harness (platform: Node.js)
- https://github.com/test262-utils/test262-harness-py (platform: Python)
- https://bakkot.github.io/test262-web-runner/ (platform: web)
- https://github.com/Izhido/test262_harness_cpp (platform: C++)
- https://github.com/lahma/test262-harness-dotnet (platform: .NET)
- https://github.com/cta-wave/WMAS/tree/latest/tools/wave/ecmascript (platform: Python; [Docker Deploy Instructions](https://github.com/cta-wave/WMAS-deploy/tree/wmas-latest))

### How To Read CI Results

Test262 runs CI tests against every PR and commit. The only tests that are required to pass are visibly flagged as **REQUIRED**. The CI test results that are attributed to specific runs against specific engines should not be perceived as meaningful to anyone but the person that is reviewing the test material contained within the contributed changeset. These tests are almost always expected to fail, especially in the case of tests for new features. They _may_ be helpful in determining whether or not a regression occurred, but that can only be determined by an actual human reviewing the results and comparing those outcomes to the expected outcomes of the tests.



### Where did `website/` go?

It's been removed. If you need to access the code that contained in that directory, you can find it [here](https://github.com/tc39/test262/tree/3fac29109a4e86142796ec89c4c381c5ca255e94/website).
