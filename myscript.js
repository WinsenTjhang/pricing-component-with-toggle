var checkbox = $('input[type="checkbox"]');

checkbox.click(function () {
    if ($(this).prop("checked") == false) {
        $('.monthly').addClass('hide');
        $('.annual').removeClass('hide');
    } else if ($(this).prop("checked") == true) {
        $('.monthly').removeClass('hide');
        $('.annual').addClass('hide');
    }
});