/**
 * Copyright (c) 2016, 2024, 5 Mode
 * 
 * This file is part of BoxToBox.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software 
 * without restriction, including without limitation the rights to use, copy, modify, merge, publish, 
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. *
 * 
 * home.js
 * 
 * JS for the Home page.
 *
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2016, 2024, 5 Mode     
 * @license https://opensource.org/licenses/BSD-3-Clause 
 */
 
 function BOXTOBOXstartApp() {

 }			

 /*
  * call to startApp
  * 
  * @returns void
  */
 function _BOXTOBOXstartApp() {
   
   setTimeout("BOXTOBOXstartApp()", 1000);    
 }
 
function BOXTOBOXreload() {
  //window.location.reload(); 
  document.getElementById("frmUpload").submit();
}

function BOXTOBOXsetContentPos() {                    
  h=parseInt(window.innerHeight);
  w=parseInt(window.innerWidth);

  if (w>700) {
    myheight = parseInt(window.innerHeight - ($("#header").height()));
    $("#sidebar").css("height", myheight+"px");
    $("#coding").css("height", myheight+"px");

    $("#resizeBanner").hide();
    $("#content").show(); 
  } else {
    myheight = parseInt(window.innerHeight);
    $("#resizeBanner").css("height", myheight+"px");
  
    $("#content").hide();
    $("#resizeBanner").show();
  }  
} 

function BOXTOBOXsetFooterPos() {
  if (document.getElementById("footerCont")) {
    tollerance = 16;
    $("#footerCont").css("top", parseInt( window.innerHeight - $("#footerCont").height() - tollerance ) + "px");
    $("#footer").css("top", parseInt( window.innerHeight - $("#footer").height() - tollerance - 8) + "px");
  }
}

window.addEventListener("load", function() {

  setTimeout("BOXTOBOXsetContentPos()", 500);
  setTimeout("BOXTOBOXsetFooterPos()", 1000);

  setTimeout("_BOXTOBOXstartApp()", 10000);

}, true);

window.addEventListener("resize", function() {

  setTimeout("BOXTOBOXsetContentPos()", 500);
  setTimeout("BOXTOBOXsetFooterPos()", 1000);

}, true);
  
