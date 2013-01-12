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

        var totalTime = 0;
        $('#wrapper').find('section#' + step + '-list div')
            .each(function (index, element) {
                var sleepTime = Math.floor(Math.random() * 1000);
                totalTime += sleepTime;
                var t = setTimeout(function () {
                    var d = Math.floor(Math.random() * 500);
                    $(element).fadeTo(d, 1, function () {
                        var l = ($('#wrapper').find('section#' + step + '-list div:animated')).length;
                        if (l == 0)
                            $('#wrapper').find('section#' + step + '-list a.next').fadeIn('fast');
                    });
                }, sleepTime);
            });
//        setTimeout(function (){
//            $('#wrapper').find('section#' + step + '-list a.next').fadeIn('fast');
//        }, totalTime);

    }

    var toggleActiveStep = function (step) {

        $('aside#main-steps').find('a').removeClass('current-step');
        $('aside#main-steps').find('a#' + step).addClass('current-step');

    }

});
