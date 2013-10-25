/*!
 * jQuery inputFileWidth Plugin v1.0.3 
 * Sets the width of an input file element.
 * Copyright (c) 2010-2013, Thorsten Schüller 
 * http://schueller.me/projects/
 * Licensed under the MIT license.
 */

(function( $ ){

    $.fn.inputFileWidth = function(width) 
    {
        if (!width) width = "100%"; 

        // Iterate only over input:file elements
        return this.filter("input:file").each(function() 
        {
            var $this = $(this),
            container,
            beforeResize,
            afterResize = 0,
            i, max, 
            containerClass = "jquery-inputFileWidthContainer",
			ua = navigator.userAgent.toLowerCase(), 
			uaMatch,
			browser = "",
			version = 0;
            
            // Only FF < version 22 need this hack. To check this I use this 
			// dirty and old-fashioned user-agent detection (RegEx is taken 
			// from the old and meanwhile deprecated jQuery.browser check)
			uaMatch = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf("compatible") < 0 && 
					/(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [];			
			browser = uaMatch[1] || "";	
			version = +uaMatch[2] || 0;
			
            if (browser == "mozilla" && version < 22)
            {
                // Remove first an already existing container
                if ($this.parent("."+containerClass).length) $this.unwrap();
                
                // Add a container, hide the input elenent and set the size to 1
                $this.css("visibility", "hidden").width("100%");
                $this.attr("size", 1);
                $this.wrap('<div class="' + containerClass +'" />');
                container = $this.parent().css("overflow", "hidden").width(width);

                // TODO Recalculate the width if the container size has changed
                //$(window).resize(function(dummy){console.debug("r",$this.width())});
                
                // Save the container size
                beforeResize = container.prop("scrollWidth");
              
                // Increase the size and check if the input field is greater than 
                // the container. In this case go one step back.  
                for (i=1, max=500; i<max; i++)
                {
                    $this.attr("size", i);
                    afterResize = container.prop("scrollWidth");
                    if (afterResize > beforeResize)
                    {
                        $this.attr("size", i>1 ? i-1 : 1);
                        break;
                    }
                }
                
                $this.css("visibility", "visible");
            }
            else
            {
                $this.width(width);
            }
        });        
      
    };
})( jQuery );    