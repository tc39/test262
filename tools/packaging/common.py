#--Imports---------------------------------------------------------------------
import re

#--Stubs-----------------------------------------------------------------------



#--Globals---------------------------------------------------------------------
captureCommentPattern = re.compile(r"\/\*\*?((?:\s|\S)*?)\*\/\s*\n")
atattrs = re.compile(r"\s*\n\s*\*\s*@")
stars = re.compile(r"\s*\n\s*\*\s?")

#--Helpers--------------------------------------------------------------------#
def stripStars(text):
    return stars.sub('\n', text).strip()

def convertDocString(docString):
    envelope = {}
    temp = captureCommentPattern.findall(docString)[0]
    propTexts = atattrs.split(temp)
    envelope['commentary'] = stripStars(propTexts[0])
    del propTexts[0]

    for propText in propTexts:
        # TODO: error check for mismatch
        propName = re.match(r"^\w+", propText).group(0)
        propVal = propText[len(propName):]

        # Just till last one-time conversion
        # strip optional initial colon or final semicolon.
        # The initial colon is only stripped if it comes immediately
        # after the identifier with no intervening whitespace.
        propVal = re.sub(r"^:\s*", '', propVal, 1)
        propVal = re.sub(r";\s*$", '', propVal, 1)
        propVal = stripStars(propVal)
        
        if propName in envelope:
            raise Exception('duplicate: ' + propName)
        envelope[propName] = propVal;
    return envelope

#--MAIN------------------------------------------------------------------------
