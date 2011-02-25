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
    id: "15.2.3.7-6-a-246",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-246.js",

    description: "Object.defineProperties - TypeError is not thrown if ''O' is an Array, 'P' is an array index named property that already exists on 'O' is accessor property with  [[Configurable]] false, 'desc' is accessor descriptor, test TypeError is not thrown if the [[Get]] field of 'desc' is present, and the [[Get]] field of 'desc' and the [[Get]] attribute value of 'P' are undefined (15.4.5.1 step 4.c)",

    test: function testcase() {
        var arr = [];

        Object.defineProperty(arr, "1", {
            get: undefined
        });

        try {
            Object.defineProperties(arr, {
                "1": {
                    get: undefined
                }
            });

            return accessorPropertyAttributesAreCorrect(arr, "1", undefined, undefined, undefined, false, false);
        } catch (ex) {
            return false;
        }
    },

    precondition: function prereq() {
        return fnExists(Object.getOwnPropertyDescriptor) && fnExists(Object.defineProperties) && fnExists(Object.defineProperty) && fnSupportsArrayIndexGettersOnArrays();
    }
});
