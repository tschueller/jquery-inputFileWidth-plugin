/*
 * jQuery inputFileWidth Plugin v1.0.3 
 * Sets the width of an input file element.
 * Copyright (c) 2010-2013, Thorsten Schüller 
 * http://schueller.me/projects/
 * Licensed under the MIT license.
 */
(function(a){a.fn.inputFileWidth=function(b){if(!b){b="100%"
}return this.filter("input:file").each(function(){var k=a(this),e,c,m=0,g,l,n="jquery-inputFileWidthContainer",d=navigator.userAgent.toLowerCase(),f,h="",j=0;
f=/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[];
h=f[1]||"";j=+f[2]||0;if(h=="mozilla"&&j<22){if(k.parent("."+n).length){k.unwrap()
}k.css("visibility","hidden").width("100%");k.attr("size",1);k.wrap('<div class="'+n+'" />');
e=k.parent().css("overflow","hidden").width(b);c=e.prop("scrollWidth");for(g=1,l=500;
g<l;g++){k.attr("size",g);m=e.prop("scrollWidth");if(m>c){k.attr("size",g>1?g-1:1);
break}}k.css("visibility","visible")}else{k.width(b)}})}})(jQuery);