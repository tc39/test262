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


/*
 * Run a test in the browser. Works by injecting an iframe with the test code.
 *
 * Public Methods:
 * * run(id, test): Runs the test specified.
 *
 * Callbacks:
 * * onComplete(test): Called when the test is run. Test object contains result and error strings describing how the
 *                     test ran.
 */
function BrowserRunner() {
    var iframe,             // injected iframe
        currentTest,        // Current test being run.
        scriptCache = {},   // Holds the various includes required to run certain sputnik tests.
        instance    = this;

    /* Called by the child window to notify that the test has finished. This function call is put in a separate script
     * block at the end of the page so errors in the test script block should not prevent this function from being
     * called.
     */
    function testFinished() {
        if(typeof currentTest.result === "undefined") {
            // We didn't get a call to testRun, which likely means the test failed to load.
            currentTest.result = "fail";
            currentTest.error  = "Failed to Load";
        } else if(typeof currentTest.error !== "undefined") {
            // We have an error logged from testRun.
            if(currentTest.error instanceof SputnikError) {
                currentTest.error = currentTest.message;
            } else {
                currentTest.error = currentTest.error.name + ": " + currentTest.error.message
            }
        }

        document.body.removeChild(iframe);

        instance.onComplete(currentTest);
    }

    /* Called from the child window after the test has run. */
    function testRun(id, path, description, codeString, preconditionString, result, error) {
        currentTest.id = id;
        currentTest.path = path;
        currentTest.description = description;
        currentTest.result = result;
        currentTest.error = error;
        currentTest.code = codeString;
        currentTest.pre = preconditionString;
    }


    /* Run the test. */
    this.run = function(id, code) {
        var includes = code.match(/\$INCLUDE\(([^\)]+)\)/g), // find all of the $INCLUDE statements
            include;

        currentTest = {id: id}; // default test, in case it doesn't get registered.

        iframe = document.createElement("iframe");
        iframe.setAttribute("style", "display:none");
        iframe.setAttribute("id", "runnerIframe");

        document.body.appendChild(iframe);

        var win = window.frames[window.frames.length - 1];
        var doc = win.document;

        doc.open();

        // Set up some globals.
        win.testRun = testRun;
        win.testFinished = testFinished;
        win.fnSupportsStrict = fnSupportsStrict;
        win.fnExists = fnExists;
        win.ConvertToFileUrl = ConvertToFileUrl;
        win.fnSupportsArrayIndexGettersOnObjects = fnSupportsArrayIndexGettersOnObjects;
        win.fnSupportsArrayIndexGettersOnArrays  = fnSupportsArrayIndexGettersOnArrays;
        win.arrayContains = arrayContains;
        win.compareArray = compareArray;
        win.SputnikError = SputnikError;
        win.$ERROR = $ERROR;
        win.$FAIL  = $FAIL;
        win.$PRINT = function () {};
        win.$INCLUDE = function() {};


        if(includes !== null) {
            // We have some includes, so loop through each include and pull in the dependencies.
            for(var i = 0; i < includes.length; i++) {
                include = includes[i].replace(/.*\(('|")(.*)('|")\)/, "$2");

                // First check to see if we have this script cached already, and if not, grab it.
                if(typeof scriptCache[include] === "undefined") {
                    $.ajax({
                        async: false,
                        url: 'resources/scripts/global/' + include,
                        success: function(s) { scriptCache[include] = s }
                    })
                }

                // Finally, write the required script to the window.
                doc.writeln("<script type='text/javascript'>" + scriptCache[include] + "</script>");
            }
        }
           
        // Write ES5Harness.registerTest and fnGlobalObject, which returns the global object, and the testFinished call.
        doc.writeln("<script type='text/javascript'>ES5Harness = {};" +
                    "function fnGlobalObject() { return window; }" +
                    "ES5Harness.registerTest = function(test) {" +
                    "  var error;" +
                    "  if(test.precondition && !test.precondition()) {" +
                    "    testRun(test.id, test.path, test.description, test.test.toString(),typeof test.precondition !== 'undefined' ? test.precondition.toString() : '', 'fail', 'Precondition Failed');" +
                    "  } else {" +
                    "    try { var res = test.test.call(window); } catch(e) { res = 'fail'; error = e; }" +
                    "    var retVal = /^s/i.test(test.id) ? (res === true || typeof res === 'undefined' ? 'pass' : 'fail') : (res === true ? 'pass' : 'fail');" +
                    "    testRun(test.id, test.path, test.description, test.test.toString(), typeof test.precondition !== 'undefined' ? test.precondition.toString() : '', retVal, error);" +
                    "  }" +
                    "}</script>" +
                    "<script type='text/javascript'>" + code + "</script>" +
                    "<script type='text/javascript'>testFinished();</script>")
        doc.close();
    }
}

/* Loads tests from the sections specified in testcaseslist.xml.
 * Public Methods:
 * * getNextTest() - Start loading the next test.
 * * reset() - Start over at the first test.
 *
 * Callbacks:
 * * onLoadingNextSection(path): Called after a request is sent for the next section xml, with the path to that xml.
 * * onInitialized(totalTests, version, date): Called after the testcaseslist.xml is loaded and parsed.
 * * onTestReady(id, code): Called when a test is ready with the test's id and code.
 * * onTestsExhausted(): Called when there are no more tests to run.
 */
function TestLoader() {
    var TEST_LIST_PATH   = "resources/scripts/testcases/testcaseslist.xml",
        testGroups       = [],
        testGroupIndex   = 0,
        currentTestIndex = 0,
        loader           = this;

    this.version    = undefined;
    this.date       = undefined;
    this.totalTests = 0;

    /* Get the XML for the next section */
    function getNextXML() {
        var group = testGroups[testGroupIndex];
        currentTestIndex = 0;

        if(group.tests.length > 0) {
            // already loaded this section.
            loader.getNextTest();
            return;
        }
        
        $.ajax({url: group.path, dataType: 'xml', success: function(data) {
            group.tests = data.getElementsByTagName("test");
            loader.getNextTest();
        }});

        loader.onLoadingNextSection(group.path);
    }

    /* Get the test list xml */
    function loadTestXML() {
        var testsListLoader = new XMLHttpRequest();

        $.ajax({url: TEST_LIST_PATH, dataType: 'xml', success: function(data) {
            var oTests    = data.getElementsByTagName('testGroup');
            var testSuite = data.getElementsByTagName('testSuite');

            loader.version    = testSuite[0].getAttribute("version");
            loader.date       = testSuite[0].getAttribute("date");
            loader.totalTests = testSuite[0].getAttribute("numTests");               

            for (var i = 0; i < oTests.length; i++) {
                testGroups[i] = {
                    path: (oTests[i].text != undefined) ? oTests[i].text : oTests[i].textContent,
                    tests: []
                }
            }

            loader.onInitialized(loader.totalTests, loader.version, loader.date);
            getNextXML();
        }});
    }

    /* Move on to the next test */
    this.getNextTest = function() {
        if(testGroups.length == 0) {
            // Initialize.
            loadTestXML();
        } else if(currentTestIndex < testGroups[testGroupIndex].tests.length) {
            // We have tests left in this test group.
            var test = testGroups[testGroupIndex].tests[currentTestIndex++];
            var scriptCode = (test.firstChild.text != undefined) ? test.firstChild.text : test.firstChild.textContent;

            loader.onTestReady(test.getAttribute("id"), $.base64Decode(scriptCode));
        } else if(testGroupIndex < testGroups.length - 1) {
            // We don't have tests left in this test group, so move on to the next.
            testGroupIndex++;
            getNextXML();
        } else {
            // We're done.
            loader.onTestsExhausted();
        }
    }

    /* Start over at the beginning */
    this.reset = function() {
        currentTestIndex = 0;
        testGroupIndex = 0;
    }
}

/* Controls test generation and running, and sends results to the presenter. */
function Controller() {
    var state  = 'stopped';
    var runner = new BrowserRunner();
    var loader = new TestLoader();
    var controller = this;

    runner.onComplete = function(test) {
        presenter.addTestResult(test);

        if(state === 'running')
            setTimeout(loader.getNextTest, 10);
    }

    loader.onInitialized = function(totalTests, version, date) {
        presenter.setVersion(version);
        presenter.setDate(date);
        presenter.setTotalTests(totalTests);
    }

    loader.onLoadingNextSection = function(path) {
        presenter.updateStatus("Loading: " + path);
    }

    loader.onTestReady = function(id, test) {
        presenter.updateStatus("Executing Test: " + id);
        runner.run(id, test);
    }

    loader.onTestsExhausted = function() {
        state = 'stopped';
        presenter.finished();
    }

    this.start = function() {
        state = 'running';
        loader.getNextTest();
        presenter.started();
    }
    
    this.pause = function() {
        state = 'paused';
        presenter.paused();
    }

    this.reset = function() {
        loader.reset();
        presenter.reset();
    }

    this.toggle = function() {
        if(state === 'running') {
            controller.pause();
        } else {
            controller.start();
        }
    }
}

var controller = new Controller()


function compareArray(aExpected, aActual) {
    if (aActual.length != aExpected.length) {
        return false;
    }

    aExpected.sort();
    aActual.sort();

    var s;
    for (var i = 0; i < aExpected.length; i++) {
        if (aActual[i] != aExpected[i]) {
            return false;
        }
    }

    return true;
}


function arrayContains(arr, expected) {
    var found;
    for (var i = 0; i < expected.length; i++) {
        found = false;
        for (var j = 0; j < arr.length; j++) {
            if (expected[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}

var supportsArrayIndexGettersOnArrays = undefined;
function fnSupportsArrayIndexGettersOnArrays() {
    if (typeof supportsArrayIndexGettersOnArrays !== "undefined") {
        return supportsArrayIndexGettersOnArrays;
    }

    supportsArrayIndexGettersOnArrays = false;

    if (fnExists(Object.defineProperty)) {
        var arr = [];
        Object.defineProperty(arr, "0", {
            get: function() {
                supportsArrayIndexGettersOnArrays = true;
                return 0;
            }
        });
        var res = arr[0];
    }

    return supportsArrayIndexGettersOnArrays;
}

var supportsArrayIndexGettersOnObjects = undefined;
function fnSupportsArrayIndexGettersOnObjects() {
    if (typeof supportsArrayIndexGettersOnObjects !== "undefined")
        return supportsArrayIndexGettersOnObjects;

    supportsArrayIndexGettersOnObjects = false;

    if (fnExists(Object.defineProperty)) {
        var obj = {};
        Object.defineProperty(obj, "0", {
            get: function() {
                supportsArrayIndexGettersOnObjects = true;
                return 0;
            }
        });
        var res = obj[0];
    }

    return supportsArrayIndexGettersOnObjects;
}


// ----------------------------------------------
// helpers that unittests can use (typically in
// their prereq function).
// ----------------------------------------------
function ConvertToFileUrl(pathStr) {
    return "file:" + pathStr.replace(/\\/g, "/");
}

function fnExists(f) {
    if (typeof (f) === "function") {
        return true;
    }
}

var supportsStrict = undefined;
function fnSupportsStrict() {
    "use strict";
    if (supportsStrict !== undefined) {
        return supportsStrict;
    }
    
    try {
        eval('with ({}) {}'); 
        supportsStrict = false;
    } catch (e) {
        supportsStrict = true;
    }
    return supportsStrict;
}

function fnGlobalObject() {
    return (function() { return this }).call(null);
}

$(function () {
    presenter.setup();

    $('.content-home').show();
    // Adding attribute to the tabs (e.g. Home, Run etc.) and attaching the click event on buttons (e.g. Reset, Start etc.)
    $('.nav-link').each(function (index) {
        //Adding "targetDiv" attribute to the header tab and on that basis the div related to header tabs are displayed
        if (index === 0) {
            $(this).attr('targetDiv', '.content-home');
        } else if (index === 1) {
            $(this).attr('targetDiv', '.content-tests');
        } else if (index === 2) {
            $(this).attr('targetDiv', '.content-results');
            $(this).attr('testRunning', 'false');
        } else if (index === 3) {
            $(this).attr('targetDiv', '.content-dev');
        }
        else {
            $(this).attr('targetDiv', '.content-browsers');
        }

        //Attaching the click event to the header tab that shows the respective div of header            
        $(this).click(function () {
            var target = $(this).attr('targetDiv');
            $('#contentContainer > div:visible').hide();
            $('.navBar .selected').toggleClass('selected');
            $(this).addClass('selected');
            $(target).show();

            //If clicked tab is Result, it generates the results.
            if ($(target).hasClass('content-results')) {
                presenter.refresh();
            }
        });
    });

    //Attach the click event to the start button. It starts, stops and pauses the tests
    $('.button-start').click(function () {
        controller.toggle();
    });

    //Attach the click event to the reset button. It reset all the test to zero
    $('.button-reset').click(function () {
        controller.reset();
    });
});
