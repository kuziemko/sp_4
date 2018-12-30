 function openManuActive(x) {
            x.classList.toggle("change");
        } //nav open-close


        wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init(); //animacje


 $(document).ready(function(){

                $('.close_menu').click(function(){
                   $('.navmenu').removeClass('navmenu_ative'); 
                   $('.nav').removeClass('nav_active');
                }); // glowna nawigacja po kliknieciu znika



                $('.openmenu').click(function(){
            $('#ukryj').toggleClass('remove_dispaly');
            $('#podstrony .navmenu_pdst').toggleClass('remove_dispaly');
            openManuActive(this);
        })//menu open-close

                $('#pomin').click(function(){
                    $('.navmenu').animate({left: '0'});
                     $('#trythis').css('background-color', 'red');
                     $('.navmenu li').addClass('remove_dispaly')
                }) // pomin film

                $('a[href^="#"]').on('click', function(event) {
    
                var target = $( $(this).attr('href') );
            
                    if( target.length ) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 900);
                    }
                }); // przerzuca do wybranego elementu na storonie


                $('#ukryj').hover(function(e){
                       e.preventDefault(); 
                    $('.navmenu').stop(true, false).animate({left: '0'}, 300);
                     $('#trythis').css('background-color', 'red');
                },
                function(e){
                     e.preventDefault(); 
                     $('#trythis').css('background-color', '#0093dd');
                     $('.navmenu').stop(true, false).animate({left: '-12vw'});
        
                })
                 $("#gallery").unitegallery();
                
            });//jquery ready    