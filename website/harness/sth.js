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

// Do not cache any JSON files - see
// https://bugs.ecmascript.org/show_bug.cgi?id=87
$.ajaxSetup( {cache:false});

/*
 * Run a test in the browser. Works by injecting an iframe with the test code.
 *
 * Public Methods:
 * * run(id, test): Runs the test specified.
 *
 * Callbacks:
 * * onComplete(test): Called when the test is run. Test object
 *                     contains result and error strings describing how the
 *                     test ran.
 */
function BrowserRunner() {
    var iframe,             // injected iframe
        currentTest,        // Current test being run.
        scriptCache = {},   // Holds the various includes required to run certain tests.
        instance    = this,
        errorDetectorFileContents,
        simpleTestAPIContents,
        globalScopeContents,
        harnessDir = "harness/";

    $.ajax({async: false,
            dataType: "text",
            success: function(data){errorDetectorFileContents = data;},
            url:harnessDir+"ed.js"});

    $.ajax({async: false,
            dataType: "text",
            success: function(data){simpleTestAPIContents = data;},
            url:harnessDir+"sta.js"});

    $.ajax({async: false,
            dataType: "text",
            success: function(data){globalScopeContents = data;},
            url:harnessDir+"gs.js"});

    /* Called by the child window to notify that the test has
     * finished. This function call is put in a separate script block
     * at the end of the page so errors in the test script block
     * should not prevent this function from being called.
     */
    function testFinished() {
        if((typeof currentTest.result) === "undefined") {
            // We didn't get a call to testRun, which likely means the
            // test failed to load.
            currentTest.result = "fail";
            currentTest.error  = "Failed to load test case (probable parse error).";
            currentTest.description = "Failed to load test case!";
        } else if((typeof currentTest.error) !== "undefined") {
            // We have an error logged from testRun.
            if(currentTest.error instanceof Test262Error) {
                currentTest.error = currentTest.message;
            } else {
            currentTest.error = currentTest.error.name + ": " + currentTest.error.message;
            }
        } else if ((typeof currentTest.error === "undefined") && (currentTest.result === "fail")) {
            currentTest.error = "Test case returned non-true value.";
        }

        document.body.removeChild(iframe);

        instance.onComplete(currentTest);
    }

    /* Called from the child window after the test has run. */
    function testRun(id, path, description, codeString, result, error) {
        currentTest.id = id;
        currentTest.path = path;
        currentTest.description = description;
        currentTest.result = result;
        currentTest.error = error;
        currentTest.code = codeString;
    }


    /* Run the test. */
    this.run = function (test, code) {
        currentTest = {};
        for (var tempIndex in test) {
            if (test.hasOwnProperty(tempIndex)) {
                currentTest[tempIndex] = test[tempIndex];
            }
        }
        currentTest.code = code;

        iframe = document.createElement("iframe");
        iframe.setAttribute("id", "runnerIframe");
        //FireFox has a defect where it doesn't fire window.onerror for an iframe if the iframe
        //is invisible.
        if (!/firefox/i.test(navigator.userAgent)) {
            iframe.setAttribute("style", "display:none");
        }
        document.body.appendChild(iframe);

        var iwin = window.frames[window.frames.length - 1];
        var idoc = iwin.document;
        idoc.open();

        // Set up some globals.
        iwin.testRun = testRun;
        iwin.testFinished = testFinished;

        //TODO: these should be moved to sta.js
        var includes = code.match(/\$INCLUDE\(([^\)]+)\)/g), // find all of the $INCLUDE statements
            include;

        if (includes !== null) {
            // We have some includes, so loop through each include and
            // pull in the dependencies.
            for (var i = 0; i < includes.length; i++) {
                include = includes[i].replace(/.*\(('|")(.*)('|")\)/, "$2");

                // First check to see if we have this script cached
                // already, and if not, grab it.
                if (typeof scriptCache[include] === "undefined") {
                    $.ajax({
                        async: false,
                        url: 'harness/' + include,
                        success: function (s) { scriptCache[include] = s; }
                    });
                }

                // Finally, write the required script to the window.
                idoc.writeln("<script type='text/javascript'>" + scriptCache[include] + "</script>");
            }
        }

        //Write out all of our helper functions
        //idoc.writeln("<script type='text/javascript' src='harness/sta.js'>" + "</script>");
        idoc.writeln("<script type='text/javascript'>");
        idoc.writeln(simpleTestAPIContents);
        idoc.writeln("</script>");

        iwin.iframeError = undefined;
        iwin.onerror = undefined;
        iwin.testDescrip = currentTest;

        //Add an error handler capable of catching so-called early errors
        //idoc.writeln("<script type='text/javascript' src='harness/ed.js'>" + "</script>");
        idoc.writeln("<script type='text/javascript'>");
        idoc.writeln(errorDetectorFileContents);
        idoc.writeln("</script>");

        //Run the code
        idoc.writeln("<script type='text/javascript'>");
        if (/opera/i.test(navigator.userAgent)) { //Opera doesn't support window.onerror
            idoc.writeln("try {eval(\"" + this.convertForEval(code) + "\");} catch(e) {window.onerror(e.toString(), null, null);}");
        } else {
            idoc.writeln(code);
        }
        idoc.writeln("</script>");

        //Validate the results
        //idoc.writeln("<script type='text/javascript' src='harness/gs.js' defer>" + "</script>");
        idoc.writeln("<script type='text/javascript'>");
        idoc.writeln(globalScopeContents);
        idoc.writeln("</script>");
        idoc.close();
    };

    //--Helper functions-------------------------------------------------------
    this.convertForEval = function(txt) {
        txt = txt.replace(/\\/g,"\\\\");
        txt = txt.replace(/\"/g,"\\\"");
        txt = txt.replace(/\'/g,"\\\'");
        txt = txt.replace(/\r/g,"\\r");
        txt = txt.replace(/\n/g,"\\n");
        return txt;
    };
}

/* Loads tests from the sections specified in testcases.json.
 * Public Methods:
 * * getNextTest() - Start loading the next test.
 * * reset() - Start over at the first test.
 *
 * Callbacks:
 * * onLoadingNextSection(path): Called after a request is sent for the next section json, with the path to that json.
 * * onInitialized(totalTests, version, date): Called after the testcases.json is loaded and parsed.
 * * onTestReady(id, code): Called when a test is ready with the
 *       test's id and code.
 * * onTestsExhausted(): Called when there are no more tests to run.
 */
function TestLoader() {
    var testGroups       = [],
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
        $.ajax({url: group.path, dataType: 'json', success: function(data) {
            group.tests = data.testsCollection.tests;
            loader.getNextTest();
        },
	error: function (XMLHttpRequest, textStatus, errorThrown) {
		//alert(XMLHttpRequest);
	}

	});

        loader.onLoadingNextSection(group.path);
    }

    /* Get the test list xml */
    function loadTestXML() {
        var testsListLoader = new XMLHttpRequest();

        $.ajax({url: TEST_LIST_PATH, dataType: 'json', success: function(data) {
            var testSuite = data.testSuite;

            loader.version    = data.version;
            loader.date       = data.date;
            loader.totalTests = data.numTests;

            for (var i = 0; i < testSuite.length; i++) {
                testGroups[i] = {
                    path: testSuite[i],
                    tests: []
                };
            }
            loader.onInitialized(loader.totalTests,
                                 loader.version,
                                 loader.date);
            getNextXML();
        }});
    }

    function getIdFromPath (path) {
        //path is of the form "a/b/c.js"

        var id = path.split("/");
        //id is now of the form ["a", "b", "c.js"];

        id = id[id.length-1];
        //id is now of the form "c.js"

        id = id.replace(/\.js$/i, "");
        //id is now of the form "c"

        return id;
    }

    /* Move on to the next test */
    this.getNextTest = function() {
        if(testGroups.length == 0) {
            // Initialize.
            loadTestXML();
        } else if(currentTestIndex < testGroups[testGroupIndex].tests.length) {
            // We have tests left in this test group.
            var test = testGroups[testGroupIndex].tests[currentTestIndex++];
            var scriptCode = test.code;
            test.id = getIdFromPath(test.path);
            //var scriptCode = (test.firstChild.text != undefined) ?
            //    test.firstChild.text : test.firstChild.textContent;

            loader.onTestReady(test, $.base64Decode(scriptCode));
        } else if(testGroupIndex < testGroups.length - 1) {
            // We don't have tests left in this test group, so move on
            // to the next.
            testGroupIndex++;
            getNextXML();
        } else {
            // We're done.
            loader.onTestsExhausted();
        }
    };

    /* Start over at the beginning */
    this.reset = function() {
        currentTestIndex = 0;
        testGroupIndex = 0;
    };



}

/* Controls test generation and running, and sends results to the presenter. */
function Controller() {
    var state  = 'stopped';
    var runner = new BrowserRunner();
    var loader = new TestLoader();
    var controller = this;
    var startTime;
    var elapsed = 0;
    //Hook which allows browser implementers to hook their own test harness API
    //into this test framework to handle test case failures and passes in their
    //own way (e.g., logging failures to the filesystem)
    this.implementerHook = {
        //Adds a test result
        addTestResult: function (test) { },

        //Called whenever all tests have finished running.  Provided with the
        //elapsed time in milliseconds.
        finished: function(elapsed) { }
    };

    runner.onComplete = function(test) {
        presenter.addTestResult(test);
        try {
            controller.implementerHook.addTestResult(test);
        } catch(e) { /*no-op*/}

        if(state === 'running')
            setTimeout(loader.getNextTest, 10);
    };

    loader.onInitialized = function(totalTests, version, date) {
        presenter.setVersion(version);
        presenter.setDate(date);
        presenter.setTotalTests(totalTests);
    };

    loader.onLoadingNextSection = function(path) {
        presenter.updateStatus("Loading: " + path);
    };

    loader.onTestReady = function(testObj, testSrc) {
        presenter.updateStatus("Running Test: " + testObj.id);
        runner.run(testObj, testSrc);
    };

    loader.onTestsExhausted = function() {
        state = 'stopped';
        elapsed += new Date() - startTime;
        elapsed = elapsed/(1000*60);  //minutes
        elapsed = elapsed.toFixed(1);
        presenter.finished(elapsed);
        try {
            controller.implementerHook.finished(elapsed);
        } catch(e) { /*no-op*/}
    };

    this.start = function() {
        state = 'running';
        startTime = new Date();
        loader.getNextTest();
        presenter.started();
    };

    this.pause = function() {
        elapsed += new Date() - startTime;
        state = 'paused';
        presenter.paused();
    };

    this.reset = function() {
        startTime = new Date();
        elapsed = 0;
        loader.reset();
        presenter.reset();
    };

    this.toggle = function() {
        if(state === 'running') {
            controller.pause();
        } else {
            controller.start();
        }
    };
}

var controller = new Controller();

/* Helper function which shows if we're in the 'debug' mode of the Test262 site.
   This mode is only useful for debugging issues with the test harness and
   website. */
function isSiteDebugMode() {
    var str=window.location.href.substring(window.location.href.indexOf("?")+1);
    if(str.indexOf("sitedebug") > -1) {
        return true;
    }
    else {
        return false;
    }
}


$(function () {
    presenter.setup();
    $('.content-home').show();
    // Adding attribute to the tabs (e.g. Home, Run etc.) and
    // attaching the click event on buttons (e.g. Reset, Start etc.)
    $('.nav-link').each(function (index) {
        //Adding "targetDiv" attribute to the header tab and on that
        //basis the div related to header tabs are displayed
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

        //Attaching the click event to the header tab that shows the
        //respective div of header
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

    //Attach the click event to the start button. It starts, stops and
    //pauses the tests
    $('.button-start').click(function () {
        controller.toggle();
    });

    //Attach the click event to the reset button. It reset all the
    //test to zero
    $('.button-reset').click(function () {
        controller.reset();
    });
});
