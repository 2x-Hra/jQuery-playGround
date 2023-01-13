/*
$() is jQuerySelector 
document.querySelector("h1")         ===  $("h1")
document.querySelectorAll("button")  ===  $("button")

*/


/*
Edit css of an element  ( Warning : Editing css property from JS file is not a appropriate thing try to make css class and add it to the tag instead. )
JavaScript   ::   document.getElementById("h1").style.color = "red";
jQuery       ::   $("tag").css("propertName","value");
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
