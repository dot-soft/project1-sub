jQuery(function ($) {

    var colors = {
        meat:'#a52a2a',
        bread:'#d5b146',
        vegetables:'#5fbf35',
        nuts:'#e27b82',
        results:'#ff8e00'
    };

    $('#wrapper').find('section div').click(function () {
        $(this).toggleClass('selected');
    });


    $('#main-steps').find('a').click(function () {
        var step = this.id;

        toggleActiveList(step);
        changeBgColors(step);
        fadeIngredients(step);
        toggleActiveStep(step);
    });


    $('section a.next').click(function () {
        clickNextButton($(this));
    });

    $('#navigation-slider, #logo').click(function (e) {
        e.preventDefault();
        if ($('#dot-soft-menu').width() != 0) {
            $('#navigation-slide-back').click();
            return;
        }
        $('#logo').css('opacity', 1);
        $('#title, #dot-soft-menu a, #navigation-slider').hide();
        $('#dot-soft-menu').fadeIn().animate({
            width: 700
        }, 1000, function() {
            $('#dot-soft-menu a').fadeIn();
            $('#navigation-slide-back').css('display', 'block');
        });
    });

    $('#navigation-slide-back').click(function (e) {
        e.preventDefault();
        $(this).hide();
        $('#dot-soft-menu a').fadeOut();
        $('#dot-soft-menu').animate({
            width: 0
        }, 1000, function () {
            $(this).fadeOut('fast', function () {
                $('#title, #navigation-slider').fadeIn();
                $('#logo').css('opacity', '');
            });

        });

    });

    //--------------------------------------functions----------------------------------------

    var changeBgColors = function (step) {
        $('#wrapper').find('section div').addClass('opacity-zero').attr('style', '');
        $('#main-steps').find('a').stop().css('background', '#333');

        $('#main-steps').find('a#' + step).css("background", colors[step]);
        $('body').css("background", colors[step]);
    }


    var toggleActiveList = function (step) {
        $('#wrapper').find('section.active').removeClass();
        $('#wrapper').find('section#' + step + '-list').addClass('active');
    }

    var fadeIngredients = function (step) {
        $('#wrapper').find('section#' + step + '-list a.next').hide();

        var maxTime = 0;
        $('#wrapper').find('section#' + step + '-list div')
            .each(function (index, element) {
                var sleepTime = Math.floor(Math.random() * 1000);
                maxTime = maxTime < sleepTime ? sleepTime : maxTime;
                var t = setTimeout(function () {
                    var d = Math.floor(Math.random() * 500);
                    $(element).fadeTo(d, 1);
                }, sleepTime);
            });
        setTimeout(function () {
            $('#wrapper').find('section#' + step + '-list a.next').fadeIn('fast');
        }, maxTime + 300);

    }

    var toggleActiveStep = function (step) {
        $('aside#main-steps').find('a').removeClass('current-step');
        $('aside#main-steps').find('a#' + step).addClass('current-step');
    }

    var clickNextButton = function (context) {
        var id = context.parent().next().attr('id');
        id = id.replace('-list', '');
        $('#main-steps').find('a#' + id).click();
    }

});
