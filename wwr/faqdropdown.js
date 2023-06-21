document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  });
  
  function toggleDropdown(questionNumber) {
    var dropdown = document.getElementById("dropdown" + questionNumber);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }