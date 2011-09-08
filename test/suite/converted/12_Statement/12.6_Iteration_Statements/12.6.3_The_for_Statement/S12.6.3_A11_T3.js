// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If (Evaluate Statement).type is "continue" and (Evaluate Statement).target is in the current label set, iteration of labeled loop breaks
 *
 * @section: 12.6.3;
 * @path: 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A11_T3.js;
 * @description: Trying to continue non-existent label;
 * @negative;
 */

__str="";

//////////////////////////////////////////////////////////////////////////////
//CHECK#
outer:for(index=0;index<4;index+=1){
    nested:for(index_n=0;index_n<=index;index_n++){
        if(index*index_n == 6)continue nonexist;
        __str+=""+index+index_n;
    }
}
//
//////////////////////////////////////////////////////////////////////////////




