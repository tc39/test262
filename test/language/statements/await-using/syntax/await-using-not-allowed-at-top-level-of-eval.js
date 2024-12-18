// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    await using declarations not allowed at the top level of eval
info: |
  AwaitUsingDeclaration : CoverAwaitExpressionAndAwaitUsingDeclarationHead BindingList ;

  - It is a Syntax Error if the goal symbol is Script and UsingDeclaration is not contained, either directly or 
    indirectly, within a Block, CaseBlock, ForStatement, ForInOfStatement, FunctionBody, GeneratorBody, 
    AsyncGeneratorBody, AsyncFunctionBody, ClassStaticBlockBody, or ClassBody.

flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  await assert.throwsAsync(SyntaxError, async function () {
    eval('await using x = null;')
  });
});
