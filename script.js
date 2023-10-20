document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songTitle = document.getElementById('song-title');
    const imageContainer = document.getElementById('image-container');

    const songs = [
        {
            title: 'KGF',
            file: 'kgf.mp3.mp3',
            images: ['kgf.jpg']
        },
        {
            images: ['leo.jpg'],
            title: 'LEO',
            file: 'LEO.mp3'
    
            
        },
        // Add more songs with their respective images here
    ];

    let currentSongIndex = 0;

    function loadSong() {
        audio.src = songs[currentSongIndex].file;
        songTitle.textContent = songs[currentSongIndex].title;
        displayImages();
    }

    function play() {
        audio.play();
    }

    function pause() {
        audio.pause();
    }

    function stop() {
        audio.pause();
        audio.currentTime = 0;
    }

    function playNext() {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
            loadSong();
            play();
        }
    }

    function playPrev() {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            loadSong();
            play();
        }
    }

    function displayImages() {
        imageContainer.innerHTML = '';
        songs[currentSongIndex].images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Song Image';
            imageContainer.appendChild(imgElement);
        });
    }

    playButton.addEventListener('click', play);
    pauseButton.addEventListener('click', pause);
    stopButton.addEventListener('click', stop);
    nextButton.addEventListener('click', playNext);
    prevButton.addEventListener('click', playPrev);

    // Load the first song
    loadSong();
});
