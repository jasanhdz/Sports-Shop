const $clear = document.getElementById('clear');
    const $click = document.getElementById('click');
    const $arrow = document.getElementById('arrow');
    const $iconos = document.getElementById('iconos');
    const $logo = document.getElementById('logo');
    const $menu = document.getElementById('menu');
    const $menuActive = document.getElementById('menuActive');
    const $search = document.getElementById('search');
    const $overlay = document.getElementById('overlay');
    const $hContainer = document.getElementById('hContainer');
    const $busc = document.getElementById("busc");
    const $focus = document.getElementById('focus');

    $clear.addEventListener('click', () => { $busc.value = ""; })
    
    $focus.addEventListener('blur', (event) => {
      console.log("Esté es desenfoque:" + event);
      $focus.classList.remove("focus");
      $logo.classList.remove('unset');
      $hContainer.style.justifyContent = "space-evenly";
      $iconos.style.top = "0";
      $iconos.style.position = "initial";   
    }) 
    $arrow.addEventListener('click', (event) => {
      console.log("Esté es desenfoque:" + event);
      $focus.classList.remove("focus");
      $logo.classList.remove('unset');
      $hContainer.style.justifyContent = "space-evenly";
      $iconos.style.top = "0";
      $iconos.style.position = "initial";  
    })
    
    $busc.addEventListener('focus', (event) => {
      console.log(event)
      $hContainer.style.justifyContent = "space-between";
      $focus.classList.add('focus');
    });
   
    $search.addEventListener('click', (event) => {
      $focus.classList.add('focus');
      $logo.classList.add('unset');
      $iconos.style.top = "-63px";
      $iconos.style.position = "relative";
    })
    $menuActive.addEventListener('click', (event) => {
      $menu.classList.toggle("active");
      if($menu.className == "menu active") {
        $menuActive.style.backgroundColor = "#344c58";
      } else {
        $menuActive.style.backgroundColor = "unset";
      }
      
    })


    var consulta = window.matchMedia('(min-width: 880px)');
    var consultaMax = window.matchMedia('(max-width: 880px)'); 

    consulta.addListener(mediaQuery);
    
    function mediaQuery(){
      const $focusMenu = document.getElementsByClassName('focus-menu');
      const $activeOptionsMenu = document.getElementsByClassName('options');

				if(consulta.matches){
          // Si se cumple hagamos esto
          for (let i = 0; i < $activeOptionsMenu.length; i++) { 
            $focusMenu[i].addEventListener('mouseover', () => {
              $focusMenu[i].classList.add("activar");
              for (let index = 0; index < $activeOptionsMenu.length; index++) {
                if($activeOptionsMenu[i] != $activeOptionsMenu[index]) {
                  $activeOptionsMenu[index].classList.remove('activar');
                } 
              }             
            })
          console.log('se cumplio la condición');
          $overlay.addEventListener('click', () => {
            $activeOptionsMenu[i].classList.remove("activar");
          })
          
          $busc.addEventListener("blur" ,() => {
            $focus.classList.remove('focus');   
          })
          
          }
        } 
        else if(consultaMax.matches) {

          for(let i = 0; i < $focusMenu.length; i++) {
            $focusMenu[i].addEventListener('click', (event) => {
              $activeOptionsMenu[i].classList.toggle('active');
              for (let index = 0; index < $activeOptionsMenu.length; index++) {
                if($activeOptionsMenu[i] != $activeOptionsMenu[index]) {
                  $activeOptionsMenu[index].classList.remove('active');
                }              
              }
            })
          }

        } else {
					
					//Si no se cumple hagamos esto
					console.log('no se cumplió la condición');
				}
			}
			mediaQuery();