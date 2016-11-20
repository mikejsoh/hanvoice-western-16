/*$(window).load(function() {
	//$("#loading").delay(2500).fadeOut(500);
	$("#loading-center").click(function() {
	$("#loading").fadeOut(500);
	})
})
*/

$(window).load(function() {
	 $( "#loading" ).delay(1800).fadeOut(500, function(){
        $( "#show" ).fadeIn(1500);
    });  
})