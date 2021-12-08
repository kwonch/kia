if (window.matchMedia("(min-width: 1500px)").matches) {
    $('.btn1 ').click(function () {
            $('.car li:last').prependTo('.car');
            $('.car').css('margin-left',-1500 );
            $('.car').stop().animate({ marginLeft: 0 },750)
        });



        $('.btn2 ').click(function () {
            $('.car').stop().animate({ marginLeft: -1500 }, 750, function () {
                $('.car li:first').appendTo('.car');
                $('.car').css({ marginLeft: 0 });
            });
        });
} else {
    const w=window.innerWidth; 

    $('.btn1 ').click(function () {
        $('.car li:last').prependTo('.car');
        $('.car').css({marginLeft:-w});
        $('.car').stop().animate({marginLeft:0},750);
    });

    $('.btn2 ').click(function () {
        $('.car').stop().animate({marginLeft:-w},750, function(){
          $('.car li:first').appendTo('.car');
          $('.car').css({marginLeft:0});
        });
    });
}





    $(function(){
        $('.ham').click(function(){
            $('.navigation2').slideToggle();
        });
    });

    $(window).resize(function () {

     if (window.innerWidth > 769);
        $('.navigation2,').hide();
            
    });





    if (window.matchMedia("(min-width: 1500px)").matches) {
        $(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();
       
        if(ws>300){
            $('#section1').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>1300){
            $('#section2').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>2200){
            $('#section3').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>3000){
            $('#section4').css("transform","translateY(0px)").css("opacity","1");
        }
        
        if(ws>3900){
            $('#section5').css("transform","translateY(0px)").css("opacity","1");
        }
        
      

    });
});
}else{
    $(function(){
        $(window).scroll(function(){
            var ws=$(this).scrollTop();
           
            if(ws>300){
                $('#section1').css("transform","translateY(0px)").css("opacity","1");
            }
            
            if(ws>600){
                $('#section2').css("transform","translateY(0px)").css("opacity","1");
            }
            
            if(ws>1200){
                $('#section3').css("transform","translateY(0px)").css("opacity","1");
            }
            
            if(ws>1800){
                $('#section4').css("transform","translateY(0px)").css("opacity","1");
            }
            
            if(ws>2500){
                $('#section5').css("transform","translateY(0px)").css("opacity","1");
            }
            
          
    
        });
    });

}