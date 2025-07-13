// contact.js
document.addEventListener("DOMContentLoaded", () => {
  // Load header from /doc/
  fetch('../doc/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });

  // Load footer from /doc/
  fetch('../doc/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});

