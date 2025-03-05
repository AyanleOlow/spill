document.addEventListener("DOMContentLoaded", function() {
    let volumeSlider = document.querySelector(".level");

    // Load saved volume from localStorage
    let savedVolume = localStorage.getItem("audioVolume") || 0.5;
    volumeSlider.value = savedVolume;

    // Save volume change to localStorage
    volumeSlider.addEventListener("input", function() {
        localStorage.setItem("audioVolume", volumeSlider.value);
    });
});