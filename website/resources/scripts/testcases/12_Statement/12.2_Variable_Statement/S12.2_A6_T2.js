// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A6_T2;
* @section: 12.2;
* @assertion: VariableDeclaration within "try-catch" statement is allowed;
* @description: Declaring variables within "try-catch" statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A6_T2",

path: "12.2",

description: "Declaring variables within \"try-catch\" statement",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	intry__intry__var=intry__intry__var;
	intry__incatch__var=intry__incatch__var;
	incatch__intry__var=incatch__intry__var;
	incatch__incatch__var=incatch__incatch__var;
}catch(e){
	$ERROR('#1: Variable declaration inside "try-catch" block is admitted');
};
//
//////////////////////////////////////////////////////////////////////////////

try{
    try {
    	var intry__intry__var;
    } catch (e) {
    	var intry__incatch__var;
    }
}catch(e){
    try {
    	var incatch__intry__var;
    } catch (e) {
        var incatch__incatch__var;
    }
    
};

 }
});

