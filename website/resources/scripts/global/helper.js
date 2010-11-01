
$(function () {
    pageHelper.init();
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
            //If clicked tab is Result, it generates the results.
            if ($(target).hasClass('content-results')) {
                if ($(this).attr('testRunning') === 'true') { return; }
                pageHelper.generateReportTable();
            }
            $('#contentContainer > div:visible').hide();
            $('.navBar .selected').toggleClass('selected');
            $(this).addClass('selected');
            $(target).show();
            //If clicked tab is Browsers Report, it shows the reports
            if (target === '.content-browsers') {
                $("body").addClass("busy");
                setTimeout(function () {
                    buildTable();
                }, 500);
            }
        });
    });

    //Attach the click event to the start button. It starts, stops and pauses the tests
    $('.button-start').click(function () {
        $('#testsToRun').text(ES5Harness.getTotalTestsToRun());
        $('#totalCounter').text(0);
        $('#Pass').text(0);
        $('#Fail').text(0);
        $('#totalFailedCounter').text(0);
        $('#failedToLoadCounter1').text(0);
        $('#failedToLoadCounter').text(0);
        //It stores the state of the test case in the data of button, whether running, paused or stopped. That is used later to get the present state
        var testStatus = $(this).data('testStatus');

        switch (testStatus) {
            case undefined:
            case "stopped":
                ES5Harness.stop("stopped");
                pageHelper.logger.find('tr').remove();
                if (!ES5Harness.setChapter(pageHelper.update)) {
                    return false;
                }
                $(this).data('testStatus', "running");
                ES5Harness.startTesting(pageHelper.update, "reset");
                $(this).attr('src', 'resources/images/pause.png');
                pageHelper.configureReportLink(true);
                break;
            case "running":
                $(this).data('testStatus', "paused");
                ES5Harness.stop("paused");
                $(this).attr('src', 'resources/images/resume.png');
                pageHelper.configureReportLink(false);
                break;
            case "paused":
                $(this).data('testStatus', "running");
                $(this).attr('src', 'resources/images/pause.png');
                ES5Harness.startTesting(pageHelper.update, "resume");
                pageHelper.configureReportLink(true);
                break;
        }
    });

    //Attach the click event to the reset button. It reset all the test to zero
    $('.button-reset').click(
    /*function () {
    pageHelper.configureReportLink(false);
    $('.button-start').data('testStatus', "stopped").attr('src', 'resources/images/start.png');
    pageHelper.logger.find('tr').remove();
    ES5Harness.stop("reset");
    ES5Harness.resetSections();
    $('#failedToLoadCounter1').text(0);
    $('#failedToLoadCounter').text(0);
    $('#totalFailedCounter').text(0);
    pageHelper.failedToLoad = 0;
    resetResults();
    $('#nextActivity').text("");
    } */
    function () {
        location.replace(location.protocol + '//' + location.host + '/default.html?run');
    }
    );

    //Attaching the click event to the "Download results as XML" link
    $('#ancGenXMLReport').click(function (e) {
        pageHelper.generateReportXml();
        return false;
    });

    //load xml testcase path list when page loads
    ES5Harness && ES5Harness.loadTestList();
    pageHelper.selectTab();
});

