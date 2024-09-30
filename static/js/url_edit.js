document.addEventListener("DOMContentLoaded", function() {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith("index.html" || "index.php")) {
        let newUrl = currentUrl.replace(/index\.html$/, '') || currentUrl.replace(/index\.php$/, '');
        history.replaceState(null, '', newUrl);
    }
});

const textStatusElement = document.getElementById("textstatus");
if (textStatusElement) {
    setTimeout(() => {
        textStatusElement.textContent = "Failed to Open: Not Allowed!";
    }, 5000);
}