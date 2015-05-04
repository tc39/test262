// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Compiler feature tests"
---*/

var i = 0;
function baz()
{
   i++
}
function foo(x,y)
{
   baz();
   return x + y;
}
function bar()
{
   eval("");// prevent inlining
   return foo(i,2);
}

var output = bar();
if (output !== 2) {
    $ERROR('[Substitutions] Foo method returned unexpected value Expected : Value is 2 : true || Actual : ' + output);
}

output = `${bar()}`;
if (output !== '3') {
    $ERROR('[Substitutions] Foo method returned unexpected value Expected : Value is 3 : true || Actual : ' + output);
}

output = `bar()`;
if (output !== "bar()") {
    $ERROR('[Substitutions] Foo method returned unexpected value Expected : Value is 3 : true || Actual : ' + output);
}
