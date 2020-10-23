$(document).ready(() => {
    let topMusicSliderContainer = $('#slider-top-music')
    let topMusicSliderWrapper = $('.slider-wrapper', topMusicSliderContainer)
    let topMusicSliderWidth = topMusicSliderWrapper.width();
    let topMusicSlider = $('.slider', topMusicSliderWrapper);
    let topMusicSliderCount = $('div', topMusicSlider).length;
    let topMusicSliderCurrent = 0;

    topMusicSlider.width(topMusicSliderCount * topMusicSliderWidth);

    function setTopMusicSlider(index) {
        index = index % topMusicSliderCount;
        if (index < 0) {
            index += topMusicSliderCount;
        }

        $('.slider', topMusicSliderWrapper).animate({left: '+=' + topMusicSliderWidth * (topMusicSliderCurrent - index)}, 500);

        $(`.slider-dot`, topMusicSliderContainer).removeClass('active');
        $(`.slider-dot[sliderdot="${index + 1}"]`, topMusicSliderContainer).addClass('active');

        topMusicSliderCurrent = index;
    }

    $('.slider-prev', topMusicSliderWrapper).on('click', () => {
        setTopMusicSlider(topMusicSliderCurrent - 1);
    });

    $('.slider-next', topMusicSliderWrapper).on('click', () => {
        setTopMusicSlider(topMusicSliderCurrent + 1);
    });

    $('.slider-dot', topMusicSliderContainer).on('click', event => {
        setTopMusicSlider(parseInt($(event.currentTarget).attr('sliderdot')) - 1);
    });

    setTopMusicSlider(topMusicSliderCurrent);

    setInterval(() => setTopMusicSlider(topMusicSliderCurrent + 1), 5000);
});