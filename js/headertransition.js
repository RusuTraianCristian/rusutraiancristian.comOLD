var header = $('header'),
    headerHeight = header.height(),
    treshold = 0,
    lastScroll = 0;

$(document).on('scroll', function (evt) {
    var newScroll = $(document).scrollTop(),
        diff = newScroll-lastScroll;

    treshold = (treshold+diff>headerHeight) ? headerHeight : treshold+diff;
    treshold = (treshold < 0) ? 0 : treshold;

    header.css('top', (-treshold)+'px');

    lastScroll = newScroll;
});
