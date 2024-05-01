AFRAME.registerComponent('showbutton3', {
    init: function () {
      // Get reference to the entity
      var el = this.el;
  
      // Get reference to the text entity
      var showbutton = document.querySelector('#showbutton3');
      var ep3 = document.querySelector('#ep3');
      var end = document.querySelector('#end');

  
      // Event listener for click event on the entity
      el.addEventListener('click', function () {
        // Check if the clicked entity is sphere 1
        if (el.id === '3' && !showbutton.getAttribute('visible')) {
          console.log('Sphere 3 is clicked!');
          // Set visibility of the text entity to true
          showbutton.setAttribute('visible', true);
        }else if(el.id=== 'showbutton3'){
            console.log('showbutton is clicked');

            if(!ep3.getAttribute('visible')){
                ep3.setAttribute('visible', true);
            }else if(ep3.getAttribute('visible')){
                ep3.setAttribute('visible', false);
            }
        }else if(el.id ==='3' && showbutton.getAttribute('visible')){
            console.log('hide showbutton');
            showbutton.setAttribute('visible', false);
            end.setAttribute('visible', true);
          }
      });
    }
  });
  