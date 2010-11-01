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
sth.prototype.matchTestPath = function (filePath) {
    var cannonicalPath = filePath.slice(filePath.indexOf('TestCases'));
    var possibleMatch = this.testsByPath[cannonicalPath];
    if (possibleMatch) return possibleMatch;
    var pathId = filePath.slice(filePath.lastIndexOf('/') + 1, -3);
    possibleMatch = this.testsById[pathId];
    if (possibleMatch) return possibleMatch;
    return null;
}

function sth(globalObj) {
    //constants
    var LOAD_TIMER_PERIOD = 20,
        RUN_TIMER_PERIOD = 20,
        DEFER_STOP_COUNT = 10,
        DEFER_CHECK_TIMER_PERIOD = 50,
        TEST_LIST_PATH = "resources/scripts/testcases/testcaseslist.xml";
	  
    //private variables of this object/class
    var callback,
        scriptLoadTimer,
        testRunTimer,
        toublesomeTest,
        requestPending,
        globalState;
    var stopCommand = false;
    //It is an array that stores all the chapters' test cases when registerTest function is called.
    //It is used later to retrieve the count of total test cases.
    var tests = [];
    //It is an array that stores all the chapters' test cases when registerTest function is called.
    //It is used later to retrieve the test case to run unit test on it.
    var buffer = [];
    var cachedGlobal = globalObj;
    var totalTestsRun = 0;
    var totalTestsPassed = 0;
    var totalTestsFailed = 0;
    var failedTestCases = [];
    var allScriptTagsInjected = false;
    var testCasePaths = [];
    var possibleTestScripts = 0;
    var totalTestCases = 0;
    var executionCount = 0;
    var failedToLoad = 0;
    var loaderIframe = null;
    var xmlListLoaded = false;
    var xmlTestsLoaded = false;
    var aryTestCasePaths = [];
    //It stores all the main xml path
    var aryTestGroups = [];
    //It also stores all the main xml path for buffer
    var aryTestGroupsBuffer = [];
    var failToLoadTests = [];

    var cachedProperties = [
        'undefined',
        'NaN',
        'Infinity',
        'Object',
        'Object.prototype',
        'Object.prototype.toString',
        'Array',
        'Array.prototype',
        'Array.prototype.toString',
        'Function',
        'Function.prototype',
        'Function.prototype.toString',
        'String',
        'String.prototype',
        'String.prototype.toString',
        'String.fromCharCode',
        'Number',
        'Number.prototype.toString',
        'Boolean',
        'Boolean.prototype.toString',
        'RegExp',
        'RegExp.prototype',
        'RegExp.prototype.toString',
        'Math',
        'Error',
        'Error.prototype',
        'Error.prototype.toString',
        'eval',
        'parseInt',
        'parseFloat',
        'isNaN',
        'isFinite',
        'EvalError',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError',
        'Date',
        'Date.prototype',
        'Date.UTC',
        'Date.parse',
        'Date.prototype.toLocaleTimeString',
        'Date.prototype.toTimeString',
        'Date.prototype.toTimeString',
        'Date.prototype.valueOf',
        'Date.prototype.toString',
        'Date.prototype.toLocaleString',
        'Date.prototype.toDateString',
        'Date.prototype.constructor',
        'Date.prototype.getFullYear',
        'Date.prototype.getUTCFullYear',
        'Date.prototype.getMonth',
        'Date.prototype.getUTCMonth',
        'Date.prototype.getTime',
        'Date.prototype.getDate',
        'Date.prototype.getUTCDate',
        'Date.prototype.getUTCDay',
        'Date.prototype.getDay',
        'Date.prototype.getUTCHours',
        'Date.prototype.getHours',
        'Date.prototype.getMinutes',
        'Date.prototype.getUTCMinutes',
        'Date.prototype.getSeconds',
        'Date.prototype.getUTCSeconds',
        'Date.prototype.getMilliseconds',
        'Date.prototype.getUTCMilliseconds',
        'Date.prototype.getTimezoneOffset',
        'Date.prototype.setFullYear',
        'Date.prototype.setUTCFullYear',
        'Date.prototype.setMonth',
        'Date.prototype.setUTCMonth',
        'Date.prototype.setTime',
        'Date.prototype.setDate',
        'Date.prototype.setUTCDate',
        'Date.prototype.setUTCDay',
        'Date.prototype.setDay',
        'Date.prototype.setUTCHours',
        'Date.prototype.setHours',
        'Date.prototype.setMinutes',
        'Date.prototype.setUTCMinutes',
        'Date.prototype.setSeconds',
        'Date.prototype.setUTCSeconds',
        'Date.prototype.setMilliseconds',
        'Date.prototype.setUTCMilliseconds',
        'Date.prototype.toUTCString',
        'Date.prototype.toISOString',
        'Date.prototype.toJSON',
        'Date.prototype.toLocaleDateString'
    ]

    globalState = {};

    var tokens;
    var base;
    var prop;

    for (var i = 0; i < cachedProperties.length; i++) {
        tokens = cachedProperties[i].split(".");
        base = cachedGlobal;

        while (tokens.length > 1)
            base = base[tokens.shift()];

        prop = tokens.shift();

        globalState[cachedProperties[i]] = base[prop];
    }
    
    //private methods
    function clearTimers() {
        window.clearTimeout(scriptLoadTimer);
        window.clearTimeout(testRunTimer);
    }


    var currentTestId;

    function restoreGlobals() {
        var tokens;
        var base;
        var prop;

        for (var key in globalState) {
            tokens = key.split(".");
            base = cachedGlobal;

            while (tokens.length > 1) {
                prop = tokens.shift();
                base = base[prop];
            }

            prop = tokens.shift();

            if (base[prop] === base[prop] && base[prop] !== globalState[key])
            {
                base[prop] = globalState[key];
            }
        }

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

    //If user enters chapter index, it sets the aryTestGroups, tests, buffer and initialize the subsections
    //If user enters nothing, it executes all the test cases
    this.setChapter = function () {
        aryTestGroups = CloneArray(aryTestGroupsBuffer);
        aryTestGroups.numTests = aryTestGroupsBuffer.numTests;
        var userInputChapterIndex = $.trim($("#chapterId").val());

        tests = [];
        buffer = [];

        //Initialize the subSections
        for (var secInd = 0; secInd < sections.length; secInd++) {
            for (var subSecInd = 0; subSecInd < sections[secInd].subSections.length; subSecInd++) {
                sections[secInd].subSections[subSecInd].total = 0;
                sections[secInd].subSections[subSecInd].passed = 0;
                sections[secInd].subSections[subSecInd].failed = 0;
            }
        }
        $(".results-data-table").html("");
        stopCommand = false;

        if (callback) {
            //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
            //That updates the information on the UI
            callback(
                        {
                            totalTestsRun: 0,
                            totalTestsFailed: 0,
                            totalTestsPassed: 0,
                            totalTestsToRun: 0,
                            failedTestCases: 0,
                            totalTestsLoaded: 0,
                            failedToLoad: 0,
                            totalTestCasesForProgressBar: 0,
                            nextActivity: ""
                        });
        }

        if (userInputChapterIndex !== "") {
            var mapedChapterIndex = null;
            for (var chapterIndex = 0; chapterIndex < aryTestGroups.length; chapterIndex++) {
                if (chapterIndex === parseInt(userInputChapterIndex)) {                    
                    mapedChapterIndex = chapterIndex;
                }
            }

            if (mapedChapterIndex !== null) {
                aryTestGroups = [];
                aryTestGroups[0] = aryTestGroupsBuffer[mapedChapterIndex];
                aryTestGroups.numTests = aryTestGroupsBuffer.numTests;
            }
            else {               
                $("#resultMessage").show();
                alert("Chapter index is not valid. Please keep blank for execution of all the test cases or enter correct index");
                return false;
            }
        }

        return true;
    }

    this.run = function ()
    {
        var ut = undefined;   // a particular unittest
        var res = false;       // the result of running the unittest
        var prereq = undefined;   // any prerequisite specified by the unittest
        var pres = true;        // the result of running that prerequite
        var alphaNumericWithDot = /^[sS]?[0-9]{1,2}([.]?[0-9]{1,2}){0,2}/gi;
        var holdArray;
        var subsectionId;
        var chapterId;

        ut = buffer.shift();
        if (!ut)
        {
            return;
        }
        executionCount++;
        //this.currentTest = ut;


        if (callback)
        {
            //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
            //That updates the information on the UI
            callback(
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
        }

        // if the test specifies a prereq, run that.
        pre = ut.pre;
        pres = true;
        currentTestId = ut.id;
        if (pre !== undefined)
        {
            try
            {
                pres = pre.call(ut);
                restoreGlobals();
                if (pres !== true)
                {
                    ut.res = 'Precondition failed';
                }
            } catch (e)
            {
                restoreGlobals();
                pres = false;
                var errDes = (e.message) ? e.message : e.description;
                ut.res = 'Precondition failed with exception: ' + errDes;
            }
        }

        //read the chapter id and sub section id by spliting the testcase id
        match2 = ut.id.match(alphaNumericWithDot);
        subsectionId = match2[0];
        if (match2[0].toLowerCase().indexOf('s') != -1)
        {
            subsectionId = subsectionId.substring(1);
        }
        holdArray = subsectionId.split(".");
        chapterId = holdArray[0] - SECTION_TOC_OFFSET;
        addCountToSection(subsectionId, "total");
        // if the prereq is met, run the testcase now.
        if (pres === true)
        {
            try
            {
                res = ut.theTestcase.call(ut.testObj);
                restoreGlobals();
                if (res === true || res === undefined)
                {
                    ut.res = 'pass';
                    totalTestsPassed++;
                    addCountToSection(subsectionId, "passed");
                }
                else
                {
                    ut.res = 'fail';
                    totalTestsFailed++;
                    failedTestCases[failedTestCases.length] = ut;
                    addCountToSection(subsectionId, "failed");
                }
            }
            catch (e)
            {
                restoreGlobals();
                var errDes = (e.message) ? e.message : e.description;
                ut.res = 'failed with exception: ' + errDes;
                totalTestsFailed++;
                failedTestCases[failedTestCases.length] = ut;
                addCountToSection(subsectionId, "failed");
            }
        }
        else
        {
            totalTestsFailed++;
            failedTestCases[failedTestCases.length] = ut;
            addCountToSection(subsectionId, "failed");
        }
        if (holdArray.length > 1)
        {
            if (holdArray.length === 3 & existsSection(subsectionId))
            {
                sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].testCaseArray[sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].testCaseArray.length] = ut;
            }
            else
            {
                sections[chapterId].subSections[holdArray[1] - 1].testCaseArray[sections[chapterId].subSections[holdArray[1] - 1].testCaseArray.length] = ut;
            }
        }
        else
            sections[chapterId].testCaseArray[sections[chapterId].testCaseArray.length] = ut;

        totalTestsRun++;
    }


    this.startTesting = function (pageCallback, command) {
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
                scriptLoader.onreadystatechange = function () {
                    if (scriptLoader.readyState == 4) {
                        if (callback) {
                            //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
                            //That updates the information on the UI
                            callback(
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
                        }
                        try {
                            var j = aryTestCasePaths.length;
                            var newTests = scriptLoader.responseXML.getElementsByTagName("test");

                            for (var i = 0; i < newTests.length; i++) {
                                var scriptCode = (newTests[i].firstChild.text != undefined) ? newTests[i].firstChild.text : newTests[i].firstChild.textContent;
                                loaderIframe.append('<script>' + $.base64Decode(scriptCode) + '</script>');
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
            case "running":
            case "reset":
                if (!testCasePaths.length > 0 && !allScriptTagsInjected) {
                    testCasePaths = aryTestCasePaths.slice(0, aryTestCasePaths.length);
                } else {
                    buffer = CloneArray(tests);
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
            if ($("#chapterId").val() !== "") {
                totalTestCases = tests.length;
            }
            //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
            //That updates the information on the UI
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
                //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
                //That updates the information on the UI
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

    //This function stops, resets and pauses on the basis of parameter passed to it. 
    this.stop = function(testStatus) {
        clearTimers();
        stopCommand = true;
        var totalTestCasesForProgressBar = tests.length;

        switch (testStatus) {
            case "paused":
                totalTestsRun = totalTestsRun; //Total run 
                totalTestsFailed = totalTestsFailed;
                totalTestsPassed = totalTestsPassed;
                totalTestsToRun = totalTestCases;
                failedTestCases = failedTestCases;
                totalTestsLoaded = tests.length;
                totalTestCasesForProgressBar = ((totalTestsRun / totalTestCases) * 100) < 99 ? totalTestCases : tests.length;
                break;
            case "reset":
                totalTestsRun = 0; //Total run 
                totalTestsFailed = 0;
                totalTestsPassed = 0;
                totalTestsLoaded = tests.length
                global = window;
                failedTestCases = [];
                possibleTestScripts = totalTestCases;
                loadSections();
                break;
            case "stopped":
                totalTestsRun = 0;
                totalTestsPassed = 0;
                totalTestsFailed = 0;
                executionCount = 0
                totalTestCasesForProgressBar = tests.length;
        }

        if (typeof callback !== 'undefined' && callback !== null) {
            //It executes a callback function with an object that contains all the information like total test cases to run, left test cases to run etc.
            //That updates the information on the UI
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

    //It opens the source code for the test case that is run 
    this.openSourceWindow = function(idx) {
        var ut = tests[idx];
        var popWnd = window.open("", "", "scrollbars=1, resizable=1");
        var innerHTML = '';

        innerHTML += '<b>Test </b>';
        if (ut.id) {
            innerHTML += '<b>' + ut.id + '</b> <br /><br />';
        }

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

    //It loads all the chapters' xml that contains the informations of test cases
    this.loadTestList = function(startTest) {
        var testsListLoader = new XMLHttpRequest();
        var sth = this;
        testsListLoader.onreadystatechange = function(sth) {
            if (testsListLoader.readyState == 4) {
                oTests = testsListLoader.responseXML.getElementsByTagName('testGroup');
                var testSuite = testsListLoader.responseXML.getElementsByTagName('testSuite');
                pageHelper.XML_TARGETTESTSUITEVERSION = testSuite[0].getAttribute("version");
                pageHelper.XML_TARGETTESTSUITEDATE = testSuite[0].getAttribute("date");
                //It sets version and date in Run and Result tab. It is called from here so that if user goes directly to Run or Results tab, version and date should reflect.
                pageHelper.setVersionAndDate();
                for (var i = 0; i < oTests.length; i++) {
                    aryTestGroups[i] = (oTests[i].text != undefined) ? oTests[i].text : oTests[i].textContent;
                    aryTestGroupsBuffer[i] = (oTests[i].text != undefined) ? oTests[i].text : oTests[i].textContent;
                }
                xmlListLoaded = true;
                aryTestGroupsBuffer.numTests = aryTestGroups.numTests = testsListLoader.responseXML.getElementsByTagName('testSuite')[0].getAttribute("numTests");               
                startTest && sth.startTesting();
            }
        };
        testsListLoader.open("GET", TEST_LIST_PATH, true);
        testsListLoader.send(null);
    }
}



function sth_test(to, path) {
    //Stores information in sth_test from a test definition object, and path
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

