jQuery inputFileWidth plugin
============================

Description
-----------
The jQuery.inputFileWidth plugin sets the width of an input file element
(<input type="file"/>). Normally this can done with CSS, but the Firefox 
browser don't support this. This plugin used a workaround to set the width 
also in Firefox. It used the size attribute from the input element to change 
the width. The calculated size is unfortunately only a approximation to the 
real size, so there can be a deviation of some pixels to the desired size.

Usage
-----

Set all file input elements to a 100% width:

	$("input:file").inputFileWidth("100%");