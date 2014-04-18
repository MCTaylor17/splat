$(document).ready(function(){
fitToWindow();
});
$(window).resize(function(){
    fitToWindow();
});
    
    
function fitToWindow(){
    $("main").css(
        "min-height",(
            $(window).height() - (
                $("header").outerHeight() + $("footer").outerHeight() 
            ) 
        ) 
    );
}
