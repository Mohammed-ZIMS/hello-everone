$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY >20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY >50){
            $('.contaned').addClass('border-bottom');
        }else{
            $('.contaned').removeClass('border-bottom');
        }
        if(this.scrollY >295){
            $('.top').addClass('up');
        }else{
            $('.top').removeClass('up');
        }
    });

    $('.top').click(function(){
        $('html').animate({scrollTop:0})
    });

    // Toggel
    $('.OpenMeun').click(function(){
        $('.nav-list').toggleClass('active');
    });
    $('.OpenMeun').click(function(){
        $('.OpenMeun').toggleClass('cols')
    })

    
});

var typed = new Typed('#typing', {
    strings: ['Youtuber.','Blogger.','Web Designer.' ,'Student.' ],
    typeSpeed:100,
    backSpeed: 60,
    loop: true // Default value
  });
