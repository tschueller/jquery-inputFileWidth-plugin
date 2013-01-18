/*!
 * jQuery inputFileWidth Plugin v1.0.2 
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
            containerClass = "jquery-inputFileWidthContainer";
            
            // Only FF need this hack
            if ($.browser.mozilla)
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