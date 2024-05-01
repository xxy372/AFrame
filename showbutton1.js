AFRAME.registerComponent('showbutton1', {
    init: function () {
      // Get reference to the entity
      var el = this.el;
  
      // Get reference to the text entity
      var showbutton = document.querySelector('#showbutton1');
      var ep1_1 = document.querySelector('#ep1_1');

  
      // Event listener for click event on the entity
      el.addEventListener('click', function () {
        // Check if the clicked entity is sphere 1
        if (el.id === '1' && !showbutton.getAttribute('visible')) {
          console.log('Sphere 1 is clicked!');
          // Set visibility of the text entity to true
          showbutton.setAttribute('visible', true);
        }else if(el.id=== 'showbutton1'){
            console.log('showbutton is clicked');

            if(!ep1_1.getAttribute('visible')){
                ep1_1.setAttribute('visible', true);
            }else if(ep1_1.getAttribute('visible')){
                ep1_1.setAttribute('visible', false);
            }
        }else if(el.id ==='1' && showbutton.getAttribute('visible')){
          console.log('hide showbutton');
          showbutton.setAttribute('visible', false);
          ep1_1.setAttribute('visible', false);
        }
      });
    }
  });
  