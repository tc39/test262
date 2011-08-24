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

ES5Harness.registerTest({
    id: "13.2-15-1",

    path: "TestCases/chapter13/13.2/13.2-15-1.js",

    description: "Function Object has length as its own property and does not invoke the setter defined on Function.prototype.length (Step 15)",

    test: function testcase() {
            var fun = function (x, y) { };

            var verifyValue = false;
            verifyValue = (fun.hasOwnProperty("length") && fun.length === 2);

            var verifyWritable = false;
            fun.length = 1001;
            verifyWritable = (fun.length === 1001);

            var verifyEnumerable = false;
            for (var p in fun) {
                if (p === "length") {
                    verifyEnumerable = true;
                }
            }

            var verifyConfigurable = false;
            delete fun.length;
            verifyConfigurable = fun.hasOwnProperty("length");

            return verifyValue && !verifyWritable && !verifyEnumerable && verifyConfigurable;
        },

        precondition: function prereq() {
            return fnExists(Object.defineProperty);
        }
    });
