console.log("js console");
let data;
let grid = document.querySelector(".movie-container");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(xhttp.responseText);
        console.log(data);
        data.forEach(function(movie){
            let card = document.createElement("div");
            card.classList.add("card");
            let textData = "<div class='movie-title'>" + movie.title + "</div>" ;

            card.innerHTML = textData;

            if(movie.imgSrc) {
                card.style.backgroundImage = "url('" + movie.imgSrc + "')"
            }

            grid.appendChild(card);
        });

        }
    };

    xhttp.open("GET", "showbox.json", true);
    xhttp.send();

    // RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + game.title + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}

// identify sorting buttons (make sure the #IDs below match your buttons in html)
var sortAZBtn = document.querySelector("#sort-az");
var sortZABtn = document.querySelector("#sort-za");


// sort click handlers for buttons, add two buttons to your html and give them the same IDs as below
sortAZBtn.addEventListener("click", function () {
  sortByTitle("az");
});
  sortZABtn.addEventListener("click", function () {
  sortByTitle("za");
});



// sort function
function sortByTitle(direction) {
  // data should be the variable that stores the list of data, make sure the name matches what you have
  data.sort(function (a, b) {
    var titleA = String(a.title).toLowerCase();
    var titleB = String(b.title).toLowerCase();


    if (titleA < titleB) {
      if (direction == "az") {
        return -1;
      } else {
        return 1;
      }
    }


    if (titleA > titleB) {
 if (direction == "az") {
        return 1;
      } else {
        return -1;
      }
    }


    return 0;
  });


  makeCards();
}
