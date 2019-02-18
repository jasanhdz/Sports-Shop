      var consulta = window.matchMedia('(max-width: 500px)');
			consulta.addListener(mediaQuery);

			var $burgerButton = document.getElementById('burger-button'); 
			var $menu = document.getElementById('menu');
			function toggleMenu(){
        $menu.classList.toggle('active');
				$burgerButton.classList.toggle('icon-close');
				// document.body.style.backgroundColor = "rgb(45, 182, 201, .8)";
			};

			function showMenu(){
				$menu.classList.add('active');
			};

			function hideMenu(){
				$menu.classList.remove('active');
			};

			function mediaQuery(){
				if(consulta.matches){
					// Si se cumple hagamos esto
					console.log('se cumplio la condición');
					$burgerButton.addEventListener('click', toggleMenu); 
				} else {
					$burgerButton.removeEventListener('click', toggleMenu);
					//Si no se cumple hagamos esto
					console.log('no se cumplió la condición');
				}
			}
			mediaQuery();

			// $burgerButton.addEventListener('touchstart', toggleMenu); 
			
			//Gestos Touch
			var $body = document.body;
			var gestos = new Hammer($body);
			gestos.on('swipeleft', hideMenu);
      gestos.on('swiperight', showMenu);
      
      function imgActive() {
        console.log("hicimos match con el articulo");
      }

		// const $open = document.getElementById("open");
		// const $activeMenu = document.getElementById("activeMenu");
		// $open.addEventListener('click', (event) => {
		// 	$activeMenu.classList.toggle("active");
		// })