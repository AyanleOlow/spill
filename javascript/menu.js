document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("main-audio");

    // Load saved volume from localStorage
    let savedVolume = localStorage.getItem("audioVolume") || 0.5;

    // Set the volume of the audio
    audioElement.volume = savedVolume;
});
