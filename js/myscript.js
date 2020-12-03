   $(function(){
        const loading = $('.loading');

        $(window).on('load',function(){
            loading.remove();
        });
        // 54.로딩 이후에 가로 스크롤 다시 생기도록 설정
        $(window).on('pageshow',function(){
            $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'})
            $('body').css('overflow','visible');
        });

          $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
        });

        $('.back-to-top').click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 1500, 'easeInOutExpo');
          return false;
        });

        // 19.캐로셀 옵션 설정
        // $('.carousel').carousel({
        // 	interval : 3000
        // });
        // 38.animatescroll plugin 동작구문
        $('.navbar li:nth-child(1) a').click(function(){
            $('#top').animatescroll({padding:50});
        })
        $('.navbar li:nth-child(2) a').click(function(){
            $('#mydream').animatescroll({padding:50});
        })
        $('.navbar li:nth-child(3) a').click(function(){
            $('#product').animatescroll({padding:50});
        })
        $('.navbar li:nth-child(4) a').click(function(){
            $('#cf').animatescroll({padding:50});
        })
        $('.navbar li:nth-child(5) a').click(function(){
            $('#store').animatescroll({padding:50});
        })
        $('.navbar li:nth-child(6) a').click(function(){
            $('#service').animatescroll({padding:50});
        })
    })
        // waypoint plugin 실행 구문

    //////////////////////////////// wp1 ////////////////////////////////////////////
        $('.wp1').waypoint(function(direction){
          if(direction==='down'){
            $('.wp1').addClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'90%'
        })
        $('.wp1').waypoint(function(direction){
          if(direction==='up'){
            $('.wp1').removeClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'90%'
        })

     //////////////////////////////// wp2 ////////////////////////////////////////////    
         $('.wp2').waypoint(function(direction){
          if(direction==='down'){
            $('.wp2').addClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'80%'
        })
        $('.wp2').waypoint(function(direction){
          if(direction==='up'){
            $('.wp2').removeClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'80%'
        })

    //////////////////////////////// wp3 ////////////////////////////////////////////    
         $('.wp3').waypoint(function(direction){
          if(direction==='down'){
            $('.wp3').addClass('animate__animated animate__fadeIn');
          }
        },{
          offset:'90%'
        })
        $('.wp3').waypoint(function(direction){
          if(direction==='up'){
            $('.wp3').removeClass('animate__animated animate__fadeIn');
          }
        },{
          offset:'90%'
        })

    //////////////////////////////// wp4 ////////////////////////////////////////////    
         $('.wp4').waypoint(function(direction){
          if(direction==='down'){
            $('.wp4').addClass('animate__animated animate__slideInLeft');
          }
        },{
          offset:'100%'
        })
        $('.wp4').waypoint(function(direction){
          if(direction==='up'){
            $('.wp4').removeClass('animate__animated animate__slideInLeft');
          }
        },{
          offset:'100%'
        })
    //////////////////////////////// wp5 ////////////////////////////////////////////    
         $('.wp5').waypoint(function(direction){
          if(direction==='down'){
            $('.wp5').addClass('animate__animated animate__slideInRight');
          }
        },{
          offset:'90%'
        })
        $('.wp5').waypoint(function(direction){
          if(direction==='up'){
            $('.wp5').removeClass('animate__animated animate__slideInRight');
          }
        },{
          offset:'90%'
        })   
    //////////////////////////////// wp6 ////////////////////////////////////////////    
         $('.wp6').waypoint(function(direction){
          if(direction==='down'){
            $('.wp6').addClass('animate__animated animate__slideInLeft');
          }
        },{
          offset:'90%'
        })
        $('.wp6').waypoint(function(direction){
          if(direction==='up'){
            $('.wp6').removeClass('animate__animated animate__slideInLeft');
          }
        },{
          offset:'90%'
        }) 
    //////////////////////////////// wp7 ////////////////////////////////////////////    
         $('.wp7').waypoint(function(direction){
          if(direction==='down'){
            $('.wp7').addClass('animate__animated animate__slideInRight');
          }
        },{
          offset:'90%'
        })
        $('.wp7').waypoint(function(direction){
          if(direction==='up'){
            $('.wp7').removeClass('animate__animated animate__slideInRight');
          }
        },{
          offset:'90%'
        })
     //////////////////////////////// wp8 ////////////////////////////////////////////    
         $('.wp8').waypoint(function(direction){
          if(direction==='down'){
            $('.wp8').addClass('animate__animated animate__zoomIn');
          }
        },{
          offset:'90%'
        })
        $('.wp8').waypoint(function(direction){
          if(direction==='up'){
            $('.wp8').removeClass('animate__animated animate__zoomIn');
          }
        },{
          offset:'90%'
        })

       //////////////////////////////// wp9 ////////////////////////////////////////////    
         $('.wp9').waypoint(function(direction){
          if(direction==='down'){
            $('.wp9').addClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'80%'
        })
        $('.wp9').waypoint(function(direction){
          if(direction==='up'){
            $('.wp9').removeClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'80%'
        })  

       //////////////////////////////// wp10 ////////////////////////////////////////////    
         $('.wp10').waypoint(function(direction){
          if(direction==='down'){
            $('.wp10').addClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'50%'
        })
        $('.wp10').waypoint(function(direction){
          if(direction==='up'){
            $('.wp10').removeClass('animate__animated animate__fadeInDown');
          }
        },{
          offset:'50%'
        })



  
