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


/*
// Java Script Add multi element Event listenet

for(var i = 0 ; i< 5 ; i ++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "purple"        
    });
}
*/
// NOW IN JQUERY
$("button").click(function() {
    $("h1").css("color","purple");    
});

// KeyDown EventListener
/*
$(document).keydown(function(event){
    $("h1").text(event.key)
})
*/


// ON eventListener  == betterway    You can add Any Events   ( Check the MDN DOC https://developer.mozilla.org/en-US/docs/Web/Events )
$("h1").on("mouseover", function(){
    $("h1").css("color","red");
});

// After Before Append Prepend  Methods

$("h1").after("<button>new After button</button>");     // it will add after the h1
$("h1").before("<button>new Before button</button>");   // it will add before the h1
$("h1").append("<button>new Append button</button>");   // it will add inside the h1 tag but after the Content
$("h1").prepend("<button>new Prepend button</button>"); // it will add inside the h1 tag but before the Content

//Remove
/*
$("button").remove()     // will remove all the Button tags

*/

/*
    jQuery Animation

    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();
    $("h1").slideDown();
    $("h1").slideUp();
    $("h1").slideToggle();
*/
$("button").on("click", function() {
    // $("h1").fadeToggle();
    $("h1").animate({margin:"20%"})     // add only css with Numeric Value
    $("h1").slideUp().slideDown().animate({opacity:0.5});   // You can Queue methods like this , this will do them in order
})

