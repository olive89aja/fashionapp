var outfit = {
  dresses: "dress",
  tops: "shirt",
  pants: "skirt",
  shoes: "heels"
};
var dressesURL = "";
var topsURL = "";
var pantsURL = "";
var shoesURL = "";

$("#saveOutfit").on("click", function() {


var slideIndex = [1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];

showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {

  var id = "#" + slideId[no] + "_" + n;


  if ($(id).attr("data-type") === "dresses") {
    dressesURL = $(id).attr("src");
  }
  if ($(id).attr("data-type") === "top") {
    topsURL = $(id).attr("src");
  }
  if ($(id).attr("data-type") === "bottom") {
    pantsURL = $(id).attr("src");
  }
  if ($(id).attr("data-type") === "shoe") {
    shoesURL = $(id).attr("src");
  }

  outfit = {
    dresses: dressesURL,
    tops: topsURL,
    pants: pantsURL,
    shoes: shoesURL
  };
 
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
