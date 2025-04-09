document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("main-audio");

    // Load saved volume from localStorage
    let savedVolume = localStorage.getItem("audioVolume") || 0.5;

    // Set the volume of the audio
    audioElement.volume = savedVolume;
});

document.getElementById('helper-image').addEventListener('click', function () {
    const customImageContainer = document.getElementById('custom-image-container');
    
    // Toggle the visibility of the custom image
    if (customImageContainer.style.display === 'none') {
        customImageContainer.style.display = 'block';
    } else {
        customImageContainer.style.display = 'none';
    }
});