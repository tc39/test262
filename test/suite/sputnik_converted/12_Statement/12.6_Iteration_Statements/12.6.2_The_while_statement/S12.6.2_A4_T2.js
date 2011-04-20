// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A4_T2;
* @section: 12.6.2;
* @assertion: "break" within a "while" Statement is allowed and performed as described in 12.8;
* @description: "break" and VariableDeclaration within a "while" Statement; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A4_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.2_The_while_statement\S12.6.2_A4_T2.js",

assertion: "\"break\" within a \"while\" Statement is allowed and performed as described in 12.8",

description: "\"break\" and VariableDeclaration within a \"while\" Statement",

test: function testcase() {
   do_out : while(1===1) {
    if (__in__do__before__break) break;
    var __in__do__before__break="black";
    do_in : while (1) {
        var __in__do__IN__before__break="hole";
        break do_in; 
        var __in__do__IN__after__break="sun";
    } ;
    var __in__do__after__break="won't you come";
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break)) {
	$ERROR('#1: Break inside do-while is allowed as its described at standard');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

