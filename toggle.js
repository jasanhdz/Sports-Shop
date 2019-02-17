      var consulta = window.matchMedia('(max-width: 500px)');
			consulta.addListener(mediaQuery);

			var $burgerButton = document.getElementById('burguer-button'); 
			var $menu = document.getElementById('menu');
			function toggleMenu(){
        $menu.classList.toggle('active');
        $burguerButton.classList.toggle('icon-close');
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
					$burgerButton.addEventListener('touchstart', toggleMenu); 
				} else {
					$burgerButton.removeEventListener('touchstart', toggleMenu);
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