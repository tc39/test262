/// Copyright (c) 2011 Microsoft Corporation 
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

//Global Scope Test Case Validator

//An exception is expected
if (testDescrip.negative !== undefined) {
    testDescrip.negative = testDescrip.negative !== "" ? testDescrip.negative : ".";
    if (window.iframeError === undefined) { //no exception was thrown
        testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code,
                'fail', 
                Error('No exception was thrown; expected an error "message" property matching the regular expression "' + testDescrip.negative + '".'));
    } else if (!(new RegExp(testDescrip.negative, "i").test(window.iframeError))) {  //wrong type of exception thrown
        testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code,
                'fail', 
                Error('Expected an exception with a "message" property matching the regular expression "' + testDescrip.negative +'" to be thrown; actual was "' + window.iframeError + '".'));
    } else {
        testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code,
                'pass', undefined);
    }
}

//Exception was not expected to be thrown
else if (window.iframeError !== undefined) {  
    testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code,
            'fail', 
            Error('Unexpected exception, "' + window.iframeError + '" was thrown.'));
} 

else {
    testRun(testDescrip.id, testDescrip.path, testDescrip.description, testDescrip.code,
            'pass', undefined);
}

testFinished();