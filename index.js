// BACK TO TOP

/* Seleccionamos el boton con la clase back-to-top */
let backToTopBtn = document.querySelector('.back-to-top')

/* Llamamos la funcion Scroll de la pagina */
window.onscroll = () => {
    /* Si el scroll baja 200px, entonces el boton con la clase back-to-top 
        sera visible, de lo contrario continuara o se hará oculto */
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

// TOP NAV MENU

/* Seleccionamos los div con la clase menu-item */
let menuItems = document.getElementsByClassName('menu-item')

/* Creamos un array con cada elemento */
Array.from(menuItems).forEach((item, index) => {
    /* Al presionar cada div */
    item.onclick = (e) => {
        /* Seleccionamos el div con la clase .active */
        let currMenu = document.querySelector('.menu-item.active')

        /* Removemos la clase .active del div */
        currMenu.classList.remove('active')
        
        /* Al div seleccionado le agregamos la clase active */
        item.classList.add('active')
    }
})

// FOOD CATEGORY

/*  Seleccionar el Div de los cart y los botones */
let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

/* Creamos un array con los botones */

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        /* Selecionamos el boton con la clase .active */
        let currCat = foodCategory.querySelector('button.active')

        /* Removemos la clase active del boton */
        currCat.classList.remove('active')

        /* Asignamos la clase active al boton que se seleccione */
        e.target.classList.add('active')

        /* Agregamos el valor que viene en la clase data-food-type que esta asiganada en cada boton,
            de esa manera el div con clase food-item-wrap queda con <div class = "food-item-wrap ensalada" />,
            estos valores ya estan generados en el css linea 394 a 406 */
        foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})

// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
}

/* Seleccionamos todas las clases con .play-on-scroll */
let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    /* Obtenemos el tamaño y la posicion del elemento */
    let rect = el.getBoundingClientRect()
    
    /*
        window.innerHeight = devuelve la altura en pixeles de la ventana,
        document.documentElement.clientheight = devuelve la altura de un elemento en pixeles
    */
    return (
        /*  */
        (rect.top <= 0 && rect.bottom >= 0) 
        || 
        (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

/* Iteramos cada elemento con la clase play-on-scroll */
loop = () => {
    elToShow.forEach((item, index) => {
        /* Llamamos la funcion isElInViewport si es verdadera y pasamos el parametro (que es el item con la clase) */
        if (isElInViewPort(item)) {
            /* Al item le agregamos la clase .start */
            item.classList.add('start')
        } else {
            /* Al item le removemos la clase .start */
            item.classList.remove('start')
        }
    })

    /** Llamamos la funcion scroll */
    scroll(loop)
}

loop()

// MOBILE NAV

/* Seleccionamos los div con la clase mb-nav-item */
let bottomNavItems = document.querySelectorAll('.mb-nav-item')

/* Seleccionamos el div con la clase mb-move-item */
let bottomMove = document.querySelector('.mb-move-item')

/* Recorremos cada div */
bottomNavItems.forEach((item, index) => {
    /* Accionamos cada div */
    item.onclick = (e) => {
        console.log('object')
        /* Selecciona el div con la clase .active */
        let crrItem = document.querySelector('.mb-nav-item.active')
        /* Removemos la clase active del div */
        crrItem.classList.remove('active')

        /* Añadimos la clase active al div seleccionado */
        item.classList.add('active')

        //console.log(index)
        /* Agregamos un valor al atributo left de la clase mb-move-item linea 633 */
        bottomMove.style.left = index * 25 + '%'
    }
})