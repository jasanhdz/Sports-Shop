    const $burguerButton = document.getElementById('burguer-button');
    const $menu = document.getElementById('menu');
    
    const consulta = window.matchMedia('(max-width: 500px)');
    consulta.addListener(mediaQuery);
    
    function ToggleMenu() {
      $menu.classList.toggle("active");
      $burguerButton.classList.toggle('icon-cross');
    }
    
    function showMenu(){
      $menu.classList.add('active');
    };

    function hideMenu(){
      $menu.classList.remove('active');
    };

    function mediaQuery() {
      if(consulta.matches) {
        console.log("Se cumplió la condición");
        // Si la condición de la resolución se cumple activamos la clase css
        $burguerButton.addEventListener('touchstart', ToggleMenu);

      } else {
        $burguerButton.removeEventListener('touchstart', ToggleMenu);
        console.log("No se cumplió la condición");
      }
    }
    //Gestos Touch
			var $body = document.body;
			var gestos = new Hammer($body);
			gestos.on('swipeleft', hideMenu);
			gestos.on('swiperight', showMenu);

    var bLazy = new Blazy({
      // options
      selector: 'img'
  });