/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


this.GlobalScopeTests = this.GlobalScopeTests || new Array();

GlobalScopeTests["TestCases/chapter07/7.8/7.8.5/7.8.5-1gs.js"] = {description: "Empty literal RegExp should result in a SyntaxError",
                                                precondition: function prereq() { return true;},
                                                negative: EarlyErrorRePat};
GlobalScopeTests["TestCases/chapter07/7.8/7.8.5/7.8.5-2gs.js"] = {description: "Empty dynamic RegExp should not result in a SyntaxError",
                                                precondition: function prereq() { return true;}};


//--Strict Mode Tests
GlobalScopeTests["TestCases/chapter07/7.6/7.6.1/7.6.1.2-1gs.js"] = {
        description: "Strict Mode - SyntaxError is thrown when FutureReservedWord 'implements' occurs in strict mode code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter07/7.8/7.8.3/7.8.3-1gs.js"] = {
        description: "Strict Mode - octal extension(010) is forbidden in strict mode",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter08/8.7/8.7.2/8.7.2-3-a-1gs.js"] = {
        description: "Strict Mode - ReferenceError is thrown if LeftHandSide evaluate to an unresolvable Reference",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: ".", strict: 1
    };
GlobalScopeTests["TestCases/chapter08/8.7/8.7.2/8.7.2-3-a-2gs.js"] = {
        description: "Strict Mode - 'runtime' error is thrown before LeftHandSide evaluates to an unresolvable Reference",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: NotEarlyErrorString, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.1/10.1.1/10.1.1-2gs.js"] = {
        description: "Strict Mode - Use Strict Directive Prologue is ''use strict'' which lost the last character ';'",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.1/10.1.1/10.1.1-5gs.js"] = {
        description: "Strict Mode - Use Strict Directive Prologue is ''use strict';' which appears at the start of the code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.1/10.1.1/10.1.1-8gs.js"] = {
        description: "Strict Mode - Use Strict Directive Prologue is ''use strict';' which appears twice in the code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.4/10.4.2/10.4.2.1-1gs.js"] = {
        description: "Strict Mode - eval code cannot instantiate variable in the variable environment of the calling context that invoked the eval if the code of the calling context is strict code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.5/10.5-1gs.js"] = {
        description: "Strict Mode - arguments cannot be assigned to in a strict function",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.6/10.6-1gs.js"] = {
        description: "Strict Mode - arguments.callee cannot be accessed in a strict function, but does not throw an early error",
        precondition: function prereq() { return fnSupportsStrict(); },
        strict: 1
    };
GlobalScopeTests["TestCases/chapter10/10.6/10.6-2gs.js"] = {
        description: "Strict Mode - arguments.callee cannot be accessed in a strict function",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: '.', strict: 1
    };
GlobalScopeTests["TestCases/chapter11/11.1/11.1.1/11.1.1-1gs.js"] = {
        description: "Strict Mode - 'this' object at the global scope is not undefined",
        precondition: function prereq() { return fnSupportsStrict(); },
        strict: 1
    };
GlobalScopeTests["TestCases/chapter11/11.3/11.3.1/11.3.1-2-1gs.js"] = {
        description: "Strict Mode - SyntaxError is throw if the identifier arguments appear as a PostfixExpression(arguments++)",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };    
GlobalScopeTests["TestCases/chapter11/11.4/11.4.5/11.4.5-2-2gs.js"] = {
        description: "Strict Mode - SyntaxError is throw if the UnaryExpression operated upon by a Prefix Increment operator(--arguments)",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };

GlobalScopeTests["TestCases/chapter11/11.13/11.13.2/11.13.2-6-1gs.js"] = {
        description: "Strict Mode - SyntaxError is throw if the identifier eval appears as the LeftHandSideExpression of a Compound Assignment operator(*=)",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter12/12.10/12.10.1/12.10.1-11gs.js"] = {
        description: "Strict Mode - SyntaxError is thrown when using with statement",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter12/12.14/12.14.1/12.14.1-1gs.js"] = {
        description: "Strict Mode - SyntaxError is thrown if a TryStatement with a Catch occurs within strict code and the Identifier of the Catch production is eval",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter13/13.0/13_4-5gs.js"] = {
        description: "Strict Mode - SourceElements is evaluated as strict mode code when a FunctionDeclaration is contained in strict mode code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
GlobalScopeTests["TestCases/chapter13/13.0/13_4-17gs.js"] = {
        description: "Strict Mode - SourceElements is evaluated as strict mode code when a Function constructor is contained in strict mode code",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: NotEarlyErrorString, strict: 1
    };
GlobalScopeTests["TestCases/chapter15/15.3/15.3.2/15.3.2.1/15.3.2.1-10-4gs.js"] = {
        description: "Strict Mode - SyntaxError is thrown if a function using the Function constructor has two identical parameters in (global) strict mode",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: NotEarlyErrorString, strict: 1
    };
GlobalScopeTests["TestCases/chapter15/15.3/15.3.2/15.3.2.1/15.3.2.1-10-6gs.js"] = {
        description: "Strict Mode - SyntaxError is thrown if a function using the Function constructor has two identical parameters in (local) strict mode",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: NotEarlyErrorString, strict: 1
    };
GlobalScopeTests["TestCases/chapter15/15.3/15.3.5/15.3.5-1gs.js"] = {
        description: "StrictMode - error is thrown when reading the 'caller' property of a function object",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: NotEarlyErrorString, strict: 1
    };
GlobalScopeTests["TestCases/chapter15/15.3/15.3.5/15.3.5-2gs.js"] = {
        description: "StrictMode - error is thrown when reading the 'caller' property of a function object",
        precondition: function prereq() { return fnSupportsStrict(); },
        negative: EarlyErrorRePat, strict: 1
    };
//--Strict Mode tests involving 'this'
GlobalScopeTests["TestCases/chapter10/10.4/10.4.3/10.4.3-1-7gs.js"] = {strict:1, precondition:function prereq() { return fnSupportsStrict();}, description:"Strict - checking 'this' from a global scope (FunctionDeclaration defined within strict mode)"};
GlobalScopeTests["TestCases/chapter10/10.4/10.4.3/10.4.3-1-8gs.js"] = {strict:1, precondition:function prereq() { return fnSupportsStrict();}, description:"Strict - checking 'this' from a global scope (FunctionDeclaration includes strict directive prologue)"};


//Misc. test cases that must be run at the global level
GlobalScopeTests["TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-625gs.js"] = {
        description: "Globally declared variable should take precedence over Object.prototype property of the same name",
        precondition: function prereq() { return fnExists(Object.defineProperty); }
    };