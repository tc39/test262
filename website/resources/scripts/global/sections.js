

var SECTION_TOC_OFFSET = 7;

//represents the class template for sections
function Section(id, name, subSections) {
    this.id = id;
    this.name = name;
    this.passed = 0;
    this.failed = 0;
    this.total = 0;
    this.subSections = subSections;
    this.testCaseArray = [];
    this.getPassPercentage = function () {
        if (this.total > 0) {
            return (this.passed / this.total) * 100;
        }
        else {
            return 0;
        }
    };
}

function resetResults() {

    for (var secInd = 0; secInd < sections.length; secInd++) {
        for (var subSecInd = 0; subSecInd < sections[secInd].subSections.length; subSecInd++) {
            sections[secInd].subSections[subSecInd].total = 0;
            sections[secInd].subSections[subSecInd].passed = 0;
            sections[secInd].subSections[subSecInd].failed = 0;
        }
    }

}

//array to hold the sections data
var sections = [];

// Add a node from TOC xml as a section into sections array
function addSection(node, nodeSections) {
    // Populate subsections
    var tocSubSections = [];
    var nodes = node.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName === "sec") {
            addSection(nodes[i], tocSubSections);
        }
    }

    // Add into section
    if (tocSubSections.length > 0) {
        nodeSections[nodeSections.length] = new Section(node.getAttribute('id').toString(), node.getAttribute('name'), tocSubSections);
    } else {
        nodeSections[nodeSections.length] = new Section(node.getAttribute('id').toString(), node.getAttribute('name'));
    }
}

// Load all sections from TOC xml
function loadSections() {
    // Constant for TOC file path
    var TOCFILEPATH = "resources/scripts/global/ecma-262-toc.xml";

    // Load TOC from xml
    var sectionsLoader = new XMLHttpRequest();
    sectionsLoader.open("GET", TOCFILEPATH, false);
    sectionsLoader.send();
    var xmlDoc = sectionsLoader.responseXML;
    var nodes = xmlDoc.documentElement.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName === "sec") {
            addSection(nodes[i], sections);
        }
    }
}

function existsSection(section) {
    var retValue = false;

    holdArray = section.split(".");
    //subtract SECTION_TOC_OFFSET, since sections start from SECTION_TOC_OFFSET and section array from 0
    chapterId = holdArray[0] - SECTION_TOC_OFFSET;
    if (holdArray.length > 0) {
        retValue = sections[chapterId] !== undefined ? true : false;
    }
    if (retValue && (holdArray.length > 1)) {
        retValue = ((sections[chapterId].subSections !== undefined) && (sections[chapterId].subSections[holdArray[1] - 1] !== undefined)) ? true : false;
    }
    if (retValue && (holdArray.length > 2)) {
        retValue = ((sections[chapterId].subSections !== undefined) && (sections[chapterId].subSections[holdArray[1] - 1].subSections !== undefined) && (sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1] !== undefined)) ? true : false;
    }

    return retValue;
}

function addCountToSection(section, type) {
    holdArray = section.split(".");
    //subtract SECTION_TOC_OFFSET, since sections start from SECTION_TOC_OFFSET and section array from 0
    chapterId = holdArray[0] - SECTION_TOC_OFFSET;
    switch (type) {
        case 'total':
            sections[chapterId].total++;
            if (holdArray.length === 2 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].total++;
            }
            if (holdArray.length === 3 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].total++;
                sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].total++;
            }
            break;
        case 'passed':
            sections[chapterId].passed++;
            if (holdArray.length === 2 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].passed++;
            }
            if (holdArray.length === 3 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].passed++;
                sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].passed++;
            }
            break;
        case 'failed':
            sections[chapterId].failed++;
            if (holdArray.length === 2 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].failed++;
            }
            if (holdArray.length === 3 & existsSection(section)) {
                sections[chapterId].subSections[holdArray[1] - 1].failed++;
                sections[chapterId].subSections[holdArray[1] - 1].subSections[holdArray[2] - 1].failed++;
            }
            break;
    }
}