
var TEST_RESULT_PATH = "enginereports/testresults/";
var TEST_REPORT_PATH = "enginereports/testreport.xml";
var TESTS_REPORT_TABLE_XSL = "enginereports/testsreporttable.xsl";
var TEST_REPORT_DETAILS_TABLE_XSL = "enginereports/testsreportdetailstable.xsl";
var TEST_REPORT_INDIV_TESTS_TABLE_XSL="enginereports/testsreportindividualtestdetailstable.xsl";
var bigFile = null;
var xslReportSummary = loadXMLDoc(TESTS_REPORT_TABLE_XSL);
var fileList = [];
var xslReportDetails = loadXMLDoc(TEST_REPORT_DETAILS_TABLE_XSL);
var xslTestList = loadXMLDoc(TEST_REPORT_INDIV_TESTS_TABLE_XSL);

// Populate fileList array by reading all xml files in "enginereports/testresults" directory on server
function loadTestResultList() {
    if (fileList.length === 0) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", TEST_RESULT_PATH, false);
        httpRequest.send();

        // Insert temp elemnt into document with result from directory listing result
        var tempDiv = document.createElement('tempDiv');
        tempDiv.innerHTML = httpRequest.responseText;

        // Get all hyperlinks from directory listing result
        var linkElements = tempDiv.getElementsByTagName("a");
        for (var i = 0; i < linkElements.length; i++) {
            if (linkElements[i].pathname.match(".xml$")) {
                fileList.push(linkElements[i].pathname);
            }
        }
    }
}

function createTestReportFile(fileList) {
    var testReport = loadXMLDoc(TEST_REPORT_PATH);
    for (var i = 0; i < fileList.length; i++) {
        xml = loadXMLDoc(fileList[i]);
        if (window.ActiveXObject) {
            testReport.documentElement.appendChild(xml.documentElement);
        } else {
            var newNode = testReport.importNode(xml.documentElement, true);
            testReport.firstChild.appendChild(newNode);
        }
    }
    return testReport;
}

function loadXMLDoc(dname, type) {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", dname, false);
    xhttp.send("");
    if (type === "text") {
        return xhttp.responseText;
    } else {
        return xhttp.responseXML;
    }
}

function hideAll() {
    var reportElement = document.getElementById("report");
    for (var i = 0; i < reportElement.childNodes.length; i++) {
        if (reportElement.childNodes[i].id !== undefined) {
            $('#' + reportElement.childNodes[i].id).hide();
        }
    }
}

function createTestListTable(section) {
    $("body").addClass("busy");
    setTimeout(function() {
        $('#backBrowserReportDiv').show();
        $('#backBrowserReportDiv').attr('href', 'javascript:createDetailsTable(' + section.split(".")[0] + ');');
        $('#SummaryTable').hide();
        hideAll();
        var normSection = section.replace(/\./g, "_");
        if ($('#TestList_' + normSection).length > 0) {
            $('#TestList_' + normSection).show();
        } else {            
            if (window.ActiveXObject) {
                var xslParam = xslTestList.selectSingleNode("//xsl:param[@name='sectionID']");
                xslParam.setAttribute("select", "'" + section + "'");

                var ex = bigFile.transformNode(xslTestList);
                document.getElementById("report").innerHTML += ex;
            } else {
                xslTestList.getElementsByName("sectionID")[0].attributes["select"].value = "'" + section + "'";
                xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xslTestList);
                resultDocument = xsltProcessor.transformToFragment(bigFile, bigFile);
                document.getElementById("report").appendChild(resultDocument);
            }
        }
        $("body").removeClass("busy");
    }, 500);
}

function createDetailsTable(section) {
    $("body").addClass("busy");    
    setTimeout(function() {        
        $('#backBrowserReportDiv').show();
        $('#backBrowserReportDiv').attr('href', 'javascript:buildTable();');
        hideAll();
        if ($('#section-' + section).length > 0) {
            $('#section-' + section).show();
        } else {            
            if (window.ActiveXObject) {
                var xslParam = xslReportDetails.selectSingleNode("//xsl:param[@name='sectionID']");
                xslParam.setAttribute("select", "'" + section + "'");
                var ex = bigFile.transformNode(xslReportDetails);
                document.getElementById("report").innerHTML += ex;
            } else {
                xslReportDetails.getElementsByName("sectionID")[0].attributes["select"].value = "'" + section + "'";
                xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xslReportDetails);
                resultDocument = xsltProcessor.transformToFragment(bigFile, bigFile);
                document.getElementById("report").appendChild(resultDocument);
            }
        }
        $("body").removeClass("busy");
    }, 500);
    
}

function buildTable() {
    // Populate fileList array    
    loadTestResultList();
    $('#backBrowserReportDiv').hide();
    hideAll();
    if ($('#SummaryTable').length > 0)
        $('#SummaryTable').show();
    if (bigFile === null) {
        var reportElement = document.getElementById("report");
        bigFile = createTestReportFile(fileList);
        if (window.ActiveXObject) {
            testReportSummaryTable = bigFile.transformNode(xslReportSummary);
            reportElement.innerHTML += testReportSummaryTable;
        } else {
            xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xslReportSummary);
            testReportSummaryTable = xsltProcessor.transformToFragment(bigFile, bigFile);
            reportElement.appendChild(testReportSummaryTable);
        }
    } else {
        $('#SummaryTable').show();
    }
    $('body').removeClass('busy');
}
