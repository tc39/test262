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

    id: "15.2.3.7-6-a-171",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-171.js",

    description: "Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', the [[Value]] field of 'desc' is less than value of  the length property, test the [[Configurable]] attribute of inherited accessor property with large index named in 'O' can't stop deleting index named properties (15.4.5.1 step 3.l.ii)",

    test: function testcase() {

        var arr = [0, 1];
        try {
            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 1;
                },
                configurable: true //we are not allowed to set the [[Configurable]] attribute of property "1" to false here, since Array.prototype is a global object, and non-configurbale property can't revert to configurable
            });

            Object.defineProperties(arr, {
                length: {
                    value: 1
                }
            });

            return arr.length === 1 && !arr.hasOwnProperty("1") && arr[0] === 0 && Array.prototype[1] === 1;
        } finally {
            delete Array.prototype[1];
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperties) && fnExists(Object.defineProperty) && fnSupportsArrayIndexGettersOnArrays();
    }

});
