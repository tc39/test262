## Test262 Authoring Guidelines
### Test Case Style
A test file has the following style format:
```javascript
// Copyright (C) 2014 [Contributor Name]. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/* 
 * Tags...
 */
 
[Test Code]
```
### Tags
Test262 officially supports the following tags: **@description**, **@negative**, **@path** & **@author**
##### @description
This tag is used to describe the purpose of a particular testcase. 
Eg: Insert &lt;LS&gt; between chunks of one string
##### @negative [.] \(not supported by Python console harness)
Negative means the test will throw an error and given the error there will be a string comparison on the error message. It has an optional second parameter (it's a *regex-dot* if not provided) that will be used to compare. For best practices on how to use negative tag please see Handling Errors and Negative Test Cases.
##### @path
This tag is used by the JSON packaging. It is not needed to manually enter this tag.  
##### @author
This tag is used to identify the author of a test case. It's optional.

There are also couple other tags which are used only by the Python runner: **@onlyStrict**, **@noStrict**
##### @onlyStrict
Will run the test only in strict mode
##### @noStrict
Will not run the test in strict mode

### Handling Errors and Negative Test Cases
The following patterns are considered the best practice:
#### Runtime Error:
```javascript
var error;

try {
    [test code]
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if(!(e instanceof ReferenceError)) {
    $ERROR('expected to have ReferenceError, got ' + error.name + ' instead.');
}
```
The example uses ReferenceError however it's also possible to use any of the following error here:

- EvalError
- RangeError
- ReferenceError
- TypeError
- URIError

#### Syntax Error & Early Error:
```javascript
/*
 * @negative ^((?!NotEarlyError).)*$
 */
 
throw "NotEarlyError"; 
[test code]
```
There are *very* few cases where a syntax error is **not** an early error. In those cases use the Runtime Error pattern but wrap the test code in an eval statement. Be careful, eval code is not global code!
### Other Features
#### &#36;INCLUDE(fileName) method
&#36;INCLUDE (not supported by Python console harness) will load an external Javascript file in the same context before executing a test. In most cases usage of this method should be avoided. It's a good practice only when a large amount of tests need a special check that's not provided by the default harness. If that's the case, please explain the use case in detail.