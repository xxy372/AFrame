AFRAME.registerComponent('playm3', {
    init: function(){
        let el = this.el;
        let sky = document.querySelector('a-sky');
        let soundElement = null; // Variable to store the sound element
        let startTime = 0; // Variable to store the start time of the music
        let timer = null; // Variable to store the timer

        // Function to add or remove sound based on its state
        this.toggleSound = function(){
            // If sound is playing, pause it and remove the sound element
            if (soundElement) {
                soundElement.pause();
                soundElement = null; // Reset the sound element
                sky.setAttribute('src', 'img/open.png'); // Change sky image back to open.png
                clearInterval(timer); // Stop the timer
            } else {
                // Create a new sound entity
                soundElement = new Howl({
                    src: ['music/m3.mp3'], // Adjust the path and file extension accordingly
                    autoplay: true,
                    loop: false,
                    volume: 10, // Set volume to 1.5 times the normal volume
                    onplay: function() {
                        sky.setAttribute('src', 'img/test3.png'); // Change sky image to test1.png when music starts playing
                        startTime = Date.now(); // Get the start time of the music
                        timer = setInterval(function() {
                            // Calculate the elapsed time
                            let elapsedTime = (Date.now() - startTime) / 1000;
                            console.log('Elapsed Time:', elapsedTime.toFixed(2), 'seconds');

                            // If elapsed time is greater than or equal to 47 seconds, change the sky image to test2_2.png
                            if (elapsedTime >= 42 && elapsedTime < 74) {
                                sky.setAttribute('src', 'img/test3_2.png');
                            }
                            if (elapsedTime >= 76) {
                                sky.setAttribute('src', 'img/test2_2.png');
                            }
                            
                        }, 1000); // Update every second
                    }
                });
            }
        };

        // Event listener for click event
        el.addEventListener('click', this.toggleSound);
    }
});
