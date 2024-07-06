/// <reference types="../@types/jquery" />






//scroll smooth





$('a[href^="#"]').on("click",function(e){

let aHref = e.target.getAttribute("href")


  let sectionOffset = $(aHref).offset().top;
  

$("body , html").animate({scrollTop:sectionOffset},3000)


})











$("#home span").on("click",function () {


  if ($("#leftMenu").width() === 0) {
    $("#leftMenu").animate({ width: "250px" }, 200);
     $("#home-content").animate({ marginLeft: "250px" }, 200);
    $(this).text("☰ close");
  } else {
    $("#leftMenu").animate({ width: "0" }, 200);
     $("#home-content").animate({ marginLeft: "0" }, 200);
    $(this).text("☰ open");
  }
});

$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
  $("#home span").text("☰ open");
});











/// slider
$('#sliderDown .toggle').on("click",function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})



















//countDown
var countDownDate = new Date("oct 25, 2024 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 

$("#days").text(days+"D")
$("#hours").text(hours+"h")
$("#min").text(minutes+"m")
$("#sec").text(seconds+"s")


if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)



// textArea Code

$("#textArea").on("input", function() {
  let maxLength = 100;
  let currentLength = $(this).val().length;
  let remainingLength = maxLength - currentLength;

  if (remainingLength >= 0) {
      $("#areaCounter").text(remainingLength);
  } else {
      $("#areaCounter").text("your available character finished");
      $(this).val($(this).val().substring(0, maxLength));
   
  }

});

