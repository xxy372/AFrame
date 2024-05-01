AFRAME.registerComponent('playm1', {
    init: function(){
        let el = this.el;
        let sky = document.querySelector('a-sky');
        let soundElement = null; // Variable to store the sound element
        let startTime = 0; // Variable to store the start time of the music
        let timer = null; // Variable to store the timer

        // Get references to the intro entities
        var intro1 = document.querySelector('#intro1');
        var intro2 = document.querySelector('#intro2');
        var intro3 = document.querySelector('#intro3');
        var intro4 = document.querySelector('#intro4');
        var nextButton = document.querySelector('#next');


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
                    src: ['music/m1.mp3'], // Adjust the path and file extension accordingly
                    autoplay: true,
                    loop: false,
                    volume: 10, // Set volume to 1.5 times the normal volume
                    onplay: function() {
                        sky.setAttribute('src', 'img/test1.png'); // Change sky image to test1.png when music starts playing
                        startTime = Date.now(); // Get the start time of the music
                        timer = setInterval(function() {
                            // Calculate the elapsed time
                            let elapsedTime = (Date.now() - startTime) / 1000;
                            console.log('Elapsed Time:', elapsedTime.toFixed(2), 'seconds');

                            // If elapsed time is greater than or equal to 107 seconds, change the sky image
                            if (elapsedTime >= 107) {
                                sky.setAttribute('src', 'img/test1_2.png');
                            }
                        }, 1000); // Update every second
                    }
                });
            }
            if (intro1.getAttribute('visible')) {
                intro1.setAttribute('visible', false);
                nextButton.setAttribute('visible', false);
              } else if (intro2.getAttribute('visible')) {
                intro2.setAttribute('visible', false);
                nextButton.setAttribute('visible', false);
              } else if (intro3.getAttribute('visible')) {
                intro3.setAttribute('visible', false);
                nextButton.setAttribute('visible', false);
              } else if (intro4.getAttribute('visible')) {
                intro4.setAttribute('visible', false);
                // Hide the Next button after showing all intros
                nextButton.setAttribute('visible', false);
              }
        };

        // Event listener for click event
        el.addEventListener('click', this.toggleSound);

        
    }
});
