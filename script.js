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
            let textData = "<div class='movie-title'>" + movie.title + "</div>" +
            "<span>"+
            "Publisher:" + movie.publisher + "<br>" +
            "Release Date: "+ movie.releaseDate + "<br>" +
            "Needs Research:"+
            "</span>";

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
      "<div class='game-title'>" + game.title + "</div>" +
      "<div>Publisher: " + game.publisher + "</div>" +
      "<div>Release Date: " + game.releaseDate + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}

