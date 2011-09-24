// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Every execution context has associated with it a scope chain.
 * A scope chain is a list of objects that are searched when evaluating an
 * Identifier
 *
 * @path 10_Execution_Contexts/10.2_Lexical_Environments/10.2.2__Lexical_Environment_Operations/S10.1.4_A1_T8.js
 * @description Checking scope chain containing function declarations and "with"
 * @noStrict
 */

var x = 0;

var myObj = {x : "obj"};

function f1(){
  function f2(){
    with(myObj){
      return x;
    }
  };

  var x = 1;
  return f2();
}

if(!(f1() === "obj")){
  $ERROR("#1: Scope chain disturbed");
}

