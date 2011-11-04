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

/* Handles updating the page with information from the runner. */
function Presenter() {
    var altStyle = '',
        logger,
        date,
        version,
        table,
        backLink,

        globalSection = new Section(null, "0", "ECMA-262"),
        currentSection = globalSection,
        tests = {},
        totalTests = 0;

  
  //**INTERFACE****************************************************************
  /* Updates progress with the given test, which should have its results in it as well. */
    this.addTestResult = function(test) {
        tests[test.id] = test;
        getSectionById(test.id).addTest(test);

        updateCounts();

        logResult(test);
    }
    
    this.setVersion = function(v) {
        version = v;
        $(".targetTestSuiteVersion").text(v);
    }
  
  this.setDate = function(d) {
        date = d;
        $(".targetTestSuiteDate").text(d);
    }
  
    this.setTotalTests = function(tests) {
        totalTests = tests;
        $('#testsToRun').text(tests);
    }
  
  /* Write status to the activity bar. */
    this.updateStatus = function (str) {
       this.activityBar.text(str);
    }
  
  this.finished = function(elapsed) {
        $('.button-start').attr('src', 'images/start.png');
        $('.button-start').fadeOut('fast');
        if (isSiteDebugMode()) {
            this.activityBar.text('Overall Execution Time: ' + elapsed + ' minutes');
        } else {
            this.activityBar.css('color', 'black');
            if (globalSection.totalPassed===globalSection.totalTests) { 
                var passRate = "100";
            }
            else {
                var passRate = ((globalSection.totalPassed/globalSection.totalTests)*100).toFixed(1);
            }
            this.activityBar.text('Pass rate: ' + passRate + '%');

        }
        logger.show();
    }
  
  this.started = function () {
        $('.button-start').attr('src', 'images/pause.png');
    }

    this.paused = function () {
        $('.button-start').attr('src', 'images/resume.png');
    }

    this.reset = function() {
        globalSection.reset();
        updateCounts();
        logger.empty();

        currentSection = globalSection;
        renderCurrentSection();
        logger.hide();
    }
  
  
  /* Do some setup tasks. */
    this.setup = function() {
        
        table = $('.results-data-table');
        
        logger = $("#tableLogger");
        
        this.activityBar = $('#nextActivity');
        
        $('a.showSource', logger).live("click", openSourceWindow);
        $('a.showError', logger).live("click", openErrorWindow);
        logger.hide();
    }
    
    /* Refresh display of the report */
    this.refresh = function() {
        renderCurrentSection();
    }
    
  //**IMPLEMENTATION DETAILS***************************************************

    /* Renders the current section into the report window. */
    function renderCurrentSection() {
        if(globalSection.totalTests === 0) {
            $('#resultMessage').show();
        } else {
            $('#resultMessage').hide();
        }

        table.empty();
        table.append(currentSection.toHTML());
    }

    /* Opens a window with a test's source code. */
    function openSourceWindow(e) {
        var test = tests[e.target.href.match(/#(.+)$/)[1]],
            popWnd = window.open("", "", "scrollbars=1, resizable=1"),
            innerHTML = '';

        innerHTML += '<b>Test </b>';
        innerHTML += '<b>' + test.id + '</b> <br /><br />';

        if (test.description) {
            innerHTML += '<b>Description</b>';
            innerHTML += '<p>' + test.description.replace(/</g, '&lt;').replace(/>/g, '&gt;'); +' </p>';
        }

        innerHTML += '<br /><br /><br /><b>Testcase</b>';
        innerHTML += '<pre>' + test.code + '</pre>';

        innerHTML += '<b>Path</b>';
        innerHTML += '<pre>' + test.path + ' </pre>&nbsp';

        popWnd.document.write(innerHTML);
    }

    /* Opens a window with a test's failure message. */
    function openErrorWindow(e) {
        var test = tests[e.target.href.match(/#(.+)$/)[1]],
            popWnd = window.open("", "", "scrollbars=1, resizable=1"),
            innerHTML = '';

        innerHTML += '<b>Test </b>';
        innerHTML += '<b>' + test.id + '</b> <br /><br />';

        innerHTML += '<b>Failure</b>';
        innerHTML += '<pre>' + test.error + '</pre>';
        
        innerHTML += '<br /><br /><b>Testcase</b>';
        innerHTML += '<pre>' + test.code + '</pre>';
        
        popWnd.document.write(innerHTML);
    }

    /* Returns the section object for the specified section id
     * (eg. "7.1" or "15.4.4.12").
     */
    function getSectionById(id) {
        if(id == 0)
            return globalSection;

        var match = id.match(/\d+/g);
        var section = globalSection;

        for(var i = 0; i < match.length; i++) {
            if(typeof section.subsections[match[i]] !== "undefined") {
                section = section.subsections[match[i]];
            } else {
                break;
            }
        }
        return section;
    }

    /* Update the page with current status */
    function updateCounts() {
        $('#Pass').text(globalSection.totalPassed);
        $('#Fail').text(globalSection.totalFailed);
        $('#totalCounter').text(globalSection.totalTests);
        $('#failedToLoadCounter1').text(globalSection.totalFailedToLoad);
    }

    /* Append a result to the run page's result log. */
    function logResult(test) {
        var appendStr = "";
        altStyle = (altStyle !== ' ') ? ' ' : 'alternate';
        if (test.result==="fail") {
            appendStr += '<tr>';
            appendStr +=    '<td class="fail" style="min-width: 80px;">' + "<a class='showError' href='#" + test.id + "'>" + "Fail" + "</a>" + '</td>';
            appendStr +=    '<td style="min-width: 160px;">' + "<a class='showSource' href='#" + test.id + "'>" + test.id + "</a>" + '</td>';
            appendStr +=    '<td>' + test.description + '</td>'
            appendStr +=    '</tr>';
        }
        else if (test.result==="pass") {
            if  (isSiteDebugMode()) { return;}
            appendStr += '<tr class=\"' + altStyle + '\"><td class=\"pass\" style="min-width: 80px;">' + "Pass" + '</td><td  style="min-width: 160px;">' + "<a class='showSource' href='#" + test.id + "'>" + test.id + "</a>" + '</td><td>' + test.description + '</td></tr>';
        }
        else {
            throw "Result for '" + test.id + "' must either be 'pass' or 'fail', not '" + test.result + "'!";
        }
    
            
        logger.append(appendStr);
        logger.parent().attr("scrollTop", logger.parent().attr("scrollHeight"));
    }
}

var presenter = new Presenter();
