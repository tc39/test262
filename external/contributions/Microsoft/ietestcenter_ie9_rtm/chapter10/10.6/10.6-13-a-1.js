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
    id: "10.6-13-a-1",

    path: "TestCases/chapter10/10.6/10.6-13-a-1.js",

    description: "In non-strict mode, arguments object should have its own 'callee' property defined (Step 13.a)",

    test: function testcase() {
        try {
            Object.defineProperty(Object.prototype, "callee", {
                value: 1,
                writable: false,
                configurable: true
            });

            var argObj = (function () { return arguments })();

            var verifyValue = false;
            var expectedValue = "function () { return arguments }";
            verifyValue = argObj.callee.toString() === expectedValue && typeof argObj.callee === "function";
            
            var verifyWritable = false;
            argObj.callee = 1001;
            verifyWritable = (argObj.callee === 1001);

            var verifyEnumerable = false;
            for (var p in argObj) {
                if (p === "callee" && argObj.hasOwnProperty("callee")) {
                    verifyEnumerable = true;
                }
            }

            var verifyConfigurable = false;
            delete argObj.callee;
            verifyConfigurable = argObj.hasOwnProperty("callee");

            return verifyValue && verifyWritable && !verifyEnumerable && !verifyConfigurable;
        } finally {
            delete Object.prototype.callee;
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
