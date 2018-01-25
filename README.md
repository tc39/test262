## Test262: ECMAScript Test Suite ([ECMA TR/104](http://ecma-international.org/publications/techreports/E-TR-104.htm))


Test262 is the implementation conformance test suite for the latest drafts (or most recent published edition) of the following Ecma specifications: 

- [ECMA-262, ECMAScript Language Specification](https://tc39.github.io/ecma262/)
- [ECMA-402, ECMAScript Internationalization API Specification](https://tc39.github.io/ecma402/) 
- [ECMA-404, The JSON Data Interchange Format](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) (pdf)

Test262 itself is described in [ECMA TR/104]((http://ecma-international.org/publications/techreports/E-TR-104.htm)) and is included in [ECMA-414](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf) (pdf).

### Goals & State of Test262

The goal of Test262 is to provide test material that covers every observable behavior specified in the [ECMA-414 Standards Suite](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf). Development of Test262 is an on-going process. As of October 2017, Test262 consisted of over 29272 individual test files covering the majority of the pseudo-code algorithms and grammar productions defined in the [ECMA-414 Standards Suite](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-414.pdf). Each of these files contains one or more distinct test cases. This marks the most comprehensive ECMAScript test suite to date. While test coverage is broad, TC39 does not consider coverage to be complete and as with any software project there exists the possibility of omissions and errors. This project welcomes any contributions to Test262 that help make test coverage of existing features more comprehensive.


### ECMAScript feature proposals

As defined in the [TC39 Process](https://tc39.github.io/process-document/), Stage 4 Entrance Criteria requires tests for new feature proposals to advance. Tests may be written by proposal champions, implementers, or any interested community member. 

A **proposal champion** is someone that worked on the feature proposal and specification directly.

An **implementer** is someone that works on implementing the proposal into a JavaScript engine, parser, runtime or embedding. 
 
A **community member** is _you_, and we welcome you to contribute! If you're having trouble getting started, or even just want to ask a question, feel free to open an issue. 

### Contributing to Test262

Guidance for contributing to Test262 can be found in [CONTRIBUTING.md](./CONTRIBUTING.md). 

**Authors of contributions from non-Ecma member organizations must sign the [Test262 CLA](http://tc39.github.io/test262-cla)**

### Running Test262

Guidance for running Test262 and explanations of how a test file is interpreted by a test runner is in [INTERPRETING](./INTERPRETING.md)


### Test262 Runners & Harnesses

Volunteer-maintained projects that may be used to execute Test262 in various ECMAScript hosts:

- https://github.com/bterlson/test262-harness (platform: Node.js)
- https://github.com/test262-utils/test262-harness-py (platform: Python)
- https://bakkot.github.io/test262-web-runner/ (platform: web)
