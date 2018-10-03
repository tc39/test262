# Coverage Checklist for `import()`

## Default Templates

_general places it can be found as a CallExpression_

- [x] top level
- [x] consise body of an ArrowFunction
- [x] function body of an ArrowFunction
- [ ] consise body of an __Async__ ArrowFunction
- [ ] function body of an __Async__ ArrowFunction
- [ ] try catch in async function
- [x] await position of an async function
- [x] return await position of an async function
- [x] nested in an async function
- [x] labeled blocks
- [x] blocks
- [x] do while
- [x] else braceless
- [x] else block
- [x] if braceless
- [x] if block
- [x] while block

## Cases

### Syntax

- [x] assignment expression is not optional `assignment-expr-not-optional.case`
- [x] empty string is a valid assignment expression (not a syntax error) `empty-str-is-valid-assign-expr.case`
- [ ] _Forbidden Extensions: ImportCall must not be extended._ (Only one assignment expression allowed)
    - [ ] no trailling comma, it's not an arguments list
    - [ ] no other expressions

### Common usage

- [x] indirect update default binding `eval-gtbndng-indirect-update-dflt.case`
- [x] indirect update named binding `eval-gtbndng-indirect-update-dflt.case`
- [ ] Assignment Expression evaluations. Most can be used as syntax tests only, e.g. exprs evaluating to a boolean value) or error catching
    - [ ] ConditionalExpression
        - [ ] Primary Expressions on the import Assign. Expr. position (?)
        - [ ] Cover Parenthesis expressions
        - [ ] ...
    - [ ] YieldExpression
        - [ ] Check yield usage
    - [ ] ArrowFunction
    - [ ] AsyncArrowFunction
    - [ ] LeftHandSideExpression = AssignmentExpression
    - [ ] LeftHandSideExpression AssignmentOperator AssignmentExpression
- [ ] ToString on the AssignmentExpression value `Let specifierString be ToString(specifier).`
    - [ ] `If AbruptRejectPromise(specifierString, promiseCapability).`
- [ ] nest `import()` in CallExpressions
    - [ ] `import(import(...))`
    - [ ] ... (other CallExpressions here)
- [ ] Goal target can be a script code (not module code)
    - [ ] in this case, it should not export anything (and it's not a SyntaxError like in static imports)
    - [ ] indirect updates
- [ ] Goal target can be a module code (having module specific syntax)
- [ ] module code on host syntax
- [ ] Multiple imports on the same imported module
    - [ ] verify indirect updates
    - [x] Imported module is only evaluated once. `test/language/module-code/dynamic-import/eval-rqstd-once.js`
    - [x] Self loading module only evaluates once. `test/language/module-code/dynamic-import/eval-self-once.js`
- [ ] ImportCall in runtime returns a Promise
    - [ ] Verify ctor
    - [ ] Use in Promise.all?
    - [ ] await resolving (include failures)
    - [ ] Use Promise.prototype
    - [ ] Promise.resolve
- [x] Captures exported operations of `.. in ..` in exported values. `test/language/module-code/dynamic-import/eval-export-dflt-expr-in.js`
- [ ] Does not create a default property if default export is not given
- [ ] imported value is an object with the exported names, including default

### Non generated tests

- [ ] Self importing test files
    - [x] default name binding `test/language/module-code/dynamic-import/eval-export-dflt-cls-anon.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-cls-name-meth.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-cls-named.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-cls-anon.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-cls-name-meth.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-cls-named.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-fn-anon.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-fn-named.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-gen-anon.js`
    - [x] `test/language/module-code/dynamic-import/eval-export-dflt-expr-gen-named.js`

### Error catching

- [x] resolved runtime error (TypeError) `eval-rqstd-abrupt-typeerror.case`
- [x] resolved runtime error (URIError) `eval-rqstd-abrupt-urierror.case`
- [x] ambiguous import
- [x] circular import error
