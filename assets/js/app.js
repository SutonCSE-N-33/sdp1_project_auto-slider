$(function () {

    // Search JS Start
    $('.searchOverlayOn').on('click', function(){
        $('.searchOverlay').fadeIn().css({
            visibility: 'visible',
            width: '100%',
            height: '100vh',
            top: '0',
            right: '0',
            transform: 'scale(1)'
        });
    })
    
    $('.searchOverlayOff').on('click', function(){
        $('.searchOverlay').fadeOut().css({
            width: '0',
            height: '0',
            transform: 'scale(0)'
        });
    })
    // //Search JS End

    // Login Signup JS Start
    $('.usericon').on('click', function(){
        $('#log_sign_in').css({
            // disabled: 'block',
            height: '581px',
        });
        
        $('.loginsignupbox').css({
            visibility: 'visible',
        });
    });

    $('.loginbtn').on('click', function(){
        $('.creating_form').css({
            left: '0',
        });
    });

    $('.signupbtn').on('click', function(){
        $('.creating_form').css({
            right: '100%',
            left: '-100%',
        });
    });
    // //Login Signup JS End
    
});



                //  auto slider part

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');


prevBtn.addEventListener('click',function(){
    slider.scrollLeft += 220;
})
nextBtn.addEventListener('click',function(){
    slider.scrollLeft -= 220;
})


let sliderWidth = slider.scrollWidth - slider.clientWidth;

function autoplay(){
    if(slider.scrollLeft > sliderWidth ){
        slider.scrollLeft -= sliderWidth;
    }else{
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoplay, 50);

const thumbnails = document.querySelectorAll('.thumbnail');
for(i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover',function(){
        clearInterval(play);
    });

    thumbnails[i].addEventListener('mouseout',function(){
        return play = setInterval(autoplay, 50);
    })

}

                //videos
  const videos = ["https://www.youtube.com/embed/FQ2gX8qQR_Y","https://www.youtube.com/embed/kBwrVEzKnrU","https://www.youtube.com/embed=mLL4ZDO8yu8","https://www.youtube.com/embed/5i6Pry-MkwY","https://www.youtube.com/embed/2AdEIyVUuxo","https://www.youtube.com/embed/9W1czfZU6SI","https://www.youtube.com/embed/RRi6UqNZhvU","https://www.youtube.com/embed/Cy8NA8SJewM","https://www.youtube.com/embed/nXN_Sixw16s","https://www.youtube.com/embed/-sEerYN7EUE"];

  
  for(let j = 0; j<videos.length; j++){
     for(let k = 0; k<thumbnails.length; k++){
         thumbnails[k].addEventListener('click',function(){
             document.querySelector('.video-slider').src = `${videos[k]}`;
         })
     }
 }


