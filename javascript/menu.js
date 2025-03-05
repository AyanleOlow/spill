
        document.addEventListener("DOMContentLoaded", function() {
            let audio = document.getElementById("main-audio");
    
            // Load saved volume from localStorage
            let savedVolume = localStorage.getItem("audioVolume") || 0.5;
            audio.volume = savedVolume;
        });
    