AFRAME.registerComponent('showbutton2', {
    init: function () {
      // Get reference to the entity
      var el = this.el;
  
      // Get reference to the text entity
      var showbutton = document.querySelector('#showbutton2');
      var ep2 = document.querySelector('#ep2');

  
      // Event listener for click event on the entity
      el.addEventListener('click', function () {
        // Check if the clicked entity is sphere 1
        if (el.id === '2' && !showbutton.getAttribute('visible')) {
          console.log('Sphere 2 is clicked!');
          // Set visibility of the text entity to true
          showbutton.setAttribute('visible', true);
        }else if(el.id=== 'showbutton2'){
            console.log('showbutton is clicked');

            if(!ep2.getAttribute('visible')){
                console.log('show ep2');
                ep2.setAttribute('visible', true);
            }else if(ep2.getAttribute('visible')){
                ep2.setAttribute('visible', false);
            }
        }else if(el.id ==='2' && showbutton.getAttribute('visible')){
            console.log('hide showbutton');
            showbutton.setAttribute('visible', false);
        }
      });
    }
  });
  