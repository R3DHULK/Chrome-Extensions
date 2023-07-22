document.addEventListener("DOMContentLoaded", function () {
    var urlInput = document.getElementById("urlInput");
    var shortenButton = document.getElementById("shortenButton");
    var shortenedUrl = document.getElementById("shortenedUrl");
  
    shortenButton.addEventListener("click", function () {
      var url = urlInput.value;
      if (url) {
        shortenUrl(url);
      }
    });
  
    function shortenUrl(url) {
      var apiUrl = "https://api.shrtco.de/v2/shorten?url=" + encodeURIComponent(url);
      fetch(apiUrl)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Error occurred while shortening URL. Please try again.");
          }
          return response.json();
        })
        .then(function (data) {
          if (data.ok) {
            var shortUrl = data.result.short_link;
            shortenedUrl.textContent = shortUrl;
          } else {
            throw new Error("Error occurred while shortening URL. Please try again.");
          }
        })
        .catch(function (error) {
          shortenedUrl.textContent = error.message;
        });
    }
  });
  