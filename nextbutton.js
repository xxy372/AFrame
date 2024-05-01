AFRAME.registerComponent('nextbutton', {
    init: function () {
      // Get references to the intro entities
      var intro1 = document.querySelector('#intro1');
      var intro2 = document.querySelector('#intro2');
      var intro3 = document.querySelector('#intro3');
      var intro4 = document.querySelector('#intro4');
  
      // Get reference to the Next button
      var nextButton = document.querySelector('#next');
  
      // Add event listener to the Next button
      nextButton.addEventListener('click', function () {
        // Hide the previous intro if visible and show the next one
        if (!intro2.getAttribute('visible') && intro1.getAttribute('visible')) {
          intro1.setAttribute('visible', false);
          intro2.setAttribute('visible', true);
        } else if (!intro3.getAttribute('visible') && intro2.getAttribute('visible')) {
          intro2.setAttribute('visible', false);
          intro3.setAttribute('visible', true);
        } else if (!intro4.getAttribute('visible') && intro3.getAttribute('visible')) {
          intro3.setAttribute('visible', false);
          intro4.setAttribute('visible', true);
          // Hide the Next button after showing all intros
          nextButton.setAttribute('visible', false);
        }
      });
    }
  });
  