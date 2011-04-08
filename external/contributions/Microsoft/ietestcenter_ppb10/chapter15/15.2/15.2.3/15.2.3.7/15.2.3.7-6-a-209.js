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
    id: "15.2.3.7-6-a-209",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-209.js",

    description: "Object.defineProperties - 'O' is an Array, 'P' is an array index named property, 'P' makes no change if the value of every field in 'desc' is the same value as the corresponding field in 'P'(desc is accessor property)  (15.4.5.1 step 4.c)",

    test: function testcase() {
        var arr = [];
        var get_func = function () {
            return "100";
        };
        var set_func = function (value) {
            arr.setVerifyHelpProp = value;
        };

        var descObj = {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        };
        
        var properties = {
            "0": descObj
        };

        Object.defineProperty(arr, "0", descObj);

        Object.defineProperties(arr, properties);

        return accessorPropertyAttributesAreCorrect(arr, "0", get_func, set_func, "setVerifyHelpProp", true, true);
    },

    precondition: function prereq() {
        return fnExists(Object.getOwnPropertyDescriptor) && fnExists(Object.defineProperties) && fnSupportsArrayIndexGettersOnArrays();
    }
});
