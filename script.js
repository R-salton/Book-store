
//----------------search button-------------------------------

searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

//----------------------login issues---------------------------------------


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');

}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}
//---------------------------------------------------------------
window.onscroll = () =>{

    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');

    }

}
window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');

    }

}

//swiper codes

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteration: false,
    }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 4,
    
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });