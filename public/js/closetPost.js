var submitBtn = $("#submit");
var deleteBtn = $("#delete");
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

var closetAPI = {
  saveOutfit: function(outfits) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/closet",
      data: JSON.stringify(outfits)
    });
  },
  getOutfits: function() {
    return $.ajax({
      url: "api/closet",
      type: "GET"
    });
  },
  getOneOutfit: function(id) {
    return $.ajax({
      url: "api/closet" + id,
      type: "GET"
    });
  },
  deleteOutfit: function(id) {
    return $.ajax({
      url: "api/closet/" + id,
      type: "DELETE"
    });
  }
};

$("#saveOutfit").on("click", function() {
  // alert("it worked");

  console.log(outfit);
  closetAPI.saveOutfit(outfit);
});

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
  console.log("index#", n);
  console.log("slide#", slideId[no]);
  var id = "#" + slideId[no] + "_" + n;
  console.log($(id).attr("src"));

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
  // console.log(outfit);
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

// refreshOutfits gets new outfits from the db and repopulates the list

// refreshOutfits = function() {
//   closetAPI.getOutfits().then(function(data) {
//     //whatever handlebars are set for closet
//     //   var $examples = data.map(function(example) {
//     //     var $a = $("<a>")
//     //       .text(comment.text)
//     //       .attr("href", "/comment/" + comment.id);
//     //     var $li = $("<li>")
//     //       .attr({
//     //         class: "list-group-item",
//     //         "data-id": example.id
//     //       })
//     //       .append($a);
//     //     var $button = $("<button>")
//     //       .addClass("btn btn-danger float-right delete")
//     //       .text("ｘ");
//     //     $li.append($button);
//     //     return $li;
//     //   });
//     //   $exampleList.empty();
//     //   $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new outfit
// Save the new outfit to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var outfitsave = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(outfitsave.text && outfitsave.description)) {
    alert("You must save your outfit!");
    return;
  }

  closetAPI.saveOutfit(outfitsave).then(function() {
    refreshOutfits();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an outfit's delete button is clicked
// Remove the outfit from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  closetAPI.deleteOutfit(idToDelete).then(function() {
    refreshOutfits();
  });
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $deleteBtn.on("click", ".delete", handleDeleteBtnClick);
