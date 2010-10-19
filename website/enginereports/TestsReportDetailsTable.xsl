<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
  <xsl:output method="html" indent="yes"/>
  <xsl:variable name="RED_LIMIT" select="50"/>
  <xsl:variable name="YELLOW_LIMIT" select="75"/>
  <xsl:variable name="GREEN_LIMIT" select="99.9"/>
  <xsl:param name="sectionID" select="14"/>
  <xsl:template match="testReport">    
    <table id="section-{$sectionID}" width="100%" class="results-data-table" border="0" cellSpacing="0" cellPadding="0">
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
        <xsl:variable name="sec" select="//section[(@id = $sectionID)]"/>
        <tr>
        <xsl:if test="count($sec/test) &gt; 0">
            <td width="10%">
              <xsl:element name="a">
                <xsl:attribute name="href">
                  <xsl:value-of select="concat('javascript:createTestListTable(&quot;', $sec/@id ,'&quot;);')"/>
                </xsl:attribute>
                <xsl:value-of select="$sec/@id"/> - <xsl:value-of select="$sec/@name"/>
              </xsl:element>
            </td>
          <xsl:for-each select="$sec">

            <xsl:variable name="passRate" select="round((count(test/res[text() ='pass'])) div (count(test)) * 100)"/>
              <xsl:variable name="tdClass" select="'reportGreen'"/>
              <xsl:call-template name="passRateCell">
                <xsl:with-param name="passRate" select="$passRate"/>
                <xsl:with-param name="pass" select="count(test/res[text() ='pass'])"/>
                <xsl:with-param name="total" select="count(test)"/>
              </xsl:call-template>
          </xsl:for-each>
        </xsl:if>
        </tr>
        <xsl:for-each select="$sec//section[not(@id = preceding::section/@id)]">
          <xsl:if test="count(test) &gt; 0">
            <tr>
              <td width="10%">
                <xsl:element name="a">
                  <xsl:attribute name="href">
                    <xsl:value-of select="concat('javascript:createTestListTable(&quot;',@id,'&quot;);')"/>
                  </xsl:attribute>
                  <xsl:value-of select="@id"/> - <xsl:value-of select="@name"/>
                </xsl:element>
              </td>

              <xsl:variable name="id" select="@id"/>
              <xsl:for-each select="//section[@id = $id]">
                <xsl:variable name="passRate" select="round((count(test/res[text() ='pass'])) div (count(test)) * 100)"/>
                <xsl:variable name="tdClass" select="'reportGreen'"/>
                <xsl:call-template name="passRateCell">
                  <xsl:with-param name="passRate" select="$passRate"/>
                  <xsl:with-param name="pass" select="count(test/res[text() ='pass'])"/>
                  <xsl:with-param name="total" select="count(test)"/>
                </xsl:call-template>
              </xsl:for-each>
            </tr>
          </xsl:if>
        </xsl:for-each>

 
      </tbody>
    </table>
  </xsl:template>
  <xsl:template name="passRateCell">
    <xsl:param name="passRate"/>
    <xsl:param name="pass"/>
    <xsl:param name="total"/>
      
    <xsl:choose>
      <xsl:when test="string($passRate) = 'NaN'">
        <td></td>
      </xsl:when>
      <xsl:when test="$passRate &gt; $GREEN_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'reportGreen'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % -
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:when test="$passRate &gt;= $YELLOW_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'reportLightGreen'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % -
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:when test="$passRate &gt; $RED_LIMIT">
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'reportYellow'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % -
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:when>
      <xsl:otherwise>
        <xsl:element name="td">
          <xsl:attribute name="class">
            <xsl:value-of select="'reportRed'"/>
          </xsl:attribute>
          <xsl:value-of select="$passRate"/> % -
          <xsl:value-of select="$pass"/>/<xsl:value-of select="$total"/>
        </xsl:element>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
