
(function ($) {
    $(function () {
        
        if ($(window).width() > 767) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop isSticky")),
                $fixedHeader = $('.fixedTop'),
                $headerHeight = $fixedHeader.outerHeight() + 5,
                lastPos = 0;


            $(window).resize(function () {
                if ($(window).width() < 768) {
                    $(".fixedTop").css('display', 'none');
                } else {
                    $(".fixedTop").css('display', 'block');
                }
            });

            $(window).on("scroll", function () {
                var fromTop = $(window).scrollTop();
                if (fromTop > $headerHeight + 15) {
                    $fixedHeader.css({
                        top: 0
                    });
                    
                    if(fromTop < lastPos){
                        $fixedHeader.css('top', '-' +$headerHeight+ 'px');
                    }
                    lastPos = fromTop;
                    
                    
                } else {
                    $fixedHeader.css('top', '-' + $headerHeight + 'px') + 10;
                }
            });

        }
        
        
        
        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

		
        if ($('.home').length) {
            $('body').addClass('home-page')
		}
		
		 if ($('.about').length) {
            $('body').addClass('about-page')
		}
		
		if ($('.contact').length) {
            $('body').addClass('contact-page')
        }

        if ($('.alt-page').length) {
            $('body').addClass('alt-body-page')
        }
        if ($('.alt-home').length) {
            $('body').addClass('alt-home-body')
        }


        

        if ($(window).width() < 767) {
            //var heroHeight = $(".hero-wrap").outerHeight();
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 1) {
                    $('body').addClass("mobiSticky")
                } else {
                    $('body').removeClass("mobiSticky")
                }
            })
            if($('.alt-page').length){
                $(window).on('scroll', function () {
                    if ($(window).scrollTop() > 1) {
                        $('body').addClass("AltSticky")
                    } else {
                        $('body').removeClass("AltSticky")
                    }
                })
            }
        }

        
        
        
        
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navopen")
        })
        
        


        $(".tab-nav ul li").each(function (i) {
            $('a',this).prepend(i < 9 ? '<span>' + '0' + (i + 1) + '</span>' : '<span>' +(i + 1) +'</span>');
        })

         if ($('.phone').length){
                /*var input = document.querySelector(".phone");
                window.intlTelInput(input,({

                }));*/
                $(".phone").intlTelInput({
                    separateDialCode: true,
                    preferredCountries: [ "ZA"],

                });  
            } 


        if ($(window).width() < 768) {
            if($("#partner-carousel").length){
                $('#partner-carousel').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                });
                
            }
        }


     
        
    $('#tabed > li').eq(0).addClass("active")
    $('.container-tab').hide()
    $('.container-tab').eq(0).show()

    $('#tabed > li').each(function(i){
        $(this).click(function(){

            if( $(this).hasClass("active") ) return false

            else{
                $("#tabed > li.active").removeClass("active")
                $(this).addClass('active')
                 $('.container-tab').hide()
                $('.container-tab').eq(i).show()
            }
        })
    })
        
        
        $('.view-profile').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var title = $(this).parents('.team-info-item').find(" > h4").text(),
                    designation = $(this).parents('.team-info-item').find('> span').text();
                console.log(title, designation);
                $(this).parents('.team-info-item').find('.profile-content > h3').text(title);
                $(this).parents('.team-info-item').find('.profile-content > h4').text(designation);
                $('.modal-content-inner > div').html($(this).parents('.team-info-item').find('.profile-content').clone());
                $('.modal').addClass('show');
            });
        });
       
        $('#modal-close, body').on('click', function(){
            $('.modal').removeClass('show');
        });
       
        $('.modal-content').on('click', function(e){
            e.stopPropagation();
        });
        
        
        
       // This function for scroll from bottom animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function

        

    }) // End ready function.









})(jQuery);

