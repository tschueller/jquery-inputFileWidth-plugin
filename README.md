jQuery inputFileWidth plugin
============================

Description
-----------
The jQuery.inputFileWidth plugin sets the width of an input file element
(<code>&lt;input type="file" /&gt;</code>). Normally this can done with CSS, but the Firefox 
browser don't support this. This plugin used a workaround to set the width 
also in Firefox. It used the size attribute from the input element to change 
the width. The calculated size is unfortunately only a approximation to the 
real size, so there can be a deviation of some pixels to the desired size.

**Update:** FireFox v22 has changed the look of the file-input element. There is now only one button + label and no more input element.
See bug report: [#838675](https://bugzilla.mozilla.org/show_bug.cgi?id=838675). The plugin will therefore only required for Firefox older versions. 

Demo: [http://schueller.me/projects/jquery-plugins/](http://schueller.me/projects/jquery-plugins/#inputFileWidth)

Usage
-----

Set the width of all file input elements to 100%:

	$("input:file").inputFileWidth("100%");
	
Set all single input elements to a width of 80px:

	$("#inputElm").inputFileWidth("80px");	
	