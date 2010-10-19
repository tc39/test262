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
sth: Simple Test Harness
*/
sth.prototype.matchTestPath = function(filePath) {
    var cannonicalPath = filePath.slice(filePath.indexOf('TestCases'));
    var possibleMatch = this.testsByPath[cannonicalPath];
    if (possibleMatch) return possibleMatch;
    var pathId = filePath.slice(filePath.lastIndexOf('/') + 1, -3);
    possibleMatch = this.testsById[pathId];
    if (possibleMatch) return possibleMatch;
    return null;
}


function sth(globalObj) {
    //private variables of this object/class
    var callback,
	  scriptLoadTimer,
	  testRunTimer,
	  stopCommand,
	  tests,
	  buffer,
	  cachedGlobal,
	  globalState,
	  totalTestsRun,
	  totalTestsPassed,
	  totalTestsFailed,
	  failedTestCases,
	  allScriptTagsInjected,
	  testCasePaths,
	  possibleTestScripts,
	  totalTestCases,
	  executionCount,
	  failedToLoad,
	  loaderIframe,
	  xmlListLoaded,
	  xmlTestsLoaded,
	  aryTestCasePaths,
	  aryTestGroups,
	  failToLoadTests,
	  toublesomeTest,
	  requestPending;

    //constants
    var LOAD_TIMER_PERIOD = 20,
	  RUN_TIMER_PERIOD = 20,
	  DEFER_STOP_COUNT = 10,
	  DEFER_CHECK_TIMER_PERIOD = 50,
	  TESTLISTPATH = "resources/scripts/testcases/testcaseslist.xml";


    aryTestCasePaths = [];
    aryTestGroups = [];
    failToLoadTests = [];
    stopCommand = false;
    xmlListLoaded = false;
    xmlTestsLoaded = false;
    tests = [];
    buffer = [];
    totalTestsRun = 0;
    totalTestsPassed = 0;
    totalTestsFailed = 0;
    failedTestCases = [];
    allScriptTagsInjected = false;
    testCasePaths = []; ;
    possibleTestScripts = 0;
    totalTestCases = 0;
    executionCount = 0;
    loaderIframe = null;
    cachedGlobal = globalObj;
    failedToLoad = 0;

    globalState = {
        undefined: cachedGlobal.undefined,
        NaN: cachedGlobal.NaN,
        Infinity: cachedGlobal.Infinity,
        Object: cachedGlobal.Object,
        Array: cachedGlobal.Array,
        Function: cachedGlobal.Function,
        String: cachedGlobal.String,
        Number: cachedGlobal.Number,
        Boolean: cachedGlobal.Boolean,
        RegExp: cachedGlobal.RegExp,
        Math: cachedGlobal.Math,
        Error: cachedGlobal.Error,
        eval: cachedGlobal.eval,
        parseInt: cachedGlobal.parseInt,
        parseFloat: cachedGlobal.parseFloat,
        isNaN: cachedGlobal.isNaN,
        isFinite: cachedGlobal.isFinite,
        EvalError: cachedGlobal.EvalError,
        RangeError: cachedGlobal.RangeError,
        ReferenceError: cachedGlobal.ReferenceError,
        SyntaxError: cachedGlobal.SyntaxError,
        TypeError: cachedGlobal.TypeError,
        URIError: cachedGlobal.URIError
    }
    //private methods
    function clearTimers() {
        window.clearTimeout(scriptLoadTimer);
        window.clearTimeout(testRunTimer);
    }

    function restoreGlobals() {
        for (var prop in globalState)
            if (cachedGlobal[prop] !== globalState[prop]) cachedGlobal[prop] = globalState[prop];
    }

    function htmlEscape(str) {
        str = str.replace(/</g, '&lt;');
        return str.replace(/>/g, '&gt;');
    }

    //public methods
    this.getTotalTestsRun = function() {
        return totalTestsRun;
    }

    this.getTotalTestsPassed = function() {
        return totalTestsPassed;
    }

    this.getTotalTestsToRun = function() {
        return aryTestGroups.numTests;
    }

    this.getTotalTestsFailed = function() {
        return totalTestsFailed;
    }

    this.registerTest = function(to) {
        var t = new sth_test(to);
        t.registrationIndex = tests.length;
        tests.push(t);
        buffer.push(t);
    }

    this.run = function() {
        var ut = undefined;   // a particular unittest
        var res = false;       // the result of running the unittest
        var prereq = undefined;   // any prerequisite specified by the unittest
        var pres = true;        // the result of running that prerequite
        var regEx2 = /^[sS]?[0-9]{1,2}([.]?[0-9]{1,2}){0,2}/gi;
        var holdArray;
        var subsectionId;
        var chapterId;

        ut = buffer.shift();
        if (!ut)
            return;
        executionCount++;
        //this.currentTest = ut;


        if (callback) callback(
                { totalTestsRun: totalTestsRun, //Total run 
                    //totalRun : sth.tests.length, 
                    totalTestsFailed: totalTestsFailed,
                    totalTestsPassed: totalTestsPassed,
                    totalTestsToRun: totalTestCases,
                    failedTestCases: failedTestCases,
                    totalTestsLoaded: tests.length,
                    failedToLoad: failedToLoad,
                    totalTestCasesForProgressBar: ((totalTestsRun / totalTestCases) * 100) < 99 ? totalTestCases : tests.length,
                    nextActivity: "executing ... " + ut.id
                });



        // if the test specifies a prereq, run that.
        pre = ut.pre;
        pres = true;
        if (pre !== undefined) {
            try {
                pres = pre.call(ut);
                restoreGlobals();
                if (pres !== true) {
                    ut.res = 'Precondition failed';
                }
            } catch (e) {
                restoreGlobals();
                pres = false;
                ut.res = 'Precondition failed with exception: ' + e.description;
            }
        }

        //read the chapter id and sub section id by spliting the testcase id
        match2 = ut.id.match(regEx2);
        subsectionId = match2[0];
        if (match2[0].toLowerCase().indexOf('s') != -1) {
            subsectionId = subsectionId.substring(1);
        }
        holdArray = subsectionId.split(".");
        chapterId = holdArray[0] - SECTION_TOC_OFFSET;
        addCountToSection(subsectionId, "total");
        // if the prereq is met, run the testcase now.
        if (pres === true) {
            try {
                res = ut.theTestcase.call(ut.testObj);
                restoreGlobals();
                if (res === true || res === undefined) {
                    ut.res = 'pass';
                    totalTestsPassed++;
                    addCountToSection(subsectionId, "passed");
                }
                else {
                    ut.res = 'fail';
                    totalTestsFailed++;
                    failedTestCases[failedTestCases.length] = ut;
                    addCountToSection(subsectionId, "failed");
                }
            }
            catch (e) {
                restoreGlobals();
                ut.res = 'failed with exception: ' + e.description;
                totalTestsFailed++;
                failedTestCases[failedTestCases.length] = ut;
                addCountToSection(subsectionId, "failed");
            }
        }
        else {
            totalTestsFailed++;
            failedTestCases[failedTestCases.length] = ut;
            addCountToSection(subsectionId, "failed");
        }
        if (holdArray.length > 1) {
            if (holdArray.length == 3 & existsSection(subsectionId)) {
                sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].testCaseArray[sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].testCaseArray.length] = ut;
            }
            else {
                sections[chapterId].subSections[holdArray[1] - 1].testCaseArray[sections[chapterId].subSections[holdArray[1] - 1].testCaseArray.length] = ut;
            }
        }
        else
            sections[chapterId].testCaseArray[sections[chapterId].testCaseArray.length] = ut;

        totalTestsRun++;
    }


    this.startTesting = function(pageCallback, command) {
        if (!xmlListLoaded) {
            this.loadTestList();
            return;
        }
        stopCommand = false;

        var scriptLoader = new XMLHttpRequest();
        function loadNextTest() {
            testPath = aryTestGroups.shift();
            if (!testPath) {
                allScriptTagsInjected = true;
                scriptLoader = null;
            }
            else {
                scriptLoader.onreadystatechange = function() {
                    if (scriptLoader.readyState == 4) {
                        if (callback) callback(
                               { totalTestsRun: totalTestsRun, //Total run 
                                   totalTestsFailed: totalTestsFailed,
                                   totalTestsPassed: totalTestsPassed,
                                   totalTestsToRun: totalTestCases,
                                   failedTestCases: failedTestCases,
                                   totalTestsLoaded: tests.length,
                                   failedToLoad: failedToLoad,
                                   totalTestCasesForProgressBar: ((totalTestsRun / totalTestCases) * 100) < 99 ? totalTestCases : tests.length,
                                   nextActivity: "loading... " + scriptLoader.responseXML.getElementsByTagName("section")[0].getAttribute("name")
                               });

                        try {
                            var j = aryTestCasePaths.length;
                            var newTests = scriptLoader.responseXML.getElementsByTagName("test");

                            for (var i = 0; i < newTests.length; i++) {
                                var scriptCode = (newTests[i].firstChild.text != undefined) ? newTests[i].firstChild.text : newTests[i].firstChild.textContent;
                                loaderIframe.append('<script>' + $.base64.decode(scriptCode) + '</script>');
                                aryTestCasePaths[j++] = newTests[i].getAttribute("id");
                                if (tests[tests.length - 1].id != newTests[i].getAttribute("id")) {
                                    failToLoadTests[failToLoadTests.length] = newTests[i].getAttribute("id");
                                }
                            }
                            requestPending = false;
                            xmlTestsLoaded = true;
                            if (!stopCommand)
                                loadNextTest();
                        } catch (e) { requestPending = false; }
                    }
                };
                scriptLoader.open("GET", testPath, true);
                scriptLoader.send(null);
                requestPending = true;
            }
        }
        scriptLoadTimer = setTimeout(loadNextTest, 0);

        totalTestCases = possibleTestScripts = aryTestGroups.numTests;

        switch (command) {
            case TestConstants.RUNNING:
            case TestConstants.RESET:
                if (!testCasePaths.length > 0 && !allScriptTagsInjected) {
                    testCasePaths = aryTestCasePaths.slice(0, aryTestCasePaths.length);
                } else {
                    buffer = tests.clone();
                }
                break;
        }

        callback = pageCallback;

        var sth = this,
        loaderIframe = $('head'),
        testPath;



        function runNextTest() {
            if (!xmlTestsLoaded) {
                testRunTimer = setTimeout(runNextTest, RUN_TIMER_PERIOD);
                return;
            }

            if (buffer.length === 0 && !allScriptTagsInjected) {
                testRunTimer = setTimeout(runNextTest, RUN_TIMER_PERIOD);
                return;
            }

            callback(
                { totalTestsRun: totalTestsRun, //Total run 
                    //totalRun : sth.tests.length, 
                    totalTestsFailed: totalTestsFailed,
                    totalTestsPassed: totalTestsPassed,
                    totalTestsToRun: totalTestCases,
                    failedTestCases: failedTestCases,
                    totalTestsLoaded: tests.length,
                    failedToLoad: failedToLoad,
                    totalTestCasesForProgressBar: ((totalTestsRun / totalTestCases) * 100) < 99 ? totalTestCases : tests.length
                });

            sth.run();
            if (allScriptTagsInjected
			&& executionCount === tests.length
			&& buffer.length === 0
			&& !requestPending) {

                //Give the browser time to load the scripts, even if all the script tags have been injected,
                //browser might be having a lot of them in the queue that are yet to load
                if (DEFER_STOP_COUNT-- !== 0) {
                    testRunTimer = setTimeout(runNextTest, DEFER_CHECK_TIMER_PERIOD);
                    return;
                }
                callback(
				{ totalTestsRun: totalTestsRun,
				    //totalRun : sth.tests.length,
				    totalTestsFailed: totalTestsFailed,
				    totalTestsPassed: totalTestsPassed,
				    totalTestsToRun: totalTestCases,
				    failedTestCases: failedTestCases,
				    completed: true,
				    failedToLoad: failedToLoad,
				    totalTestCasesForProgressBar: tests.length,
				    totalTestsLoaded: tests.length
				});
                sth.stop();
            }
            else if (!stopCommand) {
                testRunTimer = setTimeout(runNextTest, RUN_TIMER_PERIOD);
                DEFER_STOP_COUNT = 10;
            }
        }
        testRunTimer = setTimeout(runNextTest, 0);
    }

    this.stop = function(testStatus) {
        clearTimers();
        stopCommand = true;
        var totalTestCasesForProgressBar = tests.length;

        switch (testStatus) {
            case TestConstants.PAUSED:
                totalTestsRun = totalTestsRun; //Total run 
                totalTestsFailed = totalTestsFailed;
                totalTestsPassed = totalTestsPassed;
                totalTestsToRun = totalTestCases;
                failedTestCases = failedTestCases;
                totalTestsLoaded = tests.length;
                totalTestCasesForProgressBar = ((totalTestsRun / totalTestCases) * 100) < 99 ? totalTestCases : tests.length;
                break;
            case TestConstants.RESET:
                totalTestsRun = 0; //Total run 
                totalTestsFailed = 0;
                totalTestsPassed = 0;
                totalTestsLoaded = tests.length
                global = window;
                failedTestCases = [];
                possibleTestScripts = totalTestCases;
                loadSections();
                break;
            case TestConstants.STOPPED:
                totalTestsRun = 0;
                totalTestsPassed = 0;
                totalTestsFailed = 0;
                executionCount = 0
                totalTestCasesForProgressBar = tests.length;
        }

        if (typeof callback !== 'undefined' && callback !== null) {
            callback(
				{ totalTestsRun: totalTestsRun, //Total run 
				    totalTestsFailed: totalTestsFailed,
				    totalTestsPassed: totalTestsPassed,
				    failedTestCases: failedTestCases,
				    totalTestsToRun: totalTestCases,
				    totalTestsLoaded: tests.length,
				    failedToLoad: failedToLoad,
				    totalTestCasesForProgressBar: totalTestCasesForProgressBar
				});
        }
    }

    this.getAllTests = function() {
        return tests;
    }
    this.getFailToLoad = function() {
        return failToLoadTests;
    }
    this.decrementTotalScriptCount = function() {
        failedToLoad++;
    }

    this.openSourceWindow = function(idx) {
        var ut = tests[idx];
        var popWnd = window.open("", "", "scrollbars=1, resizable=1");
        var innerHTML = '';

        innerHTML += '<b>Test </b>';
        if (ut.id)
            innerHTML += '<b>' + ut.id + '</b> <br /><br />';

        if (ut.description) {
            innerHTML += '<b>Description</b>';
            innerHTML += '<pre>' + ut.description.replace(/</g, '&lt;').replace(/>/g, '&gt;'); +' </pre>';
        }

        innerHTML += '<br /><br /><br /><b>Testcase</b>';
        innerHTML += '<pre>' + ut.theTestcase + '</pre>';

        if (ut.pre) {
            innerHTML += '<b>Precondition</b>';
            innerHTML += '<pre>' + ut.pre + '</pre>';
        }

        innerHTML += '<b>Path</b>';
        innerHTML += '<pre>' + ut.path + ' </pre>&nbsp';
        popWnd.document.write(innerHTML);
    }

    this.loadTestList = function(startTest) {
        var testsListLoader = new XMLHttpRequest();
        var sth = this;
        testsListLoader.onreadystatechange = function(sth) {
            if (testsListLoader.readyState == 4) {
                oTests = testsListLoader.responseXML.getElementsByTagName('testGroup');
                var testSuite = testsListLoader.responseXML.getElementsByTagName('testSuite');
                XML_TARGETTESTSUITEVERSION = testSuite[0].getAttribute("version");
                XML_TARGETTESTSUITEDATE = testSuite[0].getAttribute("date");

                for (var i = 0; i < oTests.length; i++) {
                    aryTestGroups[i] = (oTests[i].text != undefined) ? oTests[i].text : oTests[i].textContent;
                }
                xmlListLoaded = true;
                aryTestGroups.numTests = testsListLoader.responseXML.getElementsByTagName('testSuite')[0].getAttribute("numTests");
                startTest && sth.startTesting();
            }
        };
        testsListLoader.open("GET", TESTLISTPATH, true);
        testsListLoader.send(null);
    }
}



function sth_test(to, path) {
    //Create a sth_test from a test definition object, and path
    //TODO:  Update sth framework to work more directly with test definitiion objects.
    //this.testObj     = to;
    this.id = to.id;
    this.description = to.description;
    this.theTestcase = to.test;
    this.path = to.path;
    this.res = undefined;
    this.pre = to.precondition;
}

 
//define 
activeSth = new sth(window);
ES5Harness = activeSth;
loadSections();

function arrayContains(arr, expected) {
    var found;

    for (var i = 0; i < expected.length; i++) {
        found = false;

        for (var j = 0; j < arr.length; j++)
            if (expected[i] === arr[j]) {
            found = true;
            break;
        }

        if (!found)
            return false
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
    if (supportsStrict !== undefined) return supportsStrict;
    try { eval('with ({}) {}'); supportsStrict = false; } catch (e) { supportsStrict = true; };
    return supportsStrict;
}

function fnGlobalObject() {
    return (function() { return this }).call(null);
}
