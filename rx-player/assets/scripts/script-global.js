$(document).ready(() => {
    // Untuk memastikan footer selalu di paling bawah layar
    function repositionFooter() {
        if ($('#footer').offset().top + $('#footer').outerHeight() < $(window).outerHeight()) {
            $('#content').outerHeight($(window).height() - $('#footer').outerHeight());
        }
    }

    setTimeout(() => {
        repositionFooter();
    }, 1);

    $(window).on('resize', () => {
        repositionFooter();
    });


    // Untuk ubah posisi label saat klik text input
    $('.input-container input').on('focusin', e => {
        $(e.currentTarget).siblings('label').css({
            top: '-12px',
            fontSize: '12px'
        });
    });
    $('.input-container input').on('focusout', e => {
        if ($(e.currentTarget).val() === '') {
            $(e.currentTarget).siblings('label').css({
                top: '',
                fontSize: ''
            });
        }
    });
});