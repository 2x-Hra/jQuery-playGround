/*
$() is jQuerySelector 
document.querySelector("h1")         ===  $("h1")
document.querySelectorAll("button")  ===  $("button")

*/


/*
Edit css of an element  ( Warning : Editing css property from JS file is not a appropriate thing try to make css class and add it to the tag instead. )
JavaScript   ::   document.getElementById("h1").style.color = "red";
jQuery       ::   $("tag").css("propertName","value");  
 and to get the data just use it without Value :: $("tag").css("propertName");
*/
// $("h1").css("color","red"); 

//Add Class
$("h1").addClass("big-title");
//Add Multiple Class
$("h1").addClass("big-title marginAll-50");
//Remove Class
$("h1").removeClass("big-title");

/*
Edit .textContent and innerHtml
*/
$("button").html("<em> Hiii </em>");  // ===  .innerHtml()
$("button").text("Hello");           //  === .textContent() 

/*
Edit attribute
Set :: $("a").attr("href","https://www.google.com");
Get :: $("a").attr("href");
*/
$("a").attr("href","https://www.google.com");

/*
Event Listener
*/
$("h1").click( function() {
    $("h1").css("color","red");
});