var pageHelper = {

    //constants
    XML_TARGETTESTSUITENAME: 'ECMAScript Test262 Site',
    XML_TARGETTESTSUITEVERSION: '',
    XML_TARGETTESTSUITEDATE: '',
    RED_LIMIT: 50,
    YELLOW_LIMIT: 75,
    GREEN_LIMIT: 99.9,

    logger: undefined,
    loggerParent: undefined,
    progressBar: undefined,
    failedToLoad: 0,

    init: function () {
        this.logger = $('#tableLogger');
        this.loggerParent = this.logger.parent();
        this.progressBar = $('#progressbar');
        this.failedToLoad = 0;
    },

    //It sets the tab on the basis of url e.g. if URL is <domain name>\default.html?result, Result tab will be selected
    selectTab: function () {
        var queryStr = location.search.toLowerCase();
        if (queryStr.indexOf("run") > 0) {
            $("#run").click();
        }
        else if (queryStr.indexOf("result") > 0) {
            $("#results").click();
        }
        else if (queryStr.indexOf("development") > 0) {
            $("#development").click();
        }
        else if (queryStr.indexOf("browser") > 0) {
            $("#browsers").click();
        }
    },

    setVersionAndDate: function () {
        //Set the version and date
        $(".targetTestSuiteVersion").text(pageHelper.XML_TARGETTESTSUITEVERSION);
        $(".targetTestSuiteDate").text(pageHelper.XML_TARGETTESTSUITEDATE);
    },

    //It sets title to the Results tab when tests are running
    configureReportLink: function (executing) {
        var reportLink = $('.test-report-link');
        if (executing) {
            reportLink.attr('testRunning', 'true');
            reportLink.parent().attr('title', 'Please wait till the test run is completed or stop the test run before viewing the report.');
        } else {
            reportLink.parent().attr('title', '');
            reportLink.attr('testRunning', 'false');
        }
    },

    //This is used as callback function for passing in sth.js
    update: function (detailsObj) {
        $('#testsToRun').text(detailsObj.totalTestsToRun);
        if (!isNaN(detailsObj.totalTestsRun)) {
            $('#totalCounter').text(detailsObj.totalTestsRun);
        }

        $('#Pass').text(detailsObj.totalTestsPassed);
        $('#Fail').text(detailsObj.totalTestsFailed);
        $('#failedToLoadCounter1').text(pageHelper.failedToLoad);
        $('#failedToLoadCounter').text(pageHelper.failedToLoad);
        $('#nextActivity').text(detailsObj.nextActivity);
        if (detailsObj.completed) {
            var btnStart = $('#btnStart').attr('src', 'resources/images/start.png');
            btnStart.data('testStatus', "stopped");
            $('#totalFailedCounter').text(pageHelper.failedToLoad);
            pageHelper.configureReportLink(false);
            $('#nextActivity').text("");
        }

        var altStyle = (pageHelper.logger.children().length % 2) === 0 ? ' ' : 'alternate';
        var appendStr = '';
        var length = 0;
        if (detailsObj.failedTestCases && detailsObj.failedTestCases.length > 0) {
            length = detailsObj.failedTestCases.length;
            var testObj;
            while (length--) {
                altStyle = (altStyle !== ' ') ? ' ' : 'alternate';
                testObj = detailsObj.failedTestCases.shift();
                appendStr += '<tbody><tr class=\"' + altStyle + '\"><td width=\"20%\">' + testObj.id + '</td><td>' + testObj.description + '</td><td align="right"><span class=\"Fail\">Fail</span></td></tr></tbody>';
            }
            pageHelper.logger.append(appendStr);
        }

        var testCasesPaths = this.ES5Harness.getFailToLoad();
        appendStr = '';
        if (testCasesPaths.length > 0) {
            length = testCasesPaths.length;
            while (length--) {
                testObj = testCasesPaths.shift();
                altStyle = (altStyle !== ' ') ? ' ' : 'alternate';
                appendStr += '<tbody><tr class=\"' + altStyle + '\"><td width=\"20%\">' + testObj + '</td><td>' + '' + '</td><td align="right"><span class=\"Fail\">Not Loaded</span></td></tr></tbody>';
                pageHelper.failedToLoad++;
            }
            pageHelper.logger.append(appendStr);
        }
        pageHelper.loggerParent.attr("scrollTop", pageHelper.loggerParent.attr("scrollHeight"));
        pageHelper.progressBar.reportprogress(detailsObj.totalTestsRun, detailsObj.totalTestCasesForProgressBar);
    },

    //This is used to generate the xml for the results
    generateReportXml: function () {
        var reportWindow; //window that will output the xml data
        var xmlData;      //array instead of string concatenation
        var dateNow;
        var xml;  // stop condition of for loop stored in a local variable to improve performance

        dateNow = new Date();

        xml = '<testRun>\r\n' +
              '<userAgent>' + window.navigator.userAgent + '</userAgent>\r\n' +
			  '<browserName>REPLACE WITH BROWSERNAME BEFORE PUSHING TO HG</browserName>\r\n' +
			  '<Date>' + dateNow.toDateString() + '</Date>\r\n' +
			  '<Submitter> ADD SUBMITTER</Submitter>\r\n' +
			  '<targetTestSuiteName>' + this.XML_TARGETTESTSUITENAME + '</targetTestSuiteName>\r\n' +
			  '<targetTestSuiteVersion>' + this.XML_TARGETTESTSUITEVERSION + '</targetTestSuiteVersion>\r\n' +
			  '<targetTestSuiteDate>' + this.XML_TARGETTESTSUITEDATE + '</targetTestSuiteDate>\r\n' +
			  ' <Tests>\r\n\r\n';

        reportWindow = window.open();
        reportWindow.document.writeln("<title>ECMAScript Test262 XML</title>");
        if (ES5Harness.getTotalTestsRun() !== parseInt(ES5Harness.getTotalTestsToRun())) {
            reportWindow.document.writeln("<div><b>Test Results file cannot be generated because execution is not completed</b></div>");

        }
        else {
            reportWindow.document.writeln("<div><br/></div>");
            reportWindow.document.write("<textarea id='results' style='width: 100%; height: 800px;'>");
            reportWindow.document.write(xml);
            xml = "";
            function parseSection(section) {
                xml += "<section id='" + section.id + "' name='" + section.name + "'>\r\n";
                for (var i = 0; i < section.testCaseArray.length; i++) {
                    xml += '<test>\r\n' +
                          '  <testId>' + section.testCaseArray[i].id + '</testId>\r\n' +
                          '  <res>' + section.testCaseArray[i].res + '</res>\r\n' +
                          '</test>\r\n';
                }
                if (section.subSections !== undefined) {
                    for (var i = 0; i < section.subSections.length; i++) {
                        parseSection(section.subSections[i]);
                        xml += '</section>\r\n';
                    }
                }
            }
            for (var index = 0; index < sections.length; index++) {
                parseSection(sections[index]);
                xml += '</section>\r\n';
            }
            reportWindow.document.write(xml);
            reportWindow.document.write('</Tests>\r\n</testRun>\r\n</textarea>\r\n');
            reportWindow.document.close();
        }
    },

    htmlEscape: function (str) {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    numTests: function (section) {
        nTest = 0;
        for (var subSectionIndex = 0; subSectionIndex < section.subSections.length; subSectionIndex++) {
            if (section.subSections[subSectionIndex].total !== 0) {
                nTest++;
            }
        }
        return nTest;
    },

    //It generates the report that is displayed in results tab
    generateReportTable: function () {
        var bResultsdisplayed = false;

        $('#backlinkDiv').hide();
        //define local scope to sections array
        var sections = window.sections;
        var dataTable = $('.results-data-table');
        $('.results-data-table').find("tr").remove();

        //set the total, pass and fail count
        $('.totalCases').text(ES5Harness.getTotalTestsRun());
        $('.passedCases').text(ES5Harness.getTotalTestsPassed());
        $('.failedCases').text(ES5Harness.getTotalTestsFailed());
        $('#failedToLoadCounterDetails').text(pageHelper.failedToLoad);
        try {
            $('.crumbs #link1').remove();
            $('.crumbs #link2').remove();
            $('.crumbs #link3').remove();
        }
        catch (e) {
            $('.crumbs #link1').text("");
            $('.crumbs #link2').text("");
            $('.crumbs #link3').text("");
        }

        //set the navigation bar
        var anc1 = $('<a id="link1">Test Report ></a>');
        anc1.attr('href', 'javascript:pageHelper.generateReportTable();');
        $('.crumbs').append(anc1);
        $('.crumbs #link1').removeClass().addClass("setBlack");

        var totalSubSectionPassed = 0;
        for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            if (pageHelper.numTests(sections[sectionIndex]) !== 0) {
                bResultsdisplayed = true;
                dataTable.append('<tbody><tr><td class="tblHeader" colspan="2">' + 'Chapter ' + sections[sectionIndex].id + '- ' + sections[sectionIndex].name + '</td></tr></tbody>');
                var mainSectionPercentageStyle = "reportRed";
                // if there are any cases directly inside the chapter instead of in subsections
                if (sections[sectionIndex].testCaseArray.length > 0) {

                    for (var index = 0; index < sections[sectionIndex].subSections.length; index++) {
                        totalSubSectionPassed = totalSubSectionPassed + sections[sectionIndex].subSections[index].passed;
                    }

                    var calculatedLimit = (sections[sectionIndex].passed - totalSubSectionPassed) / sections[sectionIndex].testCaseArray.length * 100;
                    if (calculatedLimit >= pageHelper.GREEN_LIMIT) {
                        mainSectionPercentageStyle = "reportGreen";
                    }
                    else if (Math.round(calculatedLimit) >= pageHelper.YELLOW_LIMIT) {
                        mainSectionPercentageStyle = "reportLightGreen";
                    }
                    else if (Math.round(calculatedLimit) >= pageHelper.RED_LIMIT) {
                        mainSectionPercentageStyle = "reportYellow";
                    }
                    else {
                        mainSectionPercentageStyle = "reportRed";
                    }

                    dataTable.append('<tbody><tr><td><a href="javascript:pageHelper.generateDetailedReportTable(' + sectionIndex + ',-1);">' + "In Chapter " + sections[sectionIndex].id + '</a></td><td class="' + mainSectionPercentageStyle + '">' + (Math.round(calculatedLimit)) + '%' + '</td></tr></tbody>');
                }
            }

            for (var subSectionIndex = 0; subSectionIndex < sections[sectionIndex].subSections.length; subSectionIndex++) {
                var styleClass;
                if (sections[sectionIndex].subSections[subSectionIndex].total !== 0) {

                    var passedPercentage = 0;
                    //If there are subsections in subsection along with direct test cases, calculation is done like below
                    if (sections[sectionIndex].subSections[subSectionIndex].subSections) {
                        var totalPassedSubSections = sections[sectionIndex].subSections[subSectionIndex].passed;
                        var totalSubSections = sections[sectionIndex].subSections[subSectionIndex].total;
                        for (var subSubSectionIndex = 0; subSubSectionIndex < sections[sectionIndex].subSections[subSectionIndex].subSections.length; subSubSectionIndex++) {
                            totalPassedSubSections = totalPassedSubSections + sections[sectionIndex].subSections[subSectionIndex].subSections[subSubSectionIndex].passed;
                            totalSubSections = totalSubSections + sections[sectionIndex].subSections[subSectionIndex].subSections[subSubSectionIndex].total;
                        }

                        passedPercentage = totalPassedSubSections / totalSubSections * 100;
                    }
                    else {
                        passedPercentage = sections[sectionIndex].subSections[subSectionIndex].getPassPercentage();
                    }
                    if (passedPercentage >= pageHelper.GREEN_LIMIT) {
                        styleClass = "reportGreen";
                    }
                    else if (passedPercentage >= pageHelper.YELLOW_LIMIT) {
                        styleClass = "reportLightGreen";
                    }
                    else if (passedPercentage >= pageHelper.RED_LIMIT) {
                        styleClass = "reportYellow";
                    }
                    else {
                        styleClass = "reportRed";
                    }

                    dataTable.append('<tbody><tr><td class="sectionName"><a href="javascript:pageHelper.generateSubSectionReportTable(' + sectionIndex + ',' + subSectionIndex + ');">' + sections[sectionIndex].subSections[subSectionIndex].name + '</a></td><td class="' + styleClass + '">' + (Math.round(passedPercentage)) + '%' + '</td></tr></tbody>');
                    bResultsdisplayed = true;
                }
            }

            totalSubSectionPassed = 0;
        }

        // append the legend if results have been displayed
        if (bResultsdisplayed) {
            $('#legend').show();
        }

        //Disappear the note if there are records in the result
        if ($.trim(dataTable.text()) !== "")
            $("#resultMessage").hide();
        else
            $("#resultMessage").show();
    },

    //It shows the sub section of the results
    generateSubSectionReportTable: function (sectionIndex, subSectionIndex) {
        var sections = window.sections;
        var dataTable = $('.results-data-table');
        $('.results-data-table').find("tr").remove();

        var styleClass;
        var totalSubSectionPassed = 0;
        var totalSubSectionFailed = 0;

        // if there is no subsections under a section(say 7.1) then directly display the detailed test report
        if (!sections[sectionIndex].subSections[subSectionIndex].subSections) {
            pageHelper.generateDetailedReportTable(sectionIndex, subSectionIndex);
        }
        else {
            try {
                $('.crumbs #link2').remove();
            }
            catch (e) {
                $('.crumbs #link2').text("");
            }
            var anc2 = $("<a id='link2'>" + " Chapter " + sections[sectionIndex].id.toString() + ": " + sections[sectionIndex].name + ": " + sections[sectionIndex].subSections[subSectionIndex].name + " > " + "</a>");
            anc2.attr('href', 'javascript:pageHelper.generateSubSectionReportTable(' + sectionIndex + ',' + subSectionIndex + ');');
            $('.crumbs').append(anc2);

            $('.crumbs #link2').removeClass().addClass("setBlack");
            $('.crumbs #link1').removeClass().addClass("setBlue");

            var anc = $('.crumbs').find('a');
            anc.click(function () {
                $(this).next('a').remove();
            });
            try {
                $('.crumbs #link3').remove();
            }
            catch (e) {
                $('.crumbs #link3').text("");
            }

            for (var index = 0; index < sections[sectionIndex].subSections[subSectionIndex].subSections.length; index++) {
                totalSubSectionPassed = totalSubSectionPassed + sections[sectionIndex].subSections[subSectionIndex].subSections[index].passed;
                totalSubSectionFailed = totalSubSectionFailed + sections[sectionIndex].subSections[subSectionIndex].subSections[index].failed;
            }

            var totalCasesInSection = sections[sectionIndex].subSections[subSectionIndex].total - totalSubSectionPassed - totalSubSectionFailed;
            var totalPassedCasesInSection = sections[sectionIndex].subSections[subSectionIndex].passed - totalSubSectionPassed;
            var totalFailedCasesInSection = sections[sectionIndex].subSections[subSectionIndex].failed - totalSubSectionFailed;
            $('.totalCases').text(sections[sectionIndex].subSections[subSectionIndex].total);
            $('.passedCases').text(sections[sectionIndex].subSections[subSectionIndex].passed);
            $('.failedCases').text(sections[sectionIndex].subSections[subSectionIndex].failed);

            if (sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length > 0) {

                // var calculatedLimit = Math.round((sections[sectionIndex].subSections[subSectionIndex].passed) / sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length * 100);
                var calculatedLimit = Math.round((totalPassedCasesInSection / totalCasesInSection) * 100);
                if (calculatedLimit >= 75) {
                    styleClass = "reportGreen";
                }
                else if (calculatedLimit >= 50) {
                    styleClass = "reportYellow";
                }
                else {
                    styleClass = "reportRed";
                }

                dataTable.append('<tbody><tr><td class="tblSectionHeader"><a href="javascript:pageHelper.generateDetailedReportTable(' + sectionIndex + ',' + subSectionIndex + ');">' + "Section: " + sections[sectionIndex].subSections[subSectionIndex].id + " cases" + '</a></td><td class="' + styleClass + '">' + calculatedLimit + '%' + '</td></tr></tbody>');
            }

            if (sections[sectionIndex].subSections[subSectionIndex].subSections) {
                for (var objIndex = 0; objIndex < sections[sectionIndex].subSections[subSectionIndex].subSections.length; objIndex++) {
                    if (sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].total !== 0) {

                        var passedPercentage = sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].getPassPercentage();
                        if (passedPercentage >= pageHelper.YELLOW_LIMIT) {
                            styleClass = "reportGreen";
                        }
                        else if (passedPercentage >= pageHelper.RED_LIMIT) {
                            styleClass = "reportYellow";
                        }
                        else {
                            styleClass = "reportRed";
                        }
                        dataTable.append('<tbody><tr><td class="tblSectionHeader"><a href="javascript:pageHelper.generateDetailedReportTable(' + sectionIndex + ',' + subSectionIndex + ',' + objIndex + ');">' + sections[sectionIndex].subSections[subSectionIndex].subSections[objIndex].name + '</a></td><td class="' + styleClass + '">' + (Math.round(passedPercentage)) + '%' + '</td></tr></tbody>');

                    }
                }
            }
        }
        pageHelper.doBackButtonTasks();
    },

    generateDetailedReportTable: function (sectionIndex, subSectionIndex, subInnerSectionIndex) {
        var sections = window.sections;
        var dataTable = $('.results-data-table');

        $('.results-data-table').find("tr").remove();
        var mainSectionPassed = 0;
        var mainSectionfailed = 0;

        var subSectionPassed = 0;
        var subSectionfailed = 0;

        var resultStyle = "pass";
        var subSectionObj;
        // sub sections
        if (subSectionIndex !== -1) {
            // if there is only one level of subsections example: 7.1
            if (!sections[sectionIndex].subSections[subSectionIndex].subSections) {
                subSectionObj = sections[sectionIndex].subSections[subSectionIndex];

                $('.totalCases').text(subSectionObj.total);
                $('.passedCases').text(subSectionObj.passed);
                $('.failedCases').text(subSectionObj.failed);

            }
            // cases directly under sub-subsections example: 7.1.1
            else if (sections[sectionIndex].subSections[subSectionIndex].subSections.length > 0 && subInnerSectionIndex !== undefined) {

                subSectionObj = sections[sectionIndex].subSections[subSectionIndex].subSections[subInnerSectionIndex];
                $('.sectionId').text("section: " + subSectionObj.id);
                $('.totalCases').text(subSectionObj.total);
                $('.passedCases').text(subSectionObj.passed);
                $('.failedCases').text(subSectionObj.failed);
            }
            // cases directly under subsections example: 7.1 
            else if (sections[sectionIndex].subSections[subSectionIndex].testCaseArray.length > 0) {
                subSectionObj = sections[sectionIndex].subSections[subSectionIndex];
                $('.totalCases').text(subSectionObj.total);
                $('.passedCases').text(subSectionObj.passed);
                $('.failedCases').text(subSectionObj.failed);
            }

            var anc3 = $('<a id="link3">' + " Section: " + subSectionObj.id + " " + subSectionObj.name + '</a>');
            $('.crumbs').append(anc3);
            $('.crumbs #link3').removeClass().addClass("setBlack");
            $('.crumbs #link2').removeClass().addClass("setBlue");
            $('.crumbs #link1').removeClass().addClass("setBlue");


            for (var objIndex = 0; objIndex < subSectionObj.testCaseArray.length; objIndex++) {
                if (subSectionObj.testCaseArray[objIndex].res.toLowerCase() === 'pass') {
                    resultStyle = "pass";
                }
                else {
                    resultStyle = "fail";
                }
                var path = subSectionObj.testCaseArray[objIndex].path.indexOf('resources/') === -1 ? 'resources/scripts/' + subSectionObj.testCaseArray[objIndex].path : subSectionObj.testCaseArray[objIndex].path;
                dataTable.append('<tbody><tr><td>' + subSectionObj.testCaseArray[objIndex].id + '</td><td>' + subSectionObj.testCaseArray[objIndex].description + '</td><td class="' + resultStyle + '">' + subSectionObj.testCaseArray[objIndex].res + '</td><td><a href="javascript:ES5Harness.openSourceWindow(' + subSectionObj.testCaseArray[objIndex].registrationIndex + ');">[source]</a></td></tr></tbody>');
            }
        }
        // testcases directly under a chapter when there are no sections in a chapter
        else {
            anc3 = $('<a id="link3">' + " Chapter: " + sections[sectionIndex].id + ": " + sections[sectionIndex].name + '</a>');
            $('.crumbs').append(anc3);

            $('.crumbs #link3').removeClass().addClass("setBlack");
            $('.crumbs #link2').removeClass().addClass("setBlue");
            $('.crumbs #link1').removeClass().addClass("setBlue");

            $('.sectionId').text("section: " + sections[sectionIndex].id);

            for (var subSectionIndex = 0; subSectionIndex < sections[sectionIndex].subSections.length; subSectionIndex++) {
                mainSectionPassed = mainSectionPassed + sections[sectionIndex].subSections[subSectionIndex].passed;
                mainSectionfailed = mainSectionfailed + sections[sectionIndex].subSections[subSectionIndex].failed;
            }
            $('.totalCases').text(sections[sectionIndex].total - mainSectionPassed - mainSectionfailed);
            $('.passedCases').text(sections[sectionIndex].passed - mainSectionPassed);
            $('.failedCases').text(sections[sectionIndex].failed - mainSectionfailed);

            $('.detailedResult').text("Total tests: " + sections[sectionIndex].testCaseArray.length + " Passed: " + (sections[sectionIndex].passed - mainSectionPassed) + " Failed: " + (sections[sectionIndex].failed - mainSectionfailed));
            for (var arrayIndex = 0; arrayIndex < sections[sectionIndex].testCaseArray.length; arrayIndex++) {
                if (sections[sectionIndex].testCaseArray[arrayIndex].res.toLowerCase() === 'pass') {
                    resultStyle = "pass";
                }
                else {
                    resultStyle = "fail";
                }
                path = sections[sectionIndex].testCaseArray[arrayIndex].path.indexOf('resources/') === -1 ? 'resources/scripts/' + sections[sectionIndex].testCaseArray[arrayIndex].path : sections[sectionIndex].testCaseArray[arrayIndex].path;
                dataTable.append('<tbody><tr><td>' + sections[sectionIndex].testCaseArray[arrayIndex].id + '</td><td>' + sections[sectionIndex].testCaseArray[arrayIndex].description + '</td><td class="' + resultStyle + '">' + sections[sectionIndex].testCaseArray[arrayIndex].res + '</td><td><a href="javascript:ES5Harness.openSourceWindow(' + sections[sectionIndex].testCaseArray[arrayIndex].registrationIndex + ');">[source]</a></td></tr></tbody>');
            }
        }

        pageHelper.doBackButtonTasks();
    },

    //It shows the back link
    doBackButtonTasks: function () {
        $('#backlinkDiv').show();
        //The below logic is applied because .remove() is giving object error in the function "generateReportTable" that I could not find the reason.
        //That is why I am keeping the links (#link1, #link2 and #link3) blank if any error .
        var anchors = [];
        $('.crumbs a').each(function (index, anchor) {
            if ($(anchor).text() !== "") {
                anchors[anchors.length] = anchor;
            }
        });
        var contextAnchor = anchors[anchors.length - 2];
        $('#backlinkDiv').attr('href', contextAnchor.href);
    }
};

//Extend the array type
getArrayCloneOfObject = function (oldObject) 
{
    var tempClone = {};
    if (typeof (oldObject) === "object")
    {
        for (prop in oldObject) 
        {
            if ((typeof (oldObject[prop]) === "object") && (oldObject[prop]).__isArray) 
            {
                tempClone[prop] = getArrayCloneOfObject(oldObject[prop]);
            }
            else if (typeof (oldObject[prop]) === "object") 
            {
                tempClone[prop] = getArrayCloneOfObject(oldObject[prop]);
            }
            else 
            {
                tempClone[prop] = oldObject[prop];
            }
        }
    }
    return tempClone;
}

CloneArray = function (arrayObj) 
{
    var tempClone = [];
    for (var arrIndex = 0; arrIndex <= arrayObj.length; arrIndex++) 
    {
        if (typeof (arrayObj[arrIndex]) === "object") 
        {
            tempClone.push(getArrayCloneOfObject(arrayObj[arrIndex]));
        } else 
        {
            tempClone.push(arrayObj[arrIndex]);
        }
    }
    return tempClone;
}
