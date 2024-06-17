document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const startButton = document.getElementById('start-button');
    const socialLinks = document.getElementById('social-links');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const song1 = document.getElementById('song1');
    const song2 = document.getElementById('song2');

    if (startButton) {
        console.log('Start button found');
        startButton.addEventListener('click', () => {
            console.log('Start button clicked');
            socialLinks.style.display = 'flex';
            startButton.style.display = 'none';

            // Hide parallax background
            document.querySelector('.parallax').style.display = 'none';

            // Start the first video and song
            video1.style.display = 'block';
            video1.play();
            song1.play();

            // When the first video ends, start the second video and song
            video1.addEventListener('ended', () => {
                video1.style.display = 'none';
                song1.pause();
                song1.currentTime = 0;

                video2.style.display = 'block';
                video2.play();
                song2.play();
            });

            // When the second video ends, loop it or add further actions here
            video2.addEventListener('ended', () => {
                video2.style.display = 'none';
                song2.pause();
                song2.currentTime = 0;
                // Add any additional actions or loops here
            });
        });
    } else {
        console.log('Start button not found');
    }
});
