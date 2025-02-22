(function($) {
    'use strict';

    /* rtl check */
    function rtl_isotop() {
        if ($('body').hasClass("rtl")) {
            return false;
        } else {
            return true;
        }
    };

    function rtl_slick() {
        if ($('body').hasClass("rtl")) {
            return true;
        } else {
            return false;
        }
    };

    /* --------------------------------------------------
     * counter
     * --------------------------------------------------*/
    var icounter = function() {
        $('.icounter').each(function() {
            var pos_y = $(this).offset().top - window.innerHeight;
            var $this = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during = parseInt($this.attr('data-time')),
                topOfWindow = $(window).scrollTop();

            if (pos_y < topOfWindow) {
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    };

    var icounter2 = function() {
        $('.ot-counter2').each(function() {
            var pos_y = $(this).offset().top - window.innerHeight;
            var $this = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during = parseInt($this.attr('data-time')),
                topOfWindow = $(window).scrollTop();

            if (pos_y < topOfWindow) {
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    };

    var counter = function() {
        icounter();
        $(window).on('scroll', function() {
            icounter();
        });
    };

    var counter2 = function() {
        icounter2();
        $(window).on('scroll', function() {
            icounter2();
        });
    };

    /* --------------------------------------------------
     * progress bar
     * --------------------------------------------------*/
    function lineProgress() {
        $('.ot-progress').each(function() {
            var pos_y = $(this).offset().top;
            var value = $(this).find(".progress-bar").data('percent');
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find(".progress-bar").css({
                    'width': value
                }, "slow");
            }
        });
    };

    function circleProgress() {
        $('.circle-progress').each(function() {
            var bar_color = $(this).data('color');
            var bar_hei = $(this).data('height');
            var bar_size = $(this).data('size');
            var pos_y = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
    };

    function chartBar() {
        $('.ot-chart-bar:not([data-processed])').each(function() {
            var bar = $(this),
                chart = bar.find('.col-chart'),
                innerBar = bar.find('.inner-bar'),
                heightChart = bar.data('height'),
                progressEnd = bar.data('percent'),
                percentText = bar.find('.percent');
            var scrollTop = $(document).scrollTop() + $(window).height();

            if (scrollTop > bar.offset().top + bar.height()) {
                bar.attr("data-processed", "true");
                chart.css({
                    "height": heightChart + "px",
                    "animation": "slide-up 1.5s ease-in-out"
                });
                innerBar.css({
                    "height": heightChart + "px"
                });

                if (progressEnd) {
                    for (var i = 0; i <= 50; i++) {
                        (function(count) {
                            setTimeout(function() {
                                var num = ((progressEnd / 50) * count) + Number.EPSILON;
                                percentText.html(Math.round(num * 100) / 100 + "%");
                            }, 30 * count);
                        })(i);
                    }
                }

            }
        });
    };

    var progressBar = function() {
        lineProgress();
        circleProgress();
        $(window).on('scroll', function() {
            lineProgress();
            circleProgress();
        });
    };

    var initChart = function() {
        chartBar();
        $(window).on('scroll', function() {
            chartBar();
        });
    };

    /* --------------------------------------------------
     * tabs
     * --------------------------------------------------*/
    var customTabs = function() {

        $('.ot-tabs').each(function() {
            $(this).find('.tabs-heading li').first().addClass('current');
            $(this).find('.tab-content').first().addClass('current');
        });

        $('.tabs-heading li').on('click', function() {
            var tab_id = $(this).attr('data-tab');
            $(this).siblings().removeClass('current');
            $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    };

    /* --------------------------------------------------
     * accordions
     * --------------------------------------------------*/
    var customAccordions = function() {
        $('.ot-accordions').each(function() {
            var allPanels = $(this).find('.acc-content');
            $(this).find('.acc-toggle').on('click', function() {

                var $this = $(this),
                    $target = $this.next();

                if (!$target.hasClass('active')) {
                    allPanels.removeClass('active').slideUp(300);
                    allPanels.parent().removeClass('current');
                    $target.addClass('active').slideDown(300);
                    $target.parent().addClass('current');
                }

                return false;
            });
            $(this).find('.acc-toggle[data-default=yes]').trigger('click');
        });
    };

    /* --------------------------------------------------
     * accordions with icon
     * --------------------------------------------------*/
    var accordionsWithIcon = function($scope, $) {
        $scope.find('.ot-acc--with-icon').each(function() {
            var selector = $(this),
                content = selector.find('.ot-acc-item__content'),
                trigger = selector.find('.ot-acc-item__trigger');

            trigger.off("click");

            trigger.each(function() {
                if ($(this).data('default') == 'yes') {
                    $(this).next().addClass('active').slideDown(300);
                    $(this).parent().addClass('current');
                }
            });

            trigger.on('click', function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.next().toggleClass('active').slideToggle(300);
                $this.parent().toggleClass('current');
                content.not($this.next()).slideUp(300);
                trigger.not($this).parent().removeClass('current');
            });
        });
    };

    /* --------------------------------------------------
     * message box
     * --------------------------------------------------*/
    var messageBox = function() {
        $('.message-box > i').on('click', function() {
            $(this).parent().fadeOut();
        });
    };

    /* --------------------------------------------------
     * Image Carousel
     * --------------------------------------------------*/
    var imageCarousel = function() {
        $('.client-logos').each(function() {
            var $selector = $(this),
                $center = $selector.data('center') ? $selector.data('center') : false,
                $show = $selector.data('show') ? $selector.data('show') : 3,
                $tshow = $selector.data('show-tablet') ? $selector.data('show-tablet') : 2,
                $mshow = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $gaps = $selector.data('gaps') !== '' ? $selector.data('gaps') : 140,
                $tgaps = $selector.data('gaps-tablet') !== '' ? $selector.data('gaps-tablet') : $gaps,
                $mgaps = $selector.data('gaps-mobile') !== '' ? $selector.data('gaps-mobile') : $tgaps,
                $dots = $selector.data('dots');
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scro,
                arrows: false,
                dots: $dots,
                autoplay: false,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                centerMode: $center,
                centerPadding: '19%',
                rtl: rtl_slick(),
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: $tshow,
                            slidesToScroll: $tscro,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: $mscro,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * domain list
     * --------------------------------------------------*/
    var domainList = function() {
        $('.domain-list').each(function() {
            var $selector = $(this),
                $show = $selector.data('show') ? $selector.data('show') : 3,
                $tshow = $selector.data('show-tablet') ? $selector.data('show-tablet') : 2,
                $mshow = $selector.data('show-mobile') ? $selector.data('show-mobile') : 1,
                $scro = $selector.data('scroll') ? $selector.data('scroll') : 1,
                $tscro = $selector.data('scroll-tablet') ? $selector.data('scroll-tablet') : 1,
                $mscro = $selector.data('scroll-mobile') ? $selector.data('scroll-mobile') : 1,
                $gaps = $selector.data('gaps') !== '' ? $selector.data('gaps') : 140,
                $tgaps = $selector.data('gaps-tablet') !== '' ? $selector.data('gaps-tablet') : $gaps,
                $mgaps = $selector.data('gaps-mobile') !== '' ? $selector.data('gaps-mobile') : $tgaps,
                $dots = $selector.data('dots');
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scro,
                arrows: false,
                dots: $dots,
                autoplay: false,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: $tshow,
                            slidesToScroll: $tscro,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: $mscro,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * testimonials
     * --------------------------------------------------*/
    var testimonialSlider = function() {
        $('.ot-testimonials-slider').each(function() {
            var $selector = $(this),
                $status = $('.pagingInfo'),
                $show = $selector.data('show'),
                $scro = $selector.data('scroll'),
                $fade = false,
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots'),
                $mshow = $show;
            if (typeof $selector.data('fade') !== typeof undefined && $selector.data('fade') !== false) {
                $fade = $selector.data('fade');
            }
            if ($show > 3) {
                $mshow = $show - 1;
            }
            $selector.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.html('<span>0' + i + '</span> / 0' + slick.slideCount);
            });
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scro,
                arrows: $arr,
                dots: $dots,
                autoplay: false,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                fade: $fade,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1229,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    var testimonialSlider3 = function() {
        $('.ot-testimonials-slider-3').each(function() {
            var $selector = $(this),
                $status = $('.pagingInfo'),
                $arr = $selector.data('arrow');
            $selector.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.html('<span>0' + i + '</span> / 0' + slick.slideCount);
            });
            $selector.not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: $arr,
                dots: false,
                autoplay: true,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
            });
        });
    };
    /* --------------------------------------------------
     * Testimonial slider 5
     * --------------------------------------------------*/
    var testimonialSlider5 = function($scope, $) {
        $scope.find('.ot-testimonials-slider').each(function() {
            var $selector = $(this),
                $show = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots'),
                $auto = $selector.data('autoplay'),
                $auspeed = $selector.data('autoplaySpeed'),
                $mshow = $show,
                $marr = $arr,
                $mdots = $dots,
                $nav = $selector.parents('.ot-testimonials-5').find('.testi-slider-nav-1'),
                $nav2 = $selector.parents('.ot-testimonials-5').find('.testi-slider-nav-2');
            if ($nav.length > 0) {
                var customArrows = $nav;
            } else {
                var customArrows = $nav2;
            }
            if ($show == 4) {
                $mshow = $show - 1;
            }
            $selector.not('.slick-initialized').slick({
                rtl: rtl_slick(),
                slidesToShow: $show,
                slidesToScroll: $scroll,
                arrows: $arr,
                dots: $dots,
                autoplay: $auto,
                autoplaySpeed: $auspeed,
                adaptiveHeight: true,
                appendArrows: customArrows,
                prevArrow: '<button type="button" class="prev-nav flex-middle"><svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path d="M0.666671 10.1332L17.6667 0.318263L17.6667 19.9482L0.666671 10.1332Z" fill="url(#paint0_linear_74_30)"/><defs><linearGradient id="paint0_linear_74_30" x1="4.01887" y1="6.86588" x2="19.228" y2="17.5427" gradientUnits="userSpaceOnUse"><stop stop-color="#0FD2ED"/><stop offset="1" stop-color="#008DF3"/></linearGradient></defs></svg></button>',
                nextArrow: '<button type="button" class="next-nav flex-middle"><svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path d="M0.666671 10.1332L17.6667 0.318263L17.6667 19.9482L0.666671 10.1332Z" fill="url(#paint0_linear_74_30)"/><defs><linearGradient id="paint0_linear_74_30" x1="4.01887" y1="6.86588" x2="19.228" y2="17.5427" gradientUnits="userSpaceOnUse"><stop stop-color="#0FD2ED"/><stop offset="1" stop-color="#008DF3"/></linearGradient></defs></svg></button>',
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    };
    var testimonialSlider6 = function($scope, $) {
        $scope.find('.ot-testimonial-slider.ot-testimonial-s1').each(function() {
            var selector = $(this),
                sliderSettings = selector.data('slider_options');
            selector.not('.slick-initialized').slick({
                slidesToShow: parseInt(sliderSettings.slides_show_desktop),
                slidesToScroll: 1,
                rtl: rtl_slick(),
                autoplay: 'yes' === sliderSettings.autoplay,
                infinite: 'yes' === sliderSettings.loop,
                dots: sliderSettings.dots,
                arrows: sliderSettings.arrows,
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: parseInt(sliderSettings.slides_show_tablet),
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: parseInt(sliderSettings.slides_show_mobile),
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * industries
     * --------------------------------------------------*/
    var industriesSlider = function($scope, $) {
        $scope.find('.ot-industries-slider').each(function() {
            var $selector = $(this),
                $center = $selector.data('center'),
                $show = $selector.data('show'),
                $scro = $selector.data('scroll'),
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots');
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scro,
                arrows: $arr,
                dots: $dots,
                centerMode: $center,
                centerPadding: '19%',
                autoplay: true,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: false,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            centerMode: false,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                            arrows: false,
                            infinite: true,
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * projects filter isotope
     * --------------------------------------------------*/
    var projectsFilter = function($scope, $) {
        $scope.find('.projects-grid').each(function() {
            var $container = $(this);
            $container.imagesLoaded(function() {
                $container.isotope({
                    itemSelector: '.project-item',
                    animationEngine: 'css',
                    isOriginLeft: rtl_isotop(),
                });
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.on('click', function() {
                var $this = $(this);

                if ($this.hasClass('selected')) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                });
                return false;
            });
        });
    };

    /* --------------------------------------------------
     * Image Carousel With Tab
     * --------------------------------------------------*/
    var imageSliderSyncTab = function($scope, $) {
        $scope.find('.ot-image-slider-sync-tab').each(function() {
            var selector = $(this),
                selectorSlider = selector.find('.part-image-slider'),
                selectorTab = selector.find('.part-tab'),
                tabs = selectorTab.find('.ot-tabs').find('.tabs-heading li'),
                content = selectorTab.find('.ot-tabs').find('.tab-content');

            selectorSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                tabs.eq(nextSlide).trigger('click');
            });

            /* Tabs */
            tabs.first().addClass('current');
            content.first().addClass('current');
            tabs.on('click', function(e) {
                e.preventDefault();
                var tab_id = $(this).attr('data-tab'),
                    slideNumber = $(this).index();
                $(this).siblings().removeClass('current');
                $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
                selectorSlider.slick('slickGoTo', slideNumber);
            });

            /* Slider */
            selectorSlider.not('.slick-initialized').slick({
                rtl: rtl_slick(),
                slidesToShow: 1,
                fade: false,
                autoplay: false,
                infinite: false,
                dots: true,
                arrows: false,
                responsive: {}
            });
            customNav(selector);
        });
    };

    /* --------------------------------------------------
     * Custom Navigation Events
     * --------------------------------------------------*/
    function customNav(selector) {
        var customNav = selector.find('.custom-nav'),
            otSlick = selector.find('.part-image-slider');
        if (customNav.length > 0) {
            /* Go to the next item */
            customNav.find('.next-nav').on("click", function() {
                otSlick.slick('slickNext');
            });
            /* Go to the previous item */
            customNav.find('.prev-nav').on("click", function() {
                otSlick.slick('slickPrev');
            });
        }
        return false;
    }

    /* --------------------------------------------------
     * project carousel
     * --------------------------------------------------*/
    var portfolioSlider = function($scope, $) {
        $scope.find('.project-slider').each(function() {
            var $selector = $(this),
                $center = $selector.data('center'),
                $show = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots'),
                $mshow = $show,
                $marr = $arr,
                $mdots = $dots;
            if ($show == 3) {
                $mshow = $show - 1;
            }
            if ($(this).hasClass('arrow-s2')) {
                $marr = false;
                $mdots = true;
            }
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: 2,
                arrows: $arr,
                dots: $dots,
                centerMode: $center,
                centerPadding: '19%',
                autoplay: true,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: 1,
                            infinite: true,
                            centerPadding: '30px',
                            arrows: $arr,
                            dots: $dots
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            centerPadding: '30px',
                            arrows: $marr,
                            dots: $mdots
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '15px',
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * blog carousel
     * --------------------------------------------------*/
    var blogSlider = function($scope, $) {
        $scope.find('.post-carousel').each(function() {
            var $selector = $(this),
                $show = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots');
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scroll,
                arrows: $arr,
                dots: $dots,
                autoplay: true,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: $dots
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * team carousel
     * --------------------------------------------------*/
    var teamSlider = function($scope, $) {
        $scope.find('.ot-team-slider').each(function() {
            var $selector = $(this),
                $show = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $dots = $selector.data('dots'),
                $arr = $selector.data('arrow'),
                $pos_arr = $selector.data('arrow-pos'),
                $custom_prev = $scope.find('.custom-nav-top > .ot-prev'),
                $custom_next = $scope.find('.custom-nav-top > .ot-next');
            if ($pos_arr == 'top') {
                $arr = false;
            }
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scroll,
                arrows: $arr,
                dots: $dots,
                autoplay: true,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1170,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: $dots
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
            if ($pos_arr == 'top') {
                // Custom carousel nav
                $custom_prev.click(function() {
                    $(this).parents().find('.ot-team-slider').slick('slickPrev');
                });

                $custom_next.click(function(e) {
                    e.preventDefault();
                    $(this).parents().find('.ot-team-slider').slick('slickNext');
                });
            }
        });
    };

    /* --------------------------------------------------
     * Roadmap carousel
     * --------------------------------------------------*/
    var roadmapSlider = function($scope, $) {
        $scope.find('.roadmap-carousel').each(function() {
            var $selector = $(this),
                $show = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $arr = $selector.data('arrow'),
                $dots = $selector.data('dots');
            $selector.not('.slick-initialized').slick({
                slidesToShow: $show,
                slidesToScroll: $scroll,
                arrows: $arr,
                dots: $dots,
                autoplay: false,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                rtl: rtl_slick(),
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: $dots
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * Image Box Carousel
     * --------------------------------------------------*/
    var imageBoxCarousel = function($scope, $) {
        $scope.find('.ot-testimonial-slider.ot-testimonial-s7').each(function() {
            var selector = $(this),
                sliderSettings = selector.data('slider_options');
            selector.not('.slick-initialized').slick({
                slidesToShow: parseInt(sliderSettings.slides_show_desktop),
                slidesToScroll: 1,
                rtl: rtl_slick(),
                autoplay: 'yes' === sliderSettings.autoplay,
                infinite: 'yes' === sliderSettings.loop,
                autoplaySpeed: parseInt(sliderSettings.autoplay_time_out),
                dots: sliderSettings.dots,
                arrows: sliderSettings.arrows,
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: parseInt(sliderSettings.slides_show_tablet),
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: parseInt(sliderSettings.slides_show_mobile),
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
     * post grid
     * --------------------------------------------------*/
    var postGrid = function($scope, $) {
        $scope.find('.pgrid').each(function() {
            var $posts = $(this);
            $posts.imagesLoaded(function() {
                $posts.isotope({
                    itemSelector: '.pgrid-box',
                    animationEngine: 'css',
                    isOriginLeft: rtl_isotop()
                });
            });
        });
    };

    /* --------------------------------------------------
     * coming soon
     * --------------------------------------------------*/
    var countDown = function() {
        $('.ot-countdown').each(function() {
            var date = $(this).data('date'),
                zone = $(this).data('zone'),
                day = $(this).data('day'),
                days = $(this).data('days'),
                hour = $(this).data('hour'),
                hours = $(this).data('hours'),
                min = $(this).data('min'),
                mins = $(this).data('mins'),
                second = $(this).data('second'),
                seconds = $(this).data('seconds');
            $(this).countdown({
                date: date,
                offset: zone,
                day: day,
                days: days,
                hour: hour,
                hours: hours,
                minute: min,
                minutes: mins,
                second: second,
                seconds: seconds
            }, function() {
                alert('Done!');
            });
        });
    };

    /* ========================================== 
    search widget
    ========================================== */
    var searchButton = function() {
        $('.octf-search .toggle_search').on("click", function() {
            $(this).toggleClass("active");
            $('.h-search-form-field').toggleClass('show');
            if ($(this).find('i').hasClass("flaticon-search")) {
                $('.toggle_search > i').removeClass("flaticon-search").addClass("flaticon-close");
            } else {
                $('.toggle_search > i').removeClass("flaticon-close").addClass("flaticon-search");
            }
            $('.h-search-form-inner > form > input.search-field').focus();
        });
    }

    var otMarquee = function($scope, $) {
        $scope.find('.ot-industries-marquee').each(function() {
            var selector = $(this),
                marqueeContent = selector.find('.industries-marquee-content'),
                marqueeItem = marqueeContent.find('li'),
                marqueeItemLength = marqueeItem.length,
                marqueeElementsDisplayed = selector.data('display');
            marqueeContent.css('animation-duration', 'calc(' + marqueeItemLength + ' * 3s)');
            marqueeItem.css('width', 'calc(100% / ' + marqueeElementsDisplayed + ')');

            for (var i = 0; i < marqueeElementsDisplayed; i++) {
                $(marqueeItem.get(i)).clone().appendTo(marqueeContent);
            }
        });
    }

    /**
     * Elementor JS Hooks
     */
    $(window).on("elementor/frontend/init", function() {

        /* image carousel with tab */
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iimage-slider-sync-tab.default",
            imageSliderSyncTab
        );

        /* image box carousel */
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ot-imagebox-carousel.default",
            imageBoxCarousel
        );

        /*counter*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itext-marquee.default",
            otMarquee
        );
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iimage-marquee.default",
            otMarquee
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter.default",
            counter
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter2.default",
            counter2
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter3.default",
            counter
        );

        /*progress bar*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iprogress.default",
            progressBar
        );

        /*chart bar*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ichart.default",
            initChart
        );

        /*custom tabs*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itabs.default",
            customTabs
        );

        /*custom accordions*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iaccordions.default",
            customAccordions
        );

        /*Custom accordions with icon*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ot-accordions-with-icon.default",
            accordionsWithIcon
        );

        /*message box*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imessagebox.default",
            messageBox
        );

        /*image carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iimagecarousel.default",
            imageCarousel
        );

        /*image slider*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ot-image-slider.default",
            imageCarousel
        );

        /*Domain carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/idomaincarousel.default",
            domainList
        );

        /*testimonials*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials.default",
            testimonialSlider
        );

        /*testimonials 2*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials2.default",
            testimonialSlider
        );

        /*testimonials 3*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials3.default",
            testimonialSlider3
        );

        /*testimonials 4*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials4.default",
            testimonialSlider
        );

        /*testimonials 5*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials5.default",
            testimonialSlider5
        );

        /*testimonials 6*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials6.default",
            testimonialSlider6
        );

        /*industries*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iindustries.default",
            industriesSlider
        );

        /*projects filter isotope*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipfilter.default",
            projectsFilter
        );

        /*projects carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/irprojects.default",
            portfolioSlider
        );
        /*projects carousel 2*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/irprojects2.default",
            portfolioSlider
        );

        /*blog carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_carousel.default",
            blogSlider
        );

        /*blog carousel 2*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_carousel2.default",
            blogSlider
        );

        /*team carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imembercarousel.default",
            teamSlider
        );

        /*post grid*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_grid.default",
            postGrid
        );

        /*countdown*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icountdown.default",
            countDown
        );

        /*search widget*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/isearch.default",
            searchButton
        );

        /*roadmap carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iroadmap-slider.default",
            roadmapSlider
        );

    });

})(jQuery);