const $burguerButton = document.getElementById('burguer-button');
    const $menu = document.getElementById('menu');
    
    const consulta = window.matchMedia('(max-width: 500px)');
    consulta.addListener(mediaQuery);
    
    function ToggleMenu() {
      $menu.classList.toggle("active");
      $burguerButton.classList.toggle('icon-cross');
    }

    function mediaQuery() {
      if(consulta.matches) {
        console.log("Se cumplió la condición");
        // Si la condición de la resolución se cumple activamos la clase css
        $burguerButton.addEventListener('click', ToggleMenu);

      } else {
        $burguerButton.removeEventListener('click', ToggleMenu);
        console.log("No se cumplió la condición");
      }
    }