var searchData = document.querySelector("#site-search");
var imageData = document.querySelectorAll(".big-image");

searchData.addEventListener("keyup", function(){
  var typed = searchData.value.toLowerCase();
  for (var i = 0; i < imageData.length; i++){
    var imageCaption = imageData[i].getAttribute("data-title").toLowerCase();
    if ( imageCaption.includes( typed ) ){
      imageData[i].style.display = " ";
    } else {
      imageData[i].style.display = "none";
    }
  }
});
