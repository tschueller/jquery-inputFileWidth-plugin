/*
 * jQuery inputFileWidth Plugin v1.0.2 
 * Sets the width of an input file element.
 * Copyright (c) 2010-2012, Thorsten Schüller 
 * http://schueller.me/projects/
 * Licensed under the MIT license.
 */
(function(a){a.fn.inputFileWidth=function(b){if(!b){b="100%"
}return this.filter("input:file").each(function(){var h=a(this),d,e,g=0,f,c,j="jquery-inputFileWidthContainer";
if(a.browser.mozilla){if(h.parent("."+j).length){h.unwrap()}h.css("visibility","hidden").width("100%");
h.attr("size",1);h.wrap('<div class="'+j+'" />');d=h.parent().css("overflow","hidden").width(b);
e=d.prop("scrollWidth");for(f=1,c=500;f<c;f++){h.attr("size",f);g=d.prop("scrollWidth");
if(g>e){h.attr("size",f>1?f-1:1);break}}h.css("visibility","visible")}else{h.width(b)
}})}})(jQuery);