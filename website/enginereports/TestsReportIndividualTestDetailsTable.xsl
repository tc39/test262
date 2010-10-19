<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
  <xsl:output method="html" indent="yes"/>
  <xsl:variable name="RED_LIMIT" select="50"/>
  <xsl:variable name="YELLOW_LIMIT" select="75"/>
  <xsl:variable name="GREEN_LIMIT" select="99.9"/>
  <xsl:param name="sectionID" select="'7'" />

  <xsl:template match="testReport">
    <xsl:variable name="testReport" select="."/>
    <xsl:variable name="tableID" select="concat('TestList_',translate($sectionID,'.','_'))"/>
    <table id="{$tableID}" width="100%" class="results-data-table" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
        <!-- Header -->
        <tr class="reportTblHeader">
          <td width="20%" style="text-align:right;">
            Browser:
            <br/>
            Tests executed:
            <br/>
            Test Suite Ver.:
            <br/>
            Test Suite Date:
          </td>
          <xsl:for-each select="testRun">
            <td>
              <xsl:value-of select="browserName"/>
              <br/>
              <xsl:value-of select="Date"/>
              <br/>
              <xsl:value-of select="targetTestSuiteVersion"/>
              <br/>
              <xsl:value-of select="targetTestSuiteDate"/>
            </td>
          </xsl:for-each>
        </tr>
        <!-- end Header -->

        <!-- Find all unique testids that belongs to $sectionID -->          
        <xsl:for-each select="//section[@id = $sectionID]/test[not(./testId = preceding::test/testId)]/testId">
          <xsl:variable name="testId" select="."/>
          <tr>
            <td>
              <xsl:value-of select="$testId"/>
            </td>

            <!-- Show test result for each browser -->
            <xsl:for-each select="$testReport/testRun">
              <xsl:variable name="test" select="./Tests//section[@id = $sectionID]/test[testId = $testId]"/>
              <xsl:call-template name="resCell">
                  <xsl:with-param name="test" select="$test"/>
              </xsl:call-template>
            </xsl:for-each>    
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>
  
  <xsl:template name="resCell">
    <xsl:param name="test"/>
    <xsl:element name="td">
      <xsl:if test="$test/res">
        <xsl:choose>
          <xsl:when test="$test/res = 'pass'">        
              <xsl:attribute name="class">
                <xsl:value-of select="'reportGreen'"/>
              </xsl:attribute>        
          </xsl:when>      
          <xsl:otherwise>
            <xsl:attribute name="class">
              <xsl:value-of select="'reportRed'"/>
            </xsl:attribute>
          </xsl:otherwise>      
        </xsl:choose>
        <xsl:value-of select="$test/res"/>
      </xsl:if>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
