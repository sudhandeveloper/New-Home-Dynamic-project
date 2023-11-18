document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time (3 seconds)
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 3000);
  });
  