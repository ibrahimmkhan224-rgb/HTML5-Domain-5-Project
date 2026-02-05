console.log("form script started");

// Safe load for form page (SKIP THIS STEP IF YOU PUT ALL JS CODE IN SAME FILE)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

//if all in the same file, copy all of the code below underneath the script code from snippet A
var form = document.querySelector("form");
var titleInput = document.querySelector("#title-input");
var pubInput = document.querySelector("#publisher-input");
var dateInput = document.querySelector("#release-date-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    releaseDate: dateInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});
